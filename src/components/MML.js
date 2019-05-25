import parseXml from "@rgrove/parse-xml";
import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";
import React from "react";
import { sanitizeUrl } from "@braintree/sanitize-url";
import DatePicker from "react-datepicker";
import { Carousel } from "./Carousel";

export class MML extends React.PureComponent {
  static defaultProps = {
    layout: "narrow"
  };

  constructor(props) {
    super(props);
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = getFormData(event.currentTarget);
    const pairs = Object.keys(this.state).map((key, index) => {
      return { name: key, value: this.state[key] };
    });
    data.push(...pairs);
    this.props.onAction(data);
  };

  handleAction = attr => {
    console.log("handling action", attr);

    if (attr.url && attr.url.length) {
      window.location.href = sanitizeUrl(attr.url);
    } else {
      const data = {};
      data[attr.name] = attr.value;
      this.setState(data);
    }
  };

  render() {
    const that = this;

    function mmlToHTML(nodes) {
      const html = [];
      for (let n of nodes) {
        let children = "";
        if (n.children) {
          children = mmlToHTML(n.children);
        }

        if (n.name === "column") {
          const width = n.attributes.width ? n.attributes.width : 12;

          html.push(<div className={`mml-col-${width}`}>{children}</div>);
        } else if (n.name === "icon") {
          html.push(<i class="material-icons">{n.attributes.name}</i>);
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
          html.push(
            <div className={`mml-container mml-${that.props.layout}`}>
              <form onSubmit={that.handleSubmit}>{children}</form>
            </div>
          );
        } else if (n.name === "md") {
          html.push(<ReactMarkdown source={n.children[0].text} />);
        } else if (n.name === "text") {
          html.push(<p>{n.children[0].text}</p>);
        } else if (n.type === "text") {
          if (n.text.trim().length > 0) {
            html.push(<p>{n.text}</p>);
          }
        } else if (n.name === "input") {
          html.push(<input {...n.attributes} />);
        } else if (n.name === "separator") {
          html.push(<hr />);
        } else if (n.name === "image") {
          html.push(<img {...n.attributes} />);
        } else if (n.name === "select") {
          html.push(<select>{children}</select>);
        } else if (n.name === "option") {
          html.push(
            <option value={n.attributes.value}>{n.children[0].text}</option>
          );
        } else if (n.name === "carousel") {
          html.push(<Carousel items={children} />);
        } else if (n.name === "item") {
          html.push(<div className="mml-carousel-item">{children}</div>);
        } else if (n.name === "datepicker") {
          const initialDate = new Date(n.attributes.initial_date);
          html.push(
            <DatePicker
              selected={initialDate}
              onChange={that.handleAction.bind(that, n.attributes)}
            />
          );
        } else if (n.name === "timepicker") {
          const initialDate = new Date(n.attributes.initial_date);
          html.push(
            <DatePicker
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              timeCaption="Time"
              onChange={that.handleAction.bind(that, n.attributes)}
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
              className={`btn btn-${n.attributes.style}`}
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

    const html = mmlToHTML([parseXml(this.props.source)]);
    console.log("html", html);
    return html;
  }
}
