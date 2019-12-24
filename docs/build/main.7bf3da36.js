;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1015: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'ConverterConfig',
        methods: [],
        props: [],
        examples: null
      }
    },
    1016: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Error',
        description: '',
        methods: [],
        props: [
          {
            type: { name: 'string' },
            required: !1,
            description: 'The error message',
            defaultValue: { value: "''", computed: !1 },
            tags: {},
            name: 'error'
          }
        ],
        examples: n(1017)
      }
    },
    1017: function(e, t, n) {
      var r = { './MMLContainer': n(22), react: n(0), './Error.js': n(74) },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Error$0 = require('./Error.js');\nconst Error = Error$0['Error'] || (Error$0.default || Error$0);",
          a
        )
      e.exports = [
        { type: 'markdown', content: 'Error component for MML' },
        {
          type: 'code',
          content:
            "const MMLContainer = require('./MMLContainer').MMLContainer\n\n;<MMLContainer>\n  <Error error={'Request failed, try again later'} />\n</MMLContainer>",
          settings: {},
          evalInContext: i
        }
      ]
    },
    1018: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Icon',
        description: '',
        methods: [],
        props: [
          {
            type: { name: 'string' },
            required: !0,
            description:
              'The name of the material icon, see https://material.io/resources/icons/',
            tags: {},
            name: 'name'
          }
        ],
        examples: n(1019)
      }
    },
    1019: function(e, t, n) {
      var r = { './MMLContainer': n(22), react: n(0), './Icon.js': n(128) },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Icon$0 = require('./Icon.js');\nconst Icon = Icon$0['Icon'] || (Icon$0.default || Icon$0);",
          a
        )
      e.exports = [
        {
          type: 'markdown',
          content:
            'Material Icons.\n\nSpecify the icon via name, available icons are listed here:\n<https://material.io/resources/icons/?style=baseline>'
        },
        {
          type: 'code',
          content:
            "const MMLContainer = require('./MMLContainer').MMLContainer\n\n;<MMLContainer>\n  <Icon name={'alarm'} />\n</MMLContainer>",
          settings: {},
          evalInContext: i
        }
      ]
    },
    1020: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Image',
        description: '',
        methods: [],
        props: [
          {
            type: { name: 'string' },
            required: !0,
            description: 'The url to load the image from',
            tags: {},
            name: 'src'
          }
        ],
        examples: n(1021)
      }
    },
    1021: function(e, t, n) {
      var r = { './MMLContainer': n(22), react: n(0), './Image.js': n(87) },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Image$0 = require('./Image.js');\nconst Image = Image$0['Image'] || (Image$0.default || Image$0);",
          a
        )
      e.exports = [
        { type: 'markdown', content: 'Image component' },
        {
          type: 'code',
          content:
            "const MMLContainer = require('./MMLContainer').MMLContainer\n\n;<MMLContainer>\n  <Image\n    src={\n      'https://images.unsplash.com/photo-1577046847380-eaf32b2775d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80'\n    }\n  />\n</MMLContainer>",
          settings: {},
          evalInContext: i
        }
      ]
    },
    1022: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Input',
        description:
          "Text input element. Usually you'll want to rely on regular messages\n",
        methods: [],
        props: [
          {
            type: { name: 'string' },
            required: !0,
            description: 'The name of the button',
            tags: {},
            name: 'name'
          }
        ],
        tags: {},
        examples: n(1023)
      }
    },
    1023: function(e, t, n) {
      var r = { './MMLContainer': n(22), react: n(0), './Input.js': n(125) },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Input$0 = require('./Input.js');\nconst Input = Input$0['Input'] || (Input$0.default || Input$0);",
          a
        )
      e.exports = [
        { type: 'markdown', content: 'Text input element' },
        {
          type: 'code',
          content:
            'const MMLContainer = require(\'./MMLContainer\').MMLContainer\n\n;<MMLContainer>\n  <Input name="answer" value="42" />\n</MMLContainer>',
          settings: {},
          evalInContext: i
        }
      ]
    },
    1024: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Loader',
        description: 'Loading indicator for MML\n',
        methods: [],
        props: [
          {
            type: { name: 'custom', raw: 'PropTypes.boolean' },
            required: !1,
            description: 'Loading boolean',
            defaultValue: { value: 'false', computed: !1 },
            tags: {},
            name: 'loading'
          }
        ],
        tags: {},
        examples: n(1025)
      }
    },
    1025: function(e, t, n) {
      var r = { './MMLContainer': n(22), react: n(0), './Loader.js': n(73) },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Loader$0 = require('./Loader.js');\nconst Loader = Loader$0['Loader'] || (Loader$0.default || Loader$0);",
          a
        )
      e.exports = [
        { type: 'markdown', content: 'Loader component for MML' },
        {
          type: 'code',
          content:
            "const MMLContainer = require('./MMLContainer').MMLContainer\n\n;<MMLContainer>\n  <Loader loading={true} />\n</MMLContainer>",
          settings: {},
          evalInContext: i
        }
      ]
    },
    1026: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'MD',
        description: 'MD renders a given text as markdown\n',
        methods: [],
        props: [
          {
            type: { name: 'string' },
            required: !0,
            description: 'The markdown text',
            tags: {},
            name: 'text'
          }
        ],
        tags: {},
        examples: n(1027)
      }
    },
    1027: function(e, t, n) {
      var r = { './MMLContainer': n(22), react: n(0), './MD.js': n(127) },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst MD$0 = require('./MD.js');\nconst MD = MD$0['MD'] || (MD$0.default || MD$0);",
          a
        )
      e.exports = [
        { type: 'markdown', content: 'MD node' },
        {
          type: 'code',
          content:
            "const MMLContainer = require('./MMLContainer').MMLContainer\n\n;<MMLContainer>\n  <MD\n    text={\n      'hello **world** and #hi. Note how not all markdown functions are allowed.'\n    }\n  />\n</MMLContainer>",
          settings: {},
          evalInContext: i
        }
      ]
    },
    1029: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'MML',
        description: '',
        methods: [],
        props: [
          {
            type: { name: 'string' },
            required: !0,
            description: 'The MML source to render',
            tags: {},
            name: 'source'
          },
          {
            type: { name: 'node' },
            required: !1,
            description: 'The error component',
            defaultValue: { value: 'ErrorComponent', computed: !0 },
            tags: {},
            name: 'Error'
          },
          {
            type: { name: 'node' },
            required: !1,
            description: 'The Loader component',
            defaultValue: { value: 'LoaderComponent', computed: !0 },
            tags: {},
            name: 'Loader'
          },
          {
            type: { name: 'node' },
            required: !1,
            description: 'The success message component',
            defaultValue: { value: 'SuccessComponent', computed: !0 },
            tags: {},
            name: 'Success'
          },
          {
            type: { name: 'object' },
            required: !1,
            description:
              'The convert config allows you to overwrite the MML to react conversion',
            tags: {},
            name: 'converterConfig'
          },
          {
            type: { name: 'func' },
            required: !1,
            description: 'The submit callback whenever a form is submitted',
            tags: {},
            name: 'submit'
          }
        ],
        examples: null
      }
    },
    1030: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'MMLContainer',
        description: '',
        methods: [],
        props: [
          {
            defaultValue: { value: 'ErrorComponent', computed: !0 },
            required: !1,
            description: '',
            tags: {},
            name: 'Error'
          },
          {
            defaultValue: { value: 'LoaderComponent', computed: !0 },
            required: !1,
            description: '',
            tags: {},
            name: 'Loader'
          },
          {
            defaultValue: { value: 'SuccessComponent', computed: !0 },
            required: !1,
            description: '',
            tags: {},
            name: 'Success'
          },
          {
            defaultValue: { value: 'null', computed: !1 },
            required: !1,
            description: '',
            tags: {},
            name: 'error'
          },
          {
            defaultValue: { value: 'false', computed: !1 },
            required: !1,
            description: '',
            tags: {},
            name: 'hasData'
          }
        ],
        examples: null
      }
    },
    1031: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Number',
        description: 'Mobile friendly number input\n',
        methods: [],
        props: [
          {
            type: { name: 'string' },
            required: !0,
            description: 'The name of the button',
            tags: {},
            name: 'name'
          }
        ],
        tags: {},
        examples: n(1032)
      }
    },
    1032: function(e, t, n) {
      var r = { './MMLContainer': n(22), react: n(0), './Number.js': n(129) },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Number$0 = require('./Number.js');\nconst Number = Number$0['Number'] || (Number$0.default || Number$0);",
          a
        )
      e.exports = [
        {
          type: 'markdown',
          content:
            'Easy input for numbers, mobile optimized.\nWill automatically use context[name] as the initial value'
        },
        {
          type: 'code',
          content:
            'const MMLContainer = require(\'./MMLContainer\').MMLContainer\n\n;<MMLContainer>\n  <Number name="answer" />\n</MMLContainer>',
          settings: {},
          evalInContext: i
        }
      ]
    },
    1033: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Row',
        description: '',
        methods: [],
        props: [
          {
            type: {
              name: 'union',
              value: [
                { name: 'arrayOf', value: { name: 'custom', raw: 'Column' } },
                { name: 'objectOf', value: { name: 'custom', raw: 'Column' } }
              ]
            },
            required: !1,
            description: 'The children of a row must be columns',
            tags: {},
            name: 'children'
          }
        ],
        examples: null
      }
    },
    1034: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Scheduler',
        description: '',
        methods: [],
        props: [],
        examples: null
      }
    },
    1035: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Success',
        description: '',
        methods: [],
        props: [
          {
            type: { name: 'string' },
            required: !1,
            description: 'The success message',
            defaultValue: { value: "''", computed: !1 },
            tags: {},
            name: 'success'
          }
        ],
        examples: null
      }
    },
    1036: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Text',
        description: 'Simple paragraph text element\n',
        methods: [],
        props: [
          {
            type: { name: 'string' },
            required: !0,
            description: 'The text to render',
            tags: {},
            name: 'text'
          }
        ],
        tags: {},
        examples: n(1037)
      }
    },
    1037: function(e, t, n) {
      var r = { './MMLContainer': n(22), react: n(0), './Text.js': n(126) },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Text$0 = require('./Text.js');\nconst Text = Text$0['Text'] || (Text$0.default || Text$0);",
          a
        )
      e.exports = [
        { type: 'markdown', content: 'Text node' },
        {
          type: 'code',
          content:
            "const MMLContainer = require('./MMLContainer').MMLContainer\n\n;<MMLContainer>\n  <Text text={'hello world'} />\n</MMLContainer>",
          settings: {},
          evalInContext: i
        }
      ]
    },
    1039: function(e, t, n) {
      'use strict'
      n.r(t)
      var r = n(35),
        a = n(6),
        i = n(56),
        s = n(0),
        o = n.n(s),
        c = n(281),
        u = n.n(c),
        l = n(52),
        p = n(10),
        d = n(15),
        m = n(14),
        j = n(16),
        h = (function() {
          function e(t, n, r) {
            Object(p.a)(this, e),
              (this.tagName = t),
              (this.node = n),
              (this.attr = this.node.attributes),
              (this.children = r)
          }
          return (
            Object(l.a)(e, [
              {
                key: 'getText',
                value: function() {
                  return (function(e) {
                    var t = ''
                    return (
                      'text' === e.type
                        ? (t = e.text)
                        : e.children &&
                          e.children.length &&
                          (t = e.children[0].text),
                      t
                    )
                  })(this.node)
                }
              },
              {
                key: 'initialState',
                value: function() {
                  return {}
                }
              },
              { key: 'validate', value: function() {} }
            ]),
            e
          )
        })()
      ;(h.data = !1),
        (h.validChildren = 'all'),
        (h.validAttributes = {}),
        (h.requiredAttributes = [])
      var _ = (function(e) {
        function t() {
          return (
            Object(p.a)(this, t),
            Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
          )
        }
        return Object(j.a)(t, e), t
      })(h)
      _.data = !0
      var f = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(h),
        S = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(_),
        y = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(_),
        g = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(j.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'initialState',
                value: function() {
                  var e = {}
                  return (
                    (e[this.node.attributes.name] = this.node.attributes.value),
                    e
                  )
                }
              }
            ]),
            t
          )
        })(_),
        x = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return (
            Object(j.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'initialState',
                value: function() {
                  var e = {}
                  return (
                    (e[this.node.attributes.name] = this.node.attributes.value),
                    e
                  )
                }
              }
            ]),
            t
          )
        })(_),
        b = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(_),
        v = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(h),
        C = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(h),
        M = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(h),
        E = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(h),
        O = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(h),
        L = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(h),
        B = (function(e) {
          function t() {
            return (
              Object(p.a)(this, t),
              Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
            )
          }
          return Object(j.a)(t, e), t
        })(h),
        T = {
          add_to_calendar: f,
          buttonlist: S,
          button: y,
          input: g,
          scheduler: b,
          carousel: v,
          column: C,
          item: M,
          row: E,
          icon: (function(e) {
            function t() {
              return (
                Object(p.a)(this, t),
                Object(d.a)(this, Object(m.a)(t).apply(this, arguments))
              )
            }
            return Object(j.a)(t, e), t
          })(h),
          image: O,
          md: L,
          text: B,
          number: x
        },
        w = n(140),
        $ = n(183),
        I = (function() {
          function e(t, n, r) {
            Object(p.a)(this, e),
              (this.node = t),
              (this.name = t.attributes.name),
              (this.children = n),
              (this.converterConfig = r || $.converterConfig)
          }
          return (
            Object(l.a)(e, [
              {
                key: 'toReact',
                value: function(e) {
                  var t = [],
                    n = e.children || [],
                    r = !0,
                    a = !1,
                    i = void 0
                  try {
                    for (
                      var s, o = n[Symbol.iterator]();
                      !(r = (s = o.next()).done);
                      r = !0
                    ) {
                      var c = s.value,
                        u = this.converterConfig[c.tagName]
                      if (!u)
                        throw Error(
                          'Converter not found for tag '
                            .concat(c.tagName, ', Available converters are ')
                            .concat(Object.keys(this.converterConfig))
                        )
                      var l = u(c, this.toReact(c))
                      t.push(l)
                    }
                  } catch (e) {
                    ;(a = !0), (i = e)
                  } finally {
                    try {
                      r || null == o.return || o.return()
                    } finally {
                      if (a) throw i
                    }
                  }
                  return t
                }
              },
              {
                key: 'hasData',
                value: function() {
                  var e = !1
                  return (
                    (function t(n) {
                      var r = !0,
                        a = !1,
                        i = void 0
                      try {
                        for (
                          var s, o = n[Symbol.iterator]();
                          !(r = (s = o.next()).done);
                          r = !0
                        ) {
                          var c = s.value
                          c.constructor.data && (e = !0),
                            c.children && t(c.children)
                        }
                      } catch (e) {
                        ;(a = !0), (i = e)
                      } finally {
                        try {
                          r || null == o.return || o.return()
                        } finally {
                          if (a) throw i
                        }
                      }
                    })([this]),
                    e
                  )
                }
              },
              {
                key: 'validateTree',
                value: function() {
                  var e = []
                  return (
                    (function t(n) {
                      var r = !0,
                        a = !1,
                        i = void 0
                      try {
                        for (
                          var s, o = n[Symbol.iterator]();
                          !(r = (s = o.next()).done);
                          r = !0
                        ) {
                          var c = s.value,
                            u = c.validate()
                          e.push.apply(e, Object(w.a)(u)),
                            c.children && t(c.children)
                        }
                      } catch (e) {
                        ;(a = !0), (i = e)
                      } finally {
                        try {
                          r || null == o.return || o.return()
                        } finally {
                          if (a) throw i
                        }
                      }
                    })([this]),
                    e
                  )
                }
              },
              {
                key: 'validate',
                value: function() {
                  var e = []
                  return (
                    (this.children && 0 !== this.children.length) ||
                      e.append('mml tag is empty'),
                    e
                  )
                }
              },
              {
                key: 'initialState',
                value: function() {
                  var e = {}
                  return (
                    this.name && (e.mml_name = this.name),
                    (function t(n) {
                      var a = !0,
                        i = !1,
                        s = void 0
                      try {
                        for (
                          var o, c = n[Symbol.iterator]();
                          !(a = (o = c.next()).done);
                          a = !0
                        ) {
                          var u = o.value
                          ;(e = Object(r.a)({}, e, {}, u.initialState())),
                            u.children && t(u.children)
                        }
                      } catch (e) {
                        ;(i = !0), (s = e)
                      } finally {
                        try {
                          a || null == c.return || c.return()
                        } finally {
                          if (i) throw s
                        }
                      }
                    })(this.children),
                    e
                  )
                }
              }
            ]),
            e
          )
        })()
      function P(e) {
        return (function(e) {
          var t,
            n = T
          return (
            (function e(r) {
              var a = [],
                i = !0,
                s = !1,
                o = void 0
              try {
                for (
                  var c, u = r[Symbol.iterator]();
                  !(i = (c = u.next()).done);
                  i = !0
                ) {
                  var l = c.value,
                    p = void 0
                  l.children && (p = e(l.children))
                  var d = l.name
                  if ('mml' !== l.name) {
                    if ('document' === l.type) return p
                    if ('text' === l.type) {
                      if (!(l.text.trim().length > 0)) continue
                      d = 'text'
                    }
                    var m = n[d]
                    if (m) {
                      var j = new m(d, l, p)
                      a.push(j)
                    } else
                      console.log('unrecognized element', d, Object.keys(n))
                  } else t = new I(l, p)
                }
              } catch (r) {
                ;(s = !0), (o = r)
              } finally {
                try {
                  i || null == u.return || u.return()
                } finally {
                  if (s) throw o
                }
              }
              return a
            })(e),
            t
          )
        })(
          (function(e) {
            return (
              ~e.indexOf('<mml') || (e = '<mml>'.concat(e, '</mml>')),
              (e = e.replace(/&(?!amp;|lt;|gt;)/g, '&amp;')),
              [u()(e)]
            )
          })(e)
        )
      }
      var k = n(73),
        R = n(74),
        q = n(88),
        N = n(22)
      function G() {
        var e = Object(s.useState)({}),
          t = Object(i.a)(e, 2)
        return [t[0], t[1]]
      }
      function D(e) {
        var t = e.source,
          n = (e.submit, e.converterConfig),
          c =
            (void 0 ===
              (void 0 === (void 0 === e.Loader && k.Loader, e.Error) && R.Error,
              e.Success) && q.Success,
            Object(a.a)(e, [
              'source',
              'submit',
              'converterConfig',
              'Loader',
              'Error',
              'Success'
            ]),
            G()),
          u = Object(i.a)(c, 2),
          l = u[0],
          p = u[1],
          d = Object(s.useState)(null),
          m = Object(i.a)(d, 2),
          j = m[0],
          h = m[1],
          _ = Object(s.useMemo)(
            function() {
              var e,
                a = P(t)
              n && (a.converterConfig = n)
              try {
                var i = a.initialState()
                e = Object(r.a)({}, i, {
                  error: '',
                  loading: !1,
                  success: '',
                  mml_error: ''
                })
              } catch (t) {
                e = {
                  mml_error:
                    "This chat message has invalid formatting and can't be shown",
                  loading: !1,
                  success: ''
                }
              }
              return [a, e]
            },
            [t, n]
          ),
          f = Object(i.a)(_, 2),
          S = f[0],
          y = f[1]
        return (
          t !== j && (p(Object(r.a)({}, l, {}, y)), h(t)),
          o.a.createElement(
            N.MMLContainer,
            { hasData: S.hasData(), error: l.mml_error },
            S.toReact(S)
          )
        )
      }
      n.d(t, 'useMML', function() {
        return G
      }),
        n.d(t, 'MML', function() {
          return D
        })
    },
    121: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AddToCalendar', function() {
          return c
        })
      var r = n(6),
        a = n(0),
        i = n.n(a),
        s = n(274),
        o = n.n(s)
      function c(e) {
        var t = e.title,
          n = e.start,
          a = e.end,
          s = e.location,
          c = void 0 === s ? '' : s,
          u = e.description,
          l = void 0 === u ? '' : u,
          p =
            (Object(r.a)(e, [
              'title',
              'start',
              'end',
              'location',
              'description'
            ]),
            { startTime: n, endTime: a, title: t, location: c, description: l })
        return i.a.createElement(o.a, {
          event: p,
          listItems: [
            { google: 'Google' },
            { apple: 'Apple Calendar' },
            { outlook: 'Outlook' },
            { outlookcom: 'Outlook.com' }
          ]
        })
      }
    },
    122: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ButtonList', function() {
          return s
        })
      var r = n(6),
        a = n(0),
        i = n.n(a)
      function s(e) {
        var t = e.children
        return (
          Object(r.a)(e, ['children']),
          i.a.createElement('div', { className: 'mml-selectlist' }, t)
        )
      }
      n(60)
    },
    123: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Carousel', function() {
          return c
        })
      var r = n(6),
        a = n(0),
        i = n.n(a),
        s = n(275),
        o = n.n(s)
      function c(e) {
        var t = e.children
        return (
          Object(r.a)(e, ['children']),
          i.a.createElement(
            'div',
            { className: 'mml-carousel' },
            i.a.createElement(
              o.a,
              {
                dots: !0,
                infinite: !1,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3
              },
              t
            )
          )
        )
      }
      n(86)
    },
    124: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Column', function() {
          return s
        })
      var r = n(6),
        a = n(0),
        i = n.n(a)
      function s(e) {
        var t = e.children,
          n = e.width,
          a = void 0 === n ? 12 : n,
          s = e.offset,
          o = void 0 === s ? 0 : s,
          c = e.align,
          u = void 0 === c ? 'left' : c,
          l =
            (Object(r.a)(e, ['children', 'width', 'offset', 'align']),
            'mml-col-'.concat(a))
        return (
          o && (l += ' mml-offset-'.concat(o)),
          (l += ' mml-align-'.concat(u)),
          i.a.createElement('div', { className: l }, t)
        )
      }
    },
    125: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Input', function() {
          return o
        })
      var r = n(6),
        a = n(0),
        i = n.n(a),
        s = n(39)
      function o(e) {
        var t = e.name,
          n = (Object(r.a)(e, ['name']), Object(a.useContext)(s.MMLContext)),
          o = n[t]
        return i.a.createElement('input', {
          value: o,
          onChange: function(e) {
            return n.setValue(t, e.target.value)
          }
        })
      }
    },
    126: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Text', function() {
          return s
        })
      var r = n(6),
        a = n(0),
        i = n.n(a)
      function s(e) {
        var t = e.text
        return (
          Object(r.a)(e, ['text']),
          i.a.createElement('p', { className: 'mml-text' }, t)
        )
      }
    },
    127: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MD', function() {
          return l
        })
      var r = n(6),
        a = n(0),
        i = n.n(a),
        s = n(279),
        o = n.n(s),
        c = n(280),
        u = n.n(c)
      function l(e) {
        var t,
          n,
          a,
          s = e.text,
          c = (Object(r.a)(e, ['text']), u()(s, { list: !0 })),
          l = !0,
          p = !1,
          d = void 0
        try {
          for (
            var m, j = c[Symbol.iterator]();
            !(l = (m = j.next()).done);
            l = !0
          ) {
            var h = m.value,
              _ =
                ((t = h.encoded.replace(/^(www\.)/, '')),
                null == (n = 20) && (n = 100),
                null == (a = '...') && (a = '...'),
                t.length > n ? t.substring(0, n - a.length) + a : t),
              f = '['
                .concat(_, '](')
                .concat(h.protocol)
                .concat(h.encoded, ')')
            s = s.replace(h.raw, f)
          }
        } catch (e) {
          ;(p = !0), (d = e)
        } finally {
          try {
            l || null == j.return || j.return()
          } finally {
            if (p) throw d
          }
        }
        var S = s,
          y = []
        if (y && y.length)
          for (var g = 0; g < y.length; g++) {
            var x = y[g].name || y[g].id,
              b = '**@'.concat(x, '**'),
              v = new RegExp('@'.concat(x), 'g')
            S = S.replace(v, b)
          }
        return i.a.createElement(o.a, {
          allowedTypes: [
            'html',
            'root',
            'text',
            'break',
            'heading',
            'paragraph',
            'emphasis',
            'strong',
            'link',
            'list',
            'listItem',
            'code',
            'inlineCode',
            'blockquote'
          ],
          source: s,
          linkTarget: '_blank',
          plugins: [],
          escapeHtml: !0,
          skipHtml: !1
        })
      }
    },
    128: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Icon', function() {
          return s
        })
      var r = n(6),
        a = n(0),
        i = n.n(a)
      function s(e) {
        var t = e.name
        return (
          Object(r.a)(e, ['name']),
          i.a.createElement('i', { className: 'material-icons' }, t)
        )
      }
    },
    129: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Number', function() {
          return o
        })
      var r = n(6),
        a = n(0),
        i = n.n(a),
        s = n(39)
      function o(e) {
        var t = e.name,
          n = (Object(r.a)(e, ['name']), Object(a.useContext)(s.MMLContext)),
          o = n[t]
        return i.a.createElement(
          'div',
          { className: 'mml-number' },
          i.a.createElement(
            'span',
            {
              onClick: function() {
                n.changeValue(t, -1)
              }
            },
            '-'
          ),
          o,
          i.a.createElement(
            'span',
            {
              onClick: function() {
                n.changeValue(t, 1)
              }
            },
            '+'
          )
        )
      }
    },
    183: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'converterConfig', function() {
          return y
        })
      var r = n(0),
        a = n.n(r),
        i = n(125),
        s = n(60),
        o = n(122),
        c = n(121),
        u = n(184),
        l = n(126),
        p = n(127),
        d = n(192),
        m = n(124),
        j = n(87),
        h = n(128),
        _ = n(123),
        f = n(86),
        S = n(129),
        y = {
          button: function(e) {
            return a.a.createElement(
              s.Button,
              Object.assign({ text: e.getText() }, e.node.attributes)
            )
          },
          buttonlist: function(e, t) {
            return a.a.createElement(o.ButtonList, e.node.attributes, t)
          },
          input: function(e) {
            return a.a.createElement(i.Input, e.node.attributes)
          },
          add_to_calendar: function(e) {
            return a.a.createElement(c.AddToCalendar, e.node.attributes)
          },
          column: function(e, t) {
            return a.a.createElement(m.Column, e.node.attributes, t)
          },
          row: function(e, t) {
            return a.a.createElement(d.Row, e.node.attributes, t)
          },
          icon: function(e) {
            return a.a.createElement(h.Icon, e.node.attributes)
          },
          image: function(e) {
            return a.a.createElement(j.Image, e.node.attributes)
          },
          md: function(e) {
            return a.a.createElement(
              p.MD,
              Object.assign({ text: e.getText() }, e.node.attributes)
            )
          },
          text: function(e) {
            return a.a.createElement(
              l.Text,
              Object.assign({ text: e.getText() }, e.node.attributes)
            )
          },
          scheduler: function(e) {
            return a.a.createElement(u.Scheduler, {
              interval: (void 0).attr.interval,
              duration: (void 0).attr.duration,
              full_day: (void 0).attr.full_day,
              ical_availability: (void 0).attr.ical_availability
            })
          },
          carousel: function(e, t) {
            return a.a.createElement(_.Carousel, null, t)
          },
          item: function(e, t) {
            return a.a.createElement(f.CarouselItem, null, t)
          },
          number: function(e) {
            return a.a.createElement(S.Number, e.node.attributes)
          }
        }
    },
    184: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Scheduler', function() {
          return _
        })
      var r = n(64),
        a = n.n(r),
        i = n(10),
        s = n(52),
        o = n(15),
        c = n(14),
        u = n(16),
        l = n(0),
        p = n.n(l),
        d = n(277),
        m = n.n(d),
        j = n(276),
        h = n.n(j),
        _ = (function(e) {
          function t(e) {
            var n
            return (
              Object(i.a)(this, t),
              ((n = Object(o.a)(
                this,
                Object(c.a)(t).call(this, e)
              )).setupIcalFilter = function(e, t) {
                var r, i, s, o, c
                return a.a.async(function(u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        if (
                          ((c = function(e) {
                            if (r) {
                              var n = new Date(e.getTime() + 6e4 * t),
                                a = r.between(e, n)
                              return (
                                console.log('events', e, a),
                                !(a && a.length >= 1)
                              )
                            }
                            return !0
                          }),
                          (r = null),
                          e)
                        ) {
                          u.next = 6
                          break
                        }
                        n.setState({ loading: !1 }), (u.next = 15)
                        break
                      case 6:
                        return (
                          n.setState({ loading: !0 }),
                          (u.next = 9),
                          a.a.awrap(
                            fetch(e, { method: 'GET', redirect: 'follow' })
                          )
                        )
                      case 9:
                        return (i = u.sent), (u.next = 12), a.a.awrap(i.text())
                      case 12:
                        ;(s = u.sent),
                          i.ok
                            ? ((o = { ics: s, maxIterations: 10 }),
                              (r = new h.a(o)),
                              console.log('all events', r.all()))
                            : n.setState({
                                error: 'failed to load availability'
                              }),
                          n.setState({ loading: !1 })
                      case 15:
                        n.icalFilter = c
                      case 16:
                      case 'end':
                        return u.stop()
                    }
                })
              }),
              (n.state = { loading: !0, error: '' }),
              n
            )
          }
          return (
            Object(u.a)(t, e),
            Object(s.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props.duration
                    ? 1 * parseInt(this.props.duration, 10)
                    : 30
                  this.setupIcalFilter(this.props.ical_availability, e)
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = !!this.props.full_day,
                    t = this.props.interval ? 1 * this.props.interval : 30,
                    n = e ? 'h:mm aa' : 'MMMM d, yyyy h:mm aa'
                  return this.state.error
                    ? p.a.createElement(
                        'div',
                        { className: 'mml-scheduler' },
                        'Failed to load availability, error: ',
                        this.state.error
                      )
                    : p.a.createElement(
                        'div',
                        { className: 'mml-scheduler' },
                        this.state.loading
                          ? p.a.createElement(
                              'div',
                              null,
                              'Loading availability'
                            )
                          : p.a.createElement(m.a, {
                              selected: this.props.selected,
                              timeIntervals: t,
                              showTimeSelect: !e,
                              dateFormat: n,
                              filterDate: this.icalFilter,
                              timeCaption: 'Time',
                              onChange: this.props.onChange
                            })
                      )
                }
              }
            ]),
            t
          )
        })(p.a.Component)
    },
    192: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Row', function() {
          return s
        })
      var r = n(6),
        a = n(0),
        i = n.n(a)
      function s(e) {
        var t = e.children
        return (
          Object(r.a)(e, ['children']),
          i.a.createElement('div', { className: 'mml-row' }, t)
        )
      }
      n(124)
    },
    22: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'useMML', function() {
          return _
        }),
        n.d(t, 'MMLContainer', function() {
          return f
        })
      var r = n(93),
        a = n(64),
        i = n.n(a),
        s = n(35),
        o = n(140),
        c = n(6),
        u = n(56),
        l = n(0),
        p = n.n(l),
        d = n(73),
        m = n(74),
        j = n(88),
        h = n(39)
      function _() {
        var e = Object(l.useState)({}),
          t = Object(u.a)(e, 2)
        return [t[0], t[1]]
      }
      function f(e) {
        e.source, e.converterConfig
        var t = e.children,
          n = e.hasData,
          a = void 0 !== n && n,
          l = e.error,
          f = void 0 === l ? null : l,
          S = e.Loader,
          y = void 0 === S ? d.Loader : S,
          g = e.Error,
          x = void 0 === g ? m.Error : g,
          b = e.Success,
          v = void 0 === b ? j.Success : b,
          C = Object(c.a)(e, [
            'source',
            'converterConfig',
            'children',
            'hasData',
            'error',
            'Loader',
            'Error',
            'Success'
          ]),
          M = _(),
          E = Object(u.a)(M, 2),
          O = E[0],
          L = E[1]
        if (f)
          return p.a.createElement('div', { className: 'mml-container' }, f)
        var B = Object(s.a)({}, O, {
          changeValue: function(e, t) {
            var n = O[e] || 0,
              a = (n *= 1) + t
            L(Object(s.a)({}, O, Object(r.a)({}, e, a)))
          },
          setValue: function(e, t) {
            L(Object(s.a)({}, O, Object(r.a)({}, e, t)))
          }
        })
        return a
          ? p.a.createElement(
              h.MMLContext.Provider,
              { value: B },
              p.a.createElement(
                'div',
                { className: 'mml-container' },
                p.a.createElement(
                  'form',
                  {
                    onSubmit: function(e) {
                      var t, n
                      return i.a.async(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  e.preventDefault(),
                                  console.log('submit', O),
                                  (t = []),
                                  (n = Object.keys(O).map(function(e, t) {
                                    return { name: e, value: O[e] }
                                  })),
                                  t.push.apply(t, Object(o.a)(n)),
                                  L(
                                    Object(s.a)({}, O, {
                                      loading: !0,
                                      error: '',
                                      success: ''
                                    })
                                  ),
                                  (r.prev = 6),
                                  (r.next = 9),
                                  i.a.awrap(C.onAction(t))
                                )
                              case 9:
                                L(
                                  Object(s.a)({}, O, {
                                    loading: !1,
                                    error: '',
                                    success: 'submitted'
                                  })
                                ),
                                  (r.next = 15)
                                break
                              case 12:
                                ;(r.prev = 12),
                                  (r.t0 = r.catch(6)),
                                  L(
                                    Object(s.a)({}, O, {
                                      loading: !1,
                                      error: 'something is broken'
                                    })
                                  )
                              case 15:
                              case 'end':
                                return r.stop()
                            }
                        },
                        null,
                        null,
                        [[6, 12]]
                      )
                    }
                  },
                  t,
                  p.a.createElement(y, { loading: O.loading }),
                  p.a.createElement(v, { success: O.success }),
                  p.a.createElement(x, { error: O.error })
                )
              )
            )
          : p.a.createElement(
              h.MMLContext.Provider,
              { value: B },
              p.a.createElement('div', { className: 'mml-container' }, t)
            )
      }
    },
    282: function(e, t, n) {
      n(283), (e.exports = n(1038))
    },
    283: function(e, t, n) {},
    39: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MMLContext', function() {
          return a
        })
      var r = n(0),
        a = n.n(r).a.createContext({})
    },
    435: function(e, t, n) {
      var r = {
        './Binary_Property/ASCII.js': 436,
        './Binary_Property/ASCII_Hex_Digit.js': 437,
        './Binary_Property/Alphabetic.js': 438,
        './Binary_Property/Any.js': 439,
        './Binary_Property/Assigned.js': 440,
        './Binary_Property/Bidi_Control.js': 441,
        './Binary_Property/Bidi_Mirrored.js': 442,
        './Binary_Property/Case_Ignorable.js': 443,
        './Binary_Property/Cased.js': 444,
        './Binary_Property/Changes_When_Casefolded.js': 445,
        './Binary_Property/Changes_When_Casemapped.js': 446,
        './Binary_Property/Changes_When_Lowercased.js': 447,
        './Binary_Property/Changes_When_NFKC_Casefolded.js': 448,
        './Binary_Property/Changes_When_Titlecased.js': 449,
        './Binary_Property/Changes_When_Uppercased.js': 450,
        './Binary_Property/Dash.js': 451,
        './Binary_Property/Default_Ignorable_Code_Point.js': 452,
        './Binary_Property/Deprecated.js': 453,
        './Binary_Property/Diacritic.js': 454,
        './Binary_Property/Emoji.js': 455,
        './Binary_Property/Emoji_Component.js': 456,
        './Binary_Property/Emoji_Modifier.js': 457,
        './Binary_Property/Emoji_Modifier_Base.js': 458,
        './Binary_Property/Emoji_Presentation.js': 459,
        './Binary_Property/Extended_Pictographic.js': 460,
        './Binary_Property/Extender.js': 461,
        './Binary_Property/Grapheme_Base.js': 462,
        './Binary_Property/Grapheme_Extend.js': 463,
        './Binary_Property/Hex_Digit.js': 464,
        './Binary_Property/IDS_Binary_Operator.js': 465,
        './Binary_Property/IDS_Trinary_Operator.js': 466,
        './Binary_Property/ID_Continue.js': 467,
        './Binary_Property/ID_Start.js': 468,
        './Binary_Property/Ideographic.js': 469,
        './Binary_Property/Join_Control.js': 470,
        './Binary_Property/Logical_Order_Exception.js': 471,
        './Binary_Property/Lowercase.js': 472,
        './Binary_Property/Math.js': 473,
        './Binary_Property/Noncharacter_Code_Point.js': 474,
        './Binary_Property/Pattern_Syntax.js': 475,
        './Binary_Property/Pattern_White_Space.js': 476,
        './Binary_Property/Quotation_Mark.js': 477,
        './Binary_Property/Radical.js': 478,
        './Binary_Property/Regional_Indicator.js': 479,
        './Binary_Property/Sentence_Terminal.js': 480,
        './Binary_Property/Soft_Dotted.js': 481,
        './Binary_Property/Terminal_Punctuation.js': 482,
        './Binary_Property/Unified_Ideograph.js': 483,
        './Binary_Property/Uppercase.js': 484,
        './Binary_Property/Variation_Selector.js': 485,
        './Binary_Property/White_Space.js': 486,
        './Binary_Property/XID_Continue.js': 487,
        './Binary_Property/XID_Start.js': 488,
        './General_Category/Cased_Letter.js': 489,
        './General_Category/Close_Punctuation.js': 490,
        './General_Category/Connector_Punctuation.js': 491,
        './General_Category/Control.js': 492,
        './General_Category/Currency_Symbol.js': 493,
        './General_Category/Dash_Punctuation.js': 494,
        './General_Category/Decimal_Number.js': 495,
        './General_Category/Enclosing_Mark.js': 496,
        './General_Category/Final_Punctuation.js': 497,
        './General_Category/Format.js': 498,
        './General_Category/Initial_Punctuation.js': 499,
        './General_Category/Letter.js': 500,
        './General_Category/Letter_Number.js': 501,
        './General_Category/Line_Separator.js': 502,
        './General_Category/Lowercase_Letter.js': 503,
        './General_Category/Mark.js': 504,
        './General_Category/Math_Symbol.js': 505,
        './General_Category/Modifier_Letter.js': 506,
        './General_Category/Modifier_Symbol.js': 507,
        './General_Category/Nonspacing_Mark.js': 508,
        './General_Category/Number.js': 509,
        './General_Category/Open_Punctuation.js': 510,
        './General_Category/Other.js': 511,
        './General_Category/Other_Letter.js': 512,
        './General_Category/Other_Number.js': 513,
        './General_Category/Other_Punctuation.js': 514,
        './General_Category/Other_Symbol.js': 515,
        './General_Category/Paragraph_Separator.js': 516,
        './General_Category/Private_Use.js': 517,
        './General_Category/Punctuation.js': 518,
        './General_Category/Separator.js': 519,
        './General_Category/Space_Separator.js': 520,
        './General_Category/Spacing_Mark.js': 521,
        './General_Category/Surrogate.js': 522,
        './General_Category/Symbol.js': 523,
        './General_Category/Titlecase_Letter.js': 524,
        './General_Category/Unassigned.js': 525,
        './General_Category/Uppercase_Letter.js': 526,
        './Script/Adlam.js': 527,
        './Script/Ahom.js': 528,
        './Script/Anatolian_Hieroglyphs.js': 529,
        './Script/Arabic.js': 530,
        './Script/Armenian.js': 531,
        './Script/Avestan.js': 532,
        './Script/Balinese.js': 533,
        './Script/Bamum.js': 534,
        './Script/Bassa_Vah.js': 535,
        './Script/Batak.js': 536,
        './Script/Bengali.js': 537,
        './Script/Bhaiksuki.js': 538,
        './Script/Bopomofo.js': 539,
        './Script/Brahmi.js': 540,
        './Script/Braille.js': 541,
        './Script/Buginese.js': 542,
        './Script/Buhid.js': 543,
        './Script/Canadian_Aboriginal.js': 544,
        './Script/Carian.js': 545,
        './Script/Caucasian_Albanian.js': 546,
        './Script/Chakma.js': 547,
        './Script/Cham.js': 548,
        './Script/Cherokee.js': 549,
        './Script/Common.js': 550,
        './Script/Coptic.js': 551,
        './Script/Cuneiform.js': 552,
        './Script/Cypriot.js': 553,
        './Script/Cyrillic.js': 554,
        './Script/Deseret.js': 555,
        './Script/Devanagari.js': 556,
        './Script/Dogra.js': 557,
        './Script/Duployan.js': 558,
        './Script/Egyptian_Hieroglyphs.js': 559,
        './Script/Elbasan.js': 560,
        './Script/Elymaic.js': 561,
        './Script/Ethiopic.js': 562,
        './Script/Georgian.js': 563,
        './Script/Glagolitic.js': 564,
        './Script/Gothic.js': 565,
        './Script/Grantha.js': 566,
        './Script/Greek.js': 567,
        './Script/Gujarati.js': 568,
        './Script/Gunjala_Gondi.js': 569,
        './Script/Gurmukhi.js': 570,
        './Script/Han.js': 571,
        './Script/Hangul.js': 572,
        './Script/Hanifi_Rohingya.js': 573,
        './Script/Hanunoo.js': 574,
        './Script/Hatran.js': 575,
        './Script/Hebrew.js': 576,
        './Script/Hiragana.js': 577,
        './Script/Imperial_Aramaic.js': 578,
        './Script/Inherited.js': 579,
        './Script/Inscriptional_Pahlavi.js': 580,
        './Script/Inscriptional_Parthian.js': 581,
        './Script/Javanese.js': 582,
        './Script/Kaithi.js': 583,
        './Script/Kannada.js': 584,
        './Script/Katakana.js': 585,
        './Script/Kayah_Li.js': 586,
        './Script/Kharoshthi.js': 587,
        './Script/Khmer.js': 588,
        './Script/Khojki.js': 589,
        './Script/Khudawadi.js': 590,
        './Script/Lao.js': 591,
        './Script/Latin.js': 592,
        './Script/Lepcha.js': 593,
        './Script/Limbu.js': 594,
        './Script/Linear_A.js': 595,
        './Script/Linear_B.js': 596,
        './Script/Lisu.js': 597,
        './Script/Lycian.js': 598,
        './Script/Lydian.js': 599,
        './Script/Mahajani.js': 600,
        './Script/Makasar.js': 601,
        './Script/Malayalam.js': 602,
        './Script/Mandaic.js': 603,
        './Script/Manichaean.js': 604,
        './Script/Marchen.js': 605,
        './Script/Masaram_Gondi.js': 606,
        './Script/Medefaidrin.js': 607,
        './Script/Meetei_Mayek.js': 608,
        './Script/Mende_Kikakui.js': 609,
        './Script/Meroitic_Cursive.js': 610,
        './Script/Meroitic_Hieroglyphs.js': 611,
        './Script/Miao.js': 612,
        './Script/Modi.js': 613,
        './Script/Mongolian.js': 614,
        './Script/Mro.js': 615,
        './Script/Multani.js': 616,
        './Script/Myanmar.js': 617,
        './Script/Nabataean.js': 618,
        './Script/Nandinagari.js': 619,
        './Script/New_Tai_Lue.js': 620,
        './Script/Newa.js': 621,
        './Script/Nko.js': 622,
        './Script/Nushu.js': 623,
        './Script/Nyiakeng_Puachue_Hmong.js': 624,
        './Script/Ogham.js': 625,
        './Script/Ol_Chiki.js': 626,
        './Script/Old_Hungarian.js': 627,
        './Script/Old_Italic.js': 628,
        './Script/Old_North_Arabian.js': 629,
        './Script/Old_Permic.js': 630,
        './Script/Old_Persian.js': 631,
        './Script/Old_Sogdian.js': 632,
        './Script/Old_South_Arabian.js': 633,
        './Script/Old_Turkic.js': 634,
        './Script/Oriya.js': 635,
        './Script/Osage.js': 636,
        './Script/Osmanya.js': 637,
        './Script/Pahawh_Hmong.js': 638,
        './Script/Palmyrene.js': 639,
        './Script/Pau_Cin_Hau.js': 640,
        './Script/Phags_Pa.js': 641,
        './Script/Phoenician.js': 642,
        './Script/Psalter_Pahlavi.js': 643,
        './Script/Rejang.js': 644,
        './Script/Runic.js': 645,
        './Script/Samaritan.js': 646,
        './Script/Saurashtra.js': 647,
        './Script/Sharada.js': 648,
        './Script/Shavian.js': 649,
        './Script/Siddham.js': 650,
        './Script/SignWriting.js': 651,
        './Script/Sinhala.js': 652,
        './Script/Sogdian.js': 653,
        './Script/Sora_Sompeng.js': 654,
        './Script/Soyombo.js': 655,
        './Script/Sundanese.js': 656,
        './Script/Syloti_Nagri.js': 657,
        './Script/Syriac.js': 658,
        './Script/Tagalog.js': 659,
        './Script/Tagbanwa.js': 660,
        './Script/Tai_Le.js': 661,
        './Script/Tai_Tham.js': 662,
        './Script/Tai_Viet.js': 663,
        './Script/Takri.js': 664,
        './Script/Tamil.js': 665,
        './Script/Tangut.js': 666,
        './Script/Telugu.js': 667,
        './Script/Thaana.js': 668,
        './Script/Thai.js': 669,
        './Script/Tibetan.js': 670,
        './Script/Tifinagh.js': 671,
        './Script/Tirhuta.js': 672,
        './Script/Ugaritic.js': 673,
        './Script/Vai.js': 674,
        './Script/Wancho.js': 675,
        './Script/Warang_Citi.js': 676,
        './Script/Yi.js': 677,
        './Script/Zanabazar_Square.js': 678,
        './Script_Extensions/Adlam.js': 679,
        './Script_Extensions/Ahom.js': 680,
        './Script_Extensions/Anatolian_Hieroglyphs.js': 681,
        './Script_Extensions/Arabic.js': 682,
        './Script_Extensions/Armenian.js': 683,
        './Script_Extensions/Avestan.js': 684,
        './Script_Extensions/Balinese.js': 685,
        './Script_Extensions/Bamum.js': 686,
        './Script_Extensions/Bassa_Vah.js': 687,
        './Script_Extensions/Batak.js': 688,
        './Script_Extensions/Bengali.js': 689,
        './Script_Extensions/Bhaiksuki.js': 690,
        './Script_Extensions/Bopomofo.js': 691,
        './Script_Extensions/Brahmi.js': 692,
        './Script_Extensions/Braille.js': 693,
        './Script_Extensions/Buginese.js': 694,
        './Script_Extensions/Buhid.js': 695,
        './Script_Extensions/Canadian_Aboriginal.js': 696,
        './Script_Extensions/Carian.js': 697,
        './Script_Extensions/Caucasian_Albanian.js': 698,
        './Script_Extensions/Chakma.js': 699,
        './Script_Extensions/Cham.js': 700,
        './Script_Extensions/Cherokee.js': 701,
        './Script_Extensions/Common.js': 702,
        './Script_Extensions/Coptic.js': 703,
        './Script_Extensions/Cuneiform.js': 704,
        './Script_Extensions/Cypriot.js': 705,
        './Script_Extensions/Cyrillic.js': 706,
        './Script_Extensions/Deseret.js': 707,
        './Script_Extensions/Devanagari.js': 708,
        './Script_Extensions/Dogra.js': 709,
        './Script_Extensions/Duployan.js': 710,
        './Script_Extensions/Egyptian_Hieroglyphs.js': 711,
        './Script_Extensions/Elbasan.js': 712,
        './Script_Extensions/Elymaic.js': 713,
        './Script_Extensions/Ethiopic.js': 714,
        './Script_Extensions/Georgian.js': 715,
        './Script_Extensions/Glagolitic.js': 716,
        './Script_Extensions/Gothic.js': 717,
        './Script_Extensions/Grantha.js': 718,
        './Script_Extensions/Greek.js': 719,
        './Script_Extensions/Gujarati.js': 720,
        './Script_Extensions/Gunjala_Gondi.js': 721,
        './Script_Extensions/Gurmukhi.js': 722,
        './Script_Extensions/Han.js': 723,
        './Script_Extensions/Hangul.js': 724,
        './Script_Extensions/Hanifi_Rohingya.js': 725,
        './Script_Extensions/Hanunoo.js': 726,
        './Script_Extensions/Hatran.js': 727,
        './Script_Extensions/Hebrew.js': 728,
        './Script_Extensions/Hiragana.js': 729,
        './Script_Extensions/Imperial_Aramaic.js': 730,
        './Script_Extensions/Inherited.js': 731,
        './Script_Extensions/Inscriptional_Pahlavi.js': 732,
        './Script_Extensions/Inscriptional_Parthian.js': 733,
        './Script_Extensions/Javanese.js': 734,
        './Script_Extensions/Kaithi.js': 735,
        './Script_Extensions/Kannada.js': 736,
        './Script_Extensions/Katakana.js': 737,
        './Script_Extensions/Kayah_Li.js': 738,
        './Script_Extensions/Kharoshthi.js': 739,
        './Script_Extensions/Khmer.js': 740,
        './Script_Extensions/Khojki.js': 741,
        './Script_Extensions/Khudawadi.js': 742,
        './Script_Extensions/Lao.js': 743,
        './Script_Extensions/Latin.js': 744,
        './Script_Extensions/Lepcha.js': 745,
        './Script_Extensions/Limbu.js': 746,
        './Script_Extensions/Linear_A.js': 747,
        './Script_Extensions/Linear_B.js': 748,
        './Script_Extensions/Lisu.js': 749,
        './Script_Extensions/Lycian.js': 750,
        './Script_Extensions/Lydian.js': 751,
        './Script_Extensions/Mahajani.js': 752,
        './Script_Extensions/Makasar.js': 753,
        './Script_Extensions/Malayalam.js': 754,
        './Script_Extensions/Mandaic.js': 755,
        './Script_Extensions/Manichaean.js': 756,
        './Script_Extensions/Marchen.js': 757,
        './Script_Extensions/Masaram_Gondi.js': 758,
        './Script_Extensions/Medefaidrin.js': 759,
        './Script_Extensions/Meetei_Mayek.js': 760,
        './Script_Extensions/Mende_Kikakui.js': 761,
        './Script_Extensions/Meroitic_Cursive.js': 762,
        './Script_Extensions/Meroitic_Hieroglyphs.js': 763,
        './Script_Extensions/Miao.js': 764,
        './Script_Extensions/Modi.js': 765,
        './Script_Extensions/Mongolian.js': 766,
        './Script_Extensions/Mro.js': 767,
        './Script_Extensions/Multani.js': 768,
        './Script_Extensions/Myanmar.js': 769,
        './Script_Extensions/Nabataean.js': 770,
        './Script_Extensions/Nandinagari.js': 771,
        './Script_Extensions/New_Tai_Lue.js': 772,
        './Script_Extensions/Newa.js': 773,
        './Script_Extensions/Nko.js': 774,
        './Script_Extensions/Nushu.js': 775,
        './Script_Extensions/Nyiakeng_Puachue_Hmong.js': 776,
        './Script_Extensions/Ogham.js': 777,
        './Script_Extensions/Ol_Chiki.js': 778,
        './Script_Extensions/Old_Hungarian.js': 779,
        './Script_Extensions/Old_Italic.js': 780,
        './Script_Extensions/Old_North_Arabian.js': 781,
        './Script_Extensions/Old_Permic.js': 782,
        './Script_Extensions/Old_Persian.js': 783,
        './Script_Extensions/Old_Sogdian.js': 784,
        './Script_Extensions/Old_South_Arabian.js': 785,
        './Script_Extensions/Old_Turkic.js': 786,
        './Script_Extensions/Oriya.js': 787,
        './Script_Extensions/Osage.js': 788,
        './Script_Extensions/Osmanya.js': 789,
        './Script_Extensions/Pahawh_Hmong.js': 790,
        './Script_Extensions/Palmyrene.js': 791,
        './Script_Extensions/Pau_Cin_Hau.js': 792,
        './Script_Extensions/Phags_Pa.js': 793,
        './Script_Extensions/Phoenician.js': 794,
        './Script_Extensions/Psalter_Pahlavi.js': 795,
        './Script_Extensions/Rejang.js': 796,
        './Script_Extensions/Runic.js': 797,
        './Script_Extensions/Samaritan.js': 798,
        './Script_Extensions/Saurashtra.js': 799,
        './Script_Extensions/Sharada.js': 800,
        './Script_Extensions/Shavian.js': 801,
        './Script_Extensions/Siddham.js': 802,
        './Script_Extensions/SignWriting.js': 803,
        './Script_Extensions/Sinhala.js': 804,
        './Script_Extensions/Sogdian.js': 805,
        './Script_Extensions/Sora_Sompeng.js': 806,
        './Script_Extensions/Soyombo.js': 807,
        './Script_Extensions/Sundanese.js': 808,
        './Script_Extensions/Syloti_Nagri.js': 809,
        './Script_Extensions/Syriac.js': 810,
        './Script_Extensions/Tagalog.js': 811,
        './Script_Extensions/Tagbanwa.js': 812,
        './Script_Extensions/Tai_Le.js': 813,
        './Script_Extensions/Tai_Tham.js': 814,
        './Script_Extensions/Tai_Viet.js': 815,
        './Script_Extensions/Takri.js': 816,
        './Script_Extensions/Tamil.js': 817,
        './Script_Extensions/Tangut.js': 818,
        './Script_Extensions/Telugu.js': 819,
        './Script_Extensions/Thaana.js': 820,
        './Script_Extensions/Thai.js': 821,
        './Script_Extensions/Tibetan.js': 822,
        './Script_Extensions/Tifinagh.js': 823,
        './Script_Extensions/Tirhuta.js': 824,
        './Script_Extensions/Ugaritic.js': 825,
        './Script_Extensions/Vai.js': 826,
        './Script_Extensions/Wancho.js': 827,
        './Script_Extensions/Warang_Citi.js': 828,
        './Script_Extensions/Yi.js': 829,
        './Script_Extensions/Zanabazar_Square.js': 830,
        './index.js': 831,
        './unicode-version.js': 832
      }
      function a(e) {
        var t = i(e)
        return n(t)
      }
      function i(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return r[e]
      }
      ;(a.keys = function() {
        return Object.keys(r)
      }),
        (a.resolve = i),
        (e.exports = a),
        (a.id = 435)
    },
    60: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Button', function() {
          return o
        })
      var r = n(6),
        a = n(0),
        i = n.n(a),
        s = n(39)
      function o(e) {
        var t = e.text,
          n = e.name,
          o = e.value,
          c =
            (Object(r.a)(e, ['text', 'name', 'value']),
            Object(a.useContext)(s.MMLContext))
        return i.a.createElement(
          'button',
          {
            className: 'mml-btn',
            type: 'submit',
            onClick: function() {
              return c.setValue(n, o)
            }
          },
          t
        )
      }
    },
    73: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Loader', function() {
          return s
        })
      var r = n(6),
        a = n(0),
        i = n.n(a)
      function s(e) {
        var t = e.loading,
          n = void 0 !== t && t
        return (
          Object(r.a)(e, ['loading']),
          n ? i.a.createElement('div', null, '...') : null
        )
      }
    },
    74: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Error', function() {
          return s
        })
      var r = n(6),
        a = n(0),
        i = n.n(a)
      function s(e) {
        var t = e.error,
          n = void 0 === t ? '' : t
        return (
          Object(r.a)(e, ['error']),
          n ? i.a.createElement('span', { className: 'mml-error' }, n) : null
        )
      }
    },
    857: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'AddToCalendar',
        description:
          'AddToCalendar widget that supports google, apple and outlook calendars\n',
        methods: [],
        props: [
          {
            type: { name: 'instanceOf', value: 'Date' },
            required: !0,
            description: 'The end time for the calendar entry',
            tags: {},
            name: 'end'
          },
          {
            type: { name: 'instanceOf', value: 'Date' },
            required: !0,
            description: 'The start time for the calendar entry',
            tags: {},
            name: 'start'
          },
          {
            type: { name: 'string' },
            required: !0,
            description: 'The title for the calendar entry',
            tags: {},
            name: 'title'
          },
          {
            type: { name: 'string' },
            required: !1,
            description: 'The optional description for the calendar entry',
            defaultValue: { value: "''", computed: !1 },
            tags: {},
            name: 'description'
          },
          {
            type: { name: 'string' },
            required: !1,
            description: 'The optional location for the calendar entry',
            defaultValue: { value: "''", computed: !1 },
            tags: {},
            name: 'location'
          }
        ],
        tags: {},
        examples: n(858)
      }
    },
    858: function(e, t, n) {
      var r = {
          './MMLContainer': n(22),
          react: n(0),
          './AddToCalendar.js': n(121)
        },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst AddToCalendar$0 = require('./AddToCalendar.js');\nconst AddToCalendar = AddToCalendar$0['AddToCalendar'] || (AddToCalendar$0.default || AddToCalendar$0);",
          a
        )
      e.exports = [
        {
          type: 'markdown',
          content:
            'AddToCalendar widget that supports google, apple and outlook calendars'
        },
        {
          type: 'code',
          content:
            "const MMLContainer = require('./MMLContainer').MMLContainer\nconst start = new Date(2020, 1, 1, 10, 0, 0, 0)\nconst end = new Date(2020, 1, 1, 11, 0, 0, 0)\nconst location = 'Boulder, CO'\nconst description = 'Please arrive 15 minutes early'\n\n;<MMLContainer>\n  <AddToCalendar\n    title=\"Massage with Jessica\"\n    start={start}\n    end={end}\n    location={location}\n    description={description}\n  />\n</MMLContainer>",
          settings: {},
          evalInContext: i
        }
      ]
    },
    86: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CarouselItem', function() {
          return s
        })
      var r = n(6),
        a = n(0),
        i = n.n(a)
      function s(e) {
        var t = e.children
        return (
          Object(r.a)(e, ['children']),
          i.a.createElement('div', { className: 'mml-carousel-item' }, t)
        )
      }
    },
    860: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Button',
        description: 'A simple Button\n',
        methods: [],
        props: [
          {
            type: { name: 'string' },
            required: !0,
            description: 'The name of the button',
            tags: {},
            name: 'name'
          },
          {
            type: { name: 'string' },
            required: !0,
            description: 'The text to display in the button',
            tags: {},
            name: 'text'
          },
          {
            type: { name: 'string' },
            required: !0,
            description: 'The value of the button',
            tags: {},
            name: 'value'
          }
        ],
        tags: {},
        examples: n(861)
      }
    },
    861: function(e, t, n) {
      var r = { './MMLContainer': n(22), react: n(0), './Button.js': n(60) },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Button$0 = require('./Button.js');\nconst Button = Button$0['Button'] || (Button$0.default || Button$0);",
          a
        )
      e.exports = [
        { type: 'markdown', content: 'Buttons are easy to use' },
        {
          type: 'code',
          content:
            'const MMLContainer = require(\'./MMLContainer\').MMLContainer\n\n;<MMLContainer>\n  <Button text="Green" name="color" value="green" />\n</MMLContainer>',
          settings: {},
          evalInContext: i
        }
      ]
    },
    862: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'ButtonList',
        description: 'A list of buttons\n',
        methods: [],
        props: [
          {
            type: {
              name: 'union',
              value: [
                { name: 'arrayOf', value: { name: 'custom', raw: 'Button' } },
                { name: 'objectOf', value: { name: 'custom', raw: 'Button' } }
              ]
            },
            required: !1,
            description: 'A list of buttons',
            tags: {},
            name: 'children'
          }
        ],
        tags: {},
        examples: n(863)
      }
    },
    863: function(e, t, n) {
      var r = {
          './MMLContainer': n(22),
          './Button': n(60),
          react: n(0),
          './ButtonList.js': n(122)
        },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst ButtonList$0 = require('./ButtonList.js');\nconst ButtonList = ButtonList$0['ButtonList'] || (ButtonList$0.default || ButtonList$0);",
          a
        )
      e.exports = [
        { type: 'markdown', content: 'Button Lists' },
        {
          type: 'code',
          content:
            'const MMLContainer = require(\'./MMLContainer\').MMLContainer\nconst Button = require(\'./Button\').Button\n\n;<MMLContainer>\n  <ButtonList>\n    <Button text="Green" name="color" value="green" />\n    <Button text="Red" name="color" value="red" />\n  </ButtonList>\n</MMLContainer>',
          settings: {},
          evalInContext: i
        }
      ]
    },
    87: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Image', function() {
          return s
        })
      var r = n(6),
        a = n(0),
        i = n.n(a)
      function s(e) {
        var t = e.src
        return (
          Object(r.a)(e, ['src']),
          i.a.createElement('img', { className: 'mml-image', src: t })
        )
      }
    },
    879: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Carousel',
        description:
          'A carousel is a nice mobile friendly way of letting a user select\nsomething\n',
        methods: [],
        props: [
          {
            type: {
              name: 'union',
              value: [
                {
                  name: 'arrayOf',
                  value: { name: 'custom', raw: 'CarouselItem' }
                },
                {
                  name: 'objectOf',
                  value: { name: 'custom', raw: 'CarouselItem' }
                }
              ]
            },
            required: !1,
            description: 'A list of carousel items',
            tags: {},
            name: 'children'
          }
        ],
        tags: {},
        examples: n(880)
      }
    },
    88: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Success', function() {
          return s
        })
      var r = n(6),
        a = n(0),
        i = n.n(a)
      function s(e) {
        var t = e.success,
          n = void 0 === t ? '' : t
        return (
          Object(r.a)(e, ['success']),
          n ? i.a.createElement('div', { className: 'mml-success' }, n) : null
        )
      }
    },
    880: function(e, t, n) {
      var r = {
          './MMLContainer': n(22),
          './CarouselItem': n(86),
          './Button': n(60),
          './Image': n(87),
          react: n(0),
          './Carousel.js': n(123)
        },
        a = n(28).default.bind(null, r),
        i = n(29).default.bind(
          null,
          "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Carousel$0 = require('./Carousel.js');\nconst Carousel = Carousel$0['Carousel'] || (Carousel$0.default || Carousel$0);",
          a
        )
      e.exports = [
        { type: 'markdown', content: 'Button Lists' },
        {
          type: 'code',
          content:
            'const MMLContainer = require(\'./MMLContainer\').MMLContainer\nconst CarouselItem = require(\'./CarouselItem\').CarouselItem\nconst Button = require(\'./Button\').Button\nconst Image = require(\'./Image\').Image\n\n;<MMLContainer>\n  <Carousel>\n    <CarouselItem>\n      <Image src="https://images.unsplash.com/photo-1535868463750-c78d9543614f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80" />\n      <Button text="Red" name="color" value="red" />\n    </CarouselItem>\n    <CarouselItem>\n      <Image src="https://images.unsplash.com/photo-1507576566681-1932a6a38099?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80" />\n      <Button text="Green" name="color" value="green" />\n    </CarouselItem>\n  </Carousel>\n</MMLContainer>',
          settings: {},
          evalInContext: i
        }
      ]
    },
    881: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'CarouselItem',
        description:
          'The only children of the Carousel are the carousel item.\nA carousel item can contain any type of nodes, such as buttons, images etc.\n',
        methods: [],
        props: [
          {
            type: { name: 'node' },
            required: !1,
            description: 'The children of this carousel item',
            tags: {},
            name: 'children'
          }
        ],
        tags: {},
        examples: null
      }
    },
    882: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Column',
        description: 'A table Column\nTODO: Consider renaming this element\n',
        methods: [],
        props: [
          {
            type: {
              name: 'enum',
              value: [
                { value: "'left'", computed: !1 },
                { value: "'center'", computed: !1 },
                { value: "'right'", computed: !1 }
              ]
            },
            required: !1,
            description: 'Align either left or right',
            defaultValue: { value: "'left'", computed: !1 },
            tags: {},
            name: 'align'
          },
          {
            type: { name: 'node' },
            required: !1,
            description: 'The column children can be anything',
            tags: {},
            name: 'children'
          },
          {
            type: { name: 'number' },
            required: !1,
            description: 'The offset for the column',
            defaultValue: { value: '0', computed: !1 },
            tags: {},
            name: 'offset'
          },
          {
            type: { name: 'number' },
            required: !1,
            description: 'The width of the column',
            defaultValue: { value: '12', computed: !1 },
            tags: {},
            name: 'width'
          }
        ],
        tags: {},
        examples: null
      }
    },
    883: function(e, t, n) {
      e.exports = {
        doclets: {},
        displayName: 'Context',
        methods: [],
        props: [],
        examples: n(884)
      }
    },
    884: function(e, t, n) {
      var r = { react: n(0), './context.js': n(39) },
        a = n(28).default.bind(null, r)
      n(29).default.bind(
        null,
        "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Context$0 = require('./context.js');\nconst Context = Context$0['Context'] || (Context$0.default || Context$0);",
        a
      ),
        (e.exports = [
          {
            type: 'markdown',
            content:
              'The context exposes the following variables:\n\n-   setValue(name, value)\n-   changeValue(name, delta)\n-   the state for the forms available as context[name]'
          }
        ])
    }
  },
  [[282, 1, 2]]
])
