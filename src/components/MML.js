import parseXml from "@rgrove/parse-xml";
import ReactPlayer from "react-player";
import React from "react";
import { sanitizeUrl } from "@braintree/sanitize-url";
import { MMLMarkdown } from "./MMLMarkdown";
import DatePicker from "react-datepicker";
import { Carousel } from "./Carousel";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { Success } from "./Success";

export class MML extends React.PureComponent {
  static defaultProps = {
    loaderComponent: Loader,
    errorComponent: Error,
    successComponent: Success
  };

  constructor(props) {
    super(props);

    this.state = { error: "", loading: false, success: "" };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const data = [];
    const pairs = Object.keys(this.state).map((key, index) => {
      return { name: key, value: this.state[key] };
    });
    data.push(...pairs);

    console.log("loading...");
    this.setState({ loading: true, error: "", success: "" });
    try {
      await this.props.onAction(data);
      console.log("done");
      this.setState({ loading: false, error: "", success: "submitted" });
    } catch (e) {
      console.log("error");
      this.setState({ loading: false, error: "something is broken" });
      console.log("e", e);
    }
  };

  handleAction = (attr, event) => {
    console.log("handling action", attr, event);

    if (attr.url && attr.url.length) {
      window.location.href = sanitizeUrl(attr.url);
    } else {
      const data = {};
      data[attr.name] = attr.value || event.target.value;
      console.log("setting state", data);
      this.setState(data);
    }
  };

  handleDateChange = (attr, selectedDate) => {
    const data = {};
    data[attr.name] = selectedDate;
    this.setState(data);
  };

  render() {
    const that = this;

    /*
     * anything that changes state has a name attribute (select, text input etc.)
     */
    let mmlName = "";

    function filterDate(date) {
      return date;
    }

    function mmlToHTML(nodes) {
      const html = [];

      for (let n of nodes) {
        let children = "";
        if (n.children) {
          children = mmlToHTML(n.children);
        }

        if (n.name === "column") {
          const width = n.attributes.width ? n.attributes.width : 12;
          const offset = n.attributes.offset ? n.attributes.offset : 0;
          let classNames = `mml-col-${width}`;
          if (offset) {
            classNames = classNames + ` mml-offset-${offset}`;
          }

          const align = n.attributes.align ? n.attributes.align : "left";
          classNames = classNames + ` mml-align-${align}`;

          html.push(<div className={classNames}>{children}</div>);
        } else if (n.name === "icon") {
          html.push(<i class="material-icons">{n.attributes.name}</i>);
        } else if (n.name === "card") {
          html.push(<div class="mml-card">{children}</div>);
        } else if (n.name === "buttonlist") {
          html.push(<div class="mml-selectlist">{children}</div>);
        } else if (n.name === "row") {
          html.push(<div className="mml-row">{children}</div>);
        } else if (n.name === "overflow") {
          html.push(
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ...
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                {children}
              </div>
            </div>
          );
        } else if (n.name === "mml") {
          console.log("n.attributes.name", n.attributes.name);
          mmlName = n.attributes.name;
          html.push(
            <div className={`mml-container mml-${that.props.layout}`}>
              <form onSubmit={that.handleSubmit}>
                {children}
                <Loader loading={that.state.loading} />
                <Success success={that.state.success} />
                <Error error={that.state.error} />
              </form>
            </div>
          );
        } else if (n.name === "md") {
          html.push(<MMLMarkdown source={n.children[0].text} />);
        } else if (n.name === "text") {
          html.push(<p>{n.children[0].text}</p>);
        } else if (n.type === "text") {
          if (n.text.trim().length > 0) {
            html.push(<p>{n.text}</p>);
          }
        } else if (n.name === "input") {
          html.push(
            <input
              {...n.attributes}
              onChange={that.handleAction.bind(that, n.attributes)}
            />
          );
        } else if (n.name === "separator") {
          html.push(<hr />);
        } else if (n.name === "image") {
          html.push(<img {...n.attributes} />);
        } else if (n.name === "select") {
          html.push(
            <select
              {...n.attributes}
              onChange={that.handleAction.bind(that, n.attributes)}
            >
              {children}
            </select>
          );
        } else if (n.name === "option") {
          html.push(
            <option value={n.attributes.value}>{n.children[0].text}</option>
          );
        } else if (n.name === "carousel") {
          html.push(<Carousel items={children} />);
        } else if (n.name === "item") {
          html.push(<div className="mml-carousel-item">{children}</div>);
        } else if (n.name === "datepicker") {
          html.push(
            <DatePicker
              selected={that.state[n.attributes.name]}
              onChange={that.handleDateChange.bind(that, n.attributes)}
              filterDate={filterDate}
            />
          );
        } else if (n.name === "timepicker") {
          const initialDate = new Date(n.attributes.initial_date);
          html.push(
            <DatePicker
              selected={that.state[n.attributes.name]}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              timeCaption="Time"
              onChange={that.handleDateChange.bind(that, n.attributes)}
            />
          );
        } else if (n.name === "video") {
          html.push(
            <ReactPlayer
              className="react-player"
              url={n.attributes.url}
              width="100%"
              controls
            />
          );
        } else if (n.name === "button") {
          // TODO: create a button component that knows how to navigate to a url
          // TODO: fix this
          html.push(
            <button
              className={`mml-btn`}
              type="submit"
              onClick={() => that.handleAction(n.attributes)}
            >
              {n.attributes.value}
            </button>
          );
        } else if (n.type === "document") {
          return children;
        } else {
          console.log("unrecognized element", n);
        }
      }

      return html;
    }
    console.log("mmlName", mmlName);

    const html = mmlToHTML([parseXml(this.props.source)]);
    if (mmlName) {
      this.setState({ mml_name: mmlName });
    }
    console.log("html", html);
    return html;
  }
}
