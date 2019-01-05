(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    140: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        i = n.n(a),
        M = n(164),
        o = n.n(M),
        r = n(143),
        c = n(142),
        u = "320px",
        g = "768px",
        s = "1024px",
        N = "2560px",
        l = {
          mobileS: "(max-width: " + u + ")",
          mobileM: "(max-width: " + "375px" + ")",
          mobileL: "(max-width: " + "425px" + ")",
          mobile: "(min-width: " + u + ") and (max-width: " + g + ")",
          tablet: "(max-width: " + g + ")",
          laptop: "(max-width: " + s + ")",
          laptopL: "(max-width: " + "1440px" + ")",
          desktop: "(min-width: " + s + ") and (max-width: " + N + ")",
          desktopL: "(max-width: " + N + ")"
        },
        D = r.a.div.withConfig({
          displayName: "Layout__Container",
          componentId: "sc-1rr8mdx-0"
        })(
          [
            "display:flex;justify-content:center;padding:",
            ";@media ",
            "{flex-direction:column;}"
          ],
          Object(c.a)(0.75),
          l.mobile
        ),
        d = function(e) {
          var t = e.children;
          return i.a.createElement(D, null, t);
        },
        y = n(7),
        j = n.n(y),
        w = n(172),
        L = (n(149),
        r.a.div.withConfig({
          displayName: "Card__Container",
          componentId: "qnuhtc-0"
        })(
          [
            "display:flex;flex-direction:column;background:rgba(255,255,255,1);box-shadow:rgba(0,0,0,0.08) 0px 4px 8px;z-index:2;border-radius:",
            ";overflow:hidden;margin:5px 0;padding:",
            ";@media not screen and ",
            "{&:first-child{margin-top:0;}margin:5px;}"
          ],
          Object(c.a)(0.5),
          Object(c.a)(0.5),
          l.mobile
        )),
        I = r.a.div.withConfig({
          displayName: "Card__Header",
          componentId: "qnuhtc-1"
        })([
          "color:#d32f2f;text-align:center;align-self:flex-start;font-size:12px;font-weight:600;border-bottom:1px solid #ef9a9a;background-color:#ffebee;padding:5px 10px;"
        ]),
        x = (r.a.div.withConfig({
          displayName: "Card__Title",
          componentId: "qnuhtc-2"
        })([
          "display:flex;flex-direction:column;justify-content:center;align-items:center;padding:15px 0;"
        ]),
        r.a.div.withConfig({
          displayName: "Card__Description",
          componentId: "qnuhtc-3"
        })(["color:#d32f2f;font-size:12px;text-align:center;"])),
        T = function(e) {
          var t = e.title,
            n = (e.link, e.tags, e.body);
          return i.a.createElement(
            L,
            null,
            i.a.createElement(I, null, t),
            i.a.createElement(x, null, i.a.createElement("blockquote", null, n))
          );
        },
        z = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            j()(t, e),
            (t.prototype.render = function() {
              return i.a.createElement(T, this.props);
            }),
            t
          );
        })(a.Component),
        m = function(e) {
          var t = e.data;
          console.log(t);
          var n = t.allMarkdownRemark.edges;
          return i.a.createElement(
            p,
            null,
            i.a.createElement(
              E,
              null,
              i.a.createElement(C, null, "Projects"),
              i.a.createElement(
                f,
                null,
                "A set of Cool Projects which I spawn when bored"
              )
            ),
            i.a.createElement(
              A,
              null,
              n.map(function(e, t) {
                var n = e.node,
                  a = n.excerpt,
                  M = n.frontmatter,
                  o = M.link,
                  r = M.title,
                  c = M.tags;
                return i.a.createElement(z, {
                  key: t,
                  title: r,
                  link: o,
                  tags: c,
                  body: a
                });
              })
            )
          );
        },
        p = r.a.div.withConfig({
          displayName: "ProjectsView__ProjectsContainer",
          componentId: "sc-1wki2uf-0"
        })(["display:flex;flex-direction:column;"]),
        E = r.a.div.withConfig({
          displayName: "ProjectsView__HeaderSection",
          componentId: "sc-1wki2uf-1"
        })(["margin:", " 0;text-align:center;"], Object(c.a)(0.25)),
        C = r.a.h1.withConfig({
          displayName: "ProjectsView__Header",
          componentId: "sc-1wki2uf-2"
        })(["font-size:24px;cursor:pointer;margin:", " 0;"], Object(c.a)(0.25)),
        f = r.a.span.withConfig({
          displayName: "ProjectsView__SubHeader",
          componentId: "sc-1wki2uf-3"
        })(["font-size:18px;font-weight:400;color:rgb(92,97,102);"]),
        A = r.a.div.withConfig({
          displayName: "ProjectsView__ProjectsViewContainer",
          componentId: "sc-1wki2uf-4"
        })(
          [
            "@media not screen and ",
            "{overflow:scroll;height:95vh;flex-basis:50vw;}"
          ],
          l.mobile
        ),
        b = n(150),
        O = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            j()(t, e),
            (t.prototype.render = function() {
              return i.a.createElement(b.StaticQuery, {
                query: k,
                render: function(e) {
                  return i.a.createElement(m, { data: e });
                },
                data: w
              });
            }),
            t
          );
        })(a.Component),
        k = "1103862814",
        S = O,
        h = n(176),
        Q = n.n(h),
        U = (n(32), n(151)),
        v = n.n(U),
        Y = n(177),
        B = n.n(Y),
        G = n(178),
        P = n.n(G),
        Z = n(179),
        R = n.n(Z),
        H = n(180),
        V = n.n(H),
        W = r.a.div.withConfig({
          displayName: "LogosView__Mentions",
          componentId: "rrtzyg-0"
        })([
          "display:flex;height:48px;margin-bottom:1rem;flex-direction:row;justify-content:space-around;"
        ]),
        J = r.a.img.withConfig({
          displayName: "LogosView__MentionsLogo",
          componentId: "rrtzyg-1"
        })(
          ["width:", ";transform:", ";height:48px;margin-bottom:0;"],
          function(e) {
            return e.width || "48px";
          },
          function(e) {
            return e.transform || "";
          }
        ),
        F = r.a.a.withConfig({
          displayName: "LogosView__Link",
          componentId: "rrtzyg-2"
        })(["&:hover,&:active{box-shadow:0 0 0 0;}"]),
        q = function(e) {
          var t = e.href,
            n = e.title,
            a = e.imgsrc,
            M = v()(e, ["href", "title", "imgsrc"]);
          return i.a.createElement(
            F,
            { target: "_blank", href: t },
            a ? i.a.createElement(J, Object.assign({ src: a }, M), n) : n
          );
        },
        K = function() {
          var e = [
            {
              href: "https://www.quora.com/profile/Dixit-Patel-4",
              imgsrc: R.a,
              alt: "Quora",
              width: "75px",
              transform: "scale(0.85)"
            },
            {
              href: "http://strava.com/athletes/19109068/badge",
              imgsrc: B.a,
              alt: "Strava",
              transform: "scale(0.65)"
            },
            {
              href: "https://twitter.com/dixitk13",
              imgsrc: P.a,
              alt: "Twitter",
              transform: "scale(0.65)"
            },
            {
              href: "https://github.com/dixitk13",
              imgsrc: V.a,
              alt: "Github",
              width: "65px",
              transform: "scale(0.85)"
            }
          ];
          return i.a.createElement(
            W,
            null,
            e.map(function(e, t) {
              return i.a.createElement(
                q,
                Object.assign({ key: "mentions-" + t }, e)
              );
            })
          );
        },
        X = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            j()(t, e),
            (t.prototype.render = function() {
              return i.a.createElement(K, null);
            }),
            t
          );
        })(a.Component),
        _ = n(181),
        $ = n.n(_),
        ee = r.a.a.withConfig({
          displayName: "DownloadButtonsView__DownloadLink",
          componentId: "sc-18f51up-0"
        })(["text-align:center;&:hover{box-shadow:none;}"]),
        te = r.a.button.withConfig({
          displayName: "DownloadButtonsView__SimpleButton",
          componentId: "sc-18f51up-1"
        })(
          [
            "text-decoration:none;background:transparent;padding:0;border:none;width:90px;cursor:pointer;margin:",
            ";font-size:",
            ";text-align:center;background:rgb(236,237,238);border-radius:3px;outline:none;&:active{background:rgba(0,0,0,0.1);}"
          ],
          Object(c.a)(0.25),
          Object(c.a)(0.5)
        ),
        ne = Object(r.a)(te).withConfig({
          displayName: "DownloadButtonsView__DownloadButton",
          componentId: "sc-18f51up-2"
        })([
          "&:hover{background:rgb(226,227,228);transition-delay:0.2s;}&:before{opacity:0;position:absolute;content:attr(data-hover);transform:translate(-150%,0);transition:0.4s,opacity 0.6s;}&:hover:before{opacity:1;transform:translate(25%,0);transition-delay:0.2s;}span{width:100%;transition:0.6s;transition-delay:0.2s;display:inline-block;&:hover,&:focus{opacity:0;transform:scale(0.3);}}"
        ]),
        ae = r.a.div.withConfig({
          displayName: "DownloadButtonsView__Buttons",
          componentId: "sc-18f51up-3"
        })([
          "display:inline-flex;flex-direction:row;margin-bottom:1rem;justify-content:space-evenly;"
        ]),
        ie = function() {
          return i.a.createElement(
            ae,
            null,
            i.a.createElement(
              ee,
              { download: !0, target: "_blank", href: $.a },
              i.a.createElement(
                ne,
                {
                  type: "button",
                  "data-hover": "Download",
                  "data-active": "Starting..."
                },
                i.a.createElement("span", null, "Resume")
              )
            ),
            i.a.createElement(
              te,
              null,
              i.a.createElement("span", null, "no-op")
            )
          );
        },
        Me = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            j()(t, e),
            (t.prototype.render = function() {
              return i.a.createElement(ie, null);
            }),
            t
          );
        })(a.Component),
        oe = r.a.div.withConfig({
          displayName: "AboutMeView__AboutMeContainer",
          componentId: "sc-6yyncv-0"
        })(
          [
            "height:95vh;width:20vw;display:flex;flex-direction:column;padding:",
            ";border-radius:",
            ";background:rgba(255,255,255,1);box-shadow:rgba(0,0,0,0.08) 0px 4px 8px;z-index:2;margin-right:10px;@media ",
            "{height:unset;margin-right:unset;width:100%;}"
          ],
          Object(c.a)(0.5),
          Object(c.a)(0.5),
          l.mobile
        ),
        re = r.a.h1.withConfig({
          displayName: "AboutMeView__Name",
          componentId: "sc-6yyncv-1"
        })(
          [
            "color:rgba(0,0,0,0.75);font-size:",
            ";margin:0 0 ",
            " 0;cursor:pointer;&:hover{font-size:",
            ";color:rgba(0,0,0,0.66);}"
          ],
          Object(c.a)(1.5),
          Object(c.a)(0.5),
          Object(c.a)(1.51)
        ),
        ce = r.a.div.withConfig({
          displayName: "AboutMeView__Footer",
          componentId: "sc-6yyncv-2"
        })([
          "justify-self:flex-end;color:#666;margin-top:auto;a{transition:all 0.5s;&:hover{color:#555;z-index:1;}}"
        ]),
        ue = r.a.span.withConfig({
          displayName: "AboutMeView__Heart",
          componentId: "sc-6yyncv-3"
        })(['color:#d32f2f;&:after{content:"❤";}']),
        ge = r.a.blockquote.withConfig({
          displayName: "AboutMeView__Quote",
          componentId: "sc-6yyncv-4"
        })(["margin-left:unset;margin-bottom:1rem;"]),
        se = r.a.span.withConfig({
          displayName: "AboutMeView__ToggleHeartContainer",
          componentId: "sc-6yyncv-5"
        })([
          'position:relative;top:-25px;display:flex;left:40px;height:0;transform:rotate(45deg);margin-left:auto;@keyframes heart{0%,17.5%{font-size:0;}}[for="toggle-heart"]{color:#aab8c2;font-size:2em;cursor:pointer;visibility:hidden;}[id="toggle-heart"]{display:none;&:checked + label{color:#e2264d;visibility:unset;will-change:font-size;animation:heart 1s cubic-bezier(0.17,0.89,0.32,1.49);}&:unchecked + label{transition:1s ease-all;}}'
        ]),
        Ne = function(e) {
          var t = e.on,
            n = e.toggleOn;
          return i.a.createElement(
            oe,
            null,
            i.a.createElement(
              se,
              null,
              i.a.createElement("input", {
                id: "toggle-heart",
                checked: t,
                onChange: n,
                type: "checkbox"
              }),
              i.a.createElement("label", { htmlFor: "toggle-heart" }, "❤")
            ),
            i.a.createElement(re, { onClick: n }, "Dixit Keshavbhai Patel"),
            i.a.createElement("img", { src: Q.a, alt: "Dixit" }),
            i.a.createElement(ge, null, "just another software engineer"),
            i.a.createElement(X, null),
            i.a.createElement(Me, null),
            i.a.createElement(
              ce,
              null,
              "Made with ",
              i.a.createElement(ue, null),
              " using",
              " ",
              i.a.createElement(
                "a",
                { href: "https://www.gatsbyjs.org/" },
                "Gatsby"
              ),
              " and",
              " ",
              i.a.createElement(
                "a",
                { href: "https://www.styled-components.com/" },
                "Styled Components"
              )
            )
          );
        },
        le = (function(e) {
          function t() {
            for (
              var t, n = arguments.length, a = new Array(n), i = 0;
              i < n;
              i++
            )
              a[i] = arguments[i];
            return (
              ((t = e.call.apply(e, [this].concat(a)) || this).state = {
                on: !1
              }),
              (t.toggleOn = function() {
                t.setState(function(e) {
                  return { on: !e.on };
                }),
                  (t.toggleHeart = setTimeout(function() {
                    t.setState(function(e) {
                      return { on: !e.on };
                    });
                  }, 1e3));
              }),
              t
            );
          }
          j()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillUnmount = function() {
              clearTimeout(this.toggleHeart);
            }),
            (n.render = function() {
              return i.a.createElement(Ne, {
                on: this.state.on,
                toggleOn: this.toggleOn
              });
            }),
            t
          );
        })(a.Component),
        De = n(182),
        de = n.n(De);
      n.d(t, "query", function() {
        return ye;
      });
      t.default = function(e) {
        var t = e.data;
        return i.a.createElement(
          d,
          null,
          i.a.createElement(o.a, {
            title: t.site.siteMetadata.title,
            meta: [
              { name: "description", content: t.site.siteMetadata.title },
              {
                name: "keywords",
                content: "gatsbyjs, reactjs, graphql, dixitk13"
              }
            ],
            link: [{ rel: "shortcut icon", type: "image/png", href: "" + de.a }]
          }),
          i.a.createElement(le, null),
          i.a.createElement(S, null)
        );
      };
      var ye = "1097489062";
    },
    142: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      });
      var a = n(145),
        i = n.n(a),
        M = n(146),
        o = n.n(M),
        r = new i.a(o.a),
        c = r.rhythm;
    },
    150: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "graphql", function() {
          return D;
        }),
        n.d(t, "StaticQueryContext", function() {
          return N;
        }),
        n.d(t, "StaticQuery", function() {
          return l;
        });
      var a = n(0),
        i = n.n(a),
        M = n(4),
        o = n.n(M),
        r = n(144),
        c = n.n(r);
      n.d(t, "Link", function() {
        return c.a;
      }),
        n.d(t, "withPrefix", function() {
          return r.withPrefix;
        }),
        n.d(t, "navigate", function() {
          return r.navigate;
        }),
        n.d(t, "push", function() {
          return r.push;
        }),
        n.d(t, "replace", function() {
          return r.replace;
        }),
        n.d(t, "navigateTo", function() {
          return r.navigateTo;
        });
      var u = n(152),
        g = n.n(u);
      n.d(t, "PageRenderer", function() {
        return g.a;
      });
      var s = n(49);
      n.d(t, "parsePath", function() {
        return s.a;
      });
      var N = i.a.createContext({}),
        l = function(e) {
          return i.a.createElement(N.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : i.a.createElement("div", null, "Loading (StaticQuery)");
          });
        };
      function D() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        );
      }
      l.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func
      };
    },
    152: function(e, t, n) {
      var a;
      e.exports = ((a = n(175)) && a.default) || a;
    },
    172: function(e) {
      e.exports = {
        data: {
          allMarkdownRemark: {
            edges: [
              {
                node: {
                  id: "53eb623d-057b-568b-ad5f-c8bbb054a05a",
                  frontmatter: {
                    title: "Server Side Rendering",
                    date: "21 August, 2017",
                    link: "https://github.com/dixitk13/basic-react-server-side",
                    tags: ["react", "react-dom", "styled-components"]
                  },
                  excerpt:
                    "Trying a basic application with server side rendering for ReactJS.\nAgain using my favorite boilerplate, CRA."
                }
              },
              {
                node: {
                  id: "085698f8-a825-550c-a4be-04ba4e4302bd",
                  frontmatter: {
                    title: "Service Workers in PWA",
                    date: "21 August, 2017",
                    link: "https://github.com/dixitk13/toggle-me",
                    tags: ["react", "pwa"]
                  },
                  excerpt:
                    "Trying out custom service workers in a simple PWA(Progressive Web Application) because as Steve Jobs dreamed long ago, its the future!\nIts a…"
                }
              },
              {
                node: {
                  id: "4b074a44-e75e-5bb6-9920-63a89b1bab2f",
                  frontmatter: {
                    title: "Enron Social Graph",
                    date: "21 August, 2017",
                    link:
                      "https://github.com/dixitk13/readmes.md/blob/master/personal-projects.md",
                    tags: ["graph", "algorithms", "java", "visualizations"]
                  },
                  excerpt:
                    "Tried doing a few graph algorithms on a famous data set, Enron Data Set."
                }
              }
            ]
          }
        }
      };
    },
    175: function(e, t, n) {
      "use strict";
      n.r(t);
      n(32);
      var a = n(0),
        i = n.n(a),
        M = n(4),
        o = n.n(M),
        r = n(68),
        c = n(2),
        u = function(e) {
          var t = e.location,
            n = c.default.getResourcesForPathnameSync(t.pathname);
          return i.a.createElement(
            r.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          );
        };
      (u.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired
      }),
        (t.default = u);
    },
    176: function(e, t, n) {
      e.exports = n.p + "static/dixitk13-34e056d5a67771f90b62e1f1ded49baf.jpg";
    },
    177: function(e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    178: function(e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMS41MzcgNTExLjUzNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjUzNyA1MTEuNTM3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojNjVCQkYyOyIgZD0iTTM1Ny4wMzgsNDkuMTcyYy01OS4yODQsMC44OTgtMTA1Ljk5Myw1Mi4wOTgtMTA1Ljk5MywxMTEuMzgydjE0LjM3Mg0KCUMxNDUuMDUyLDE1Ni4wNjMsOTIuOTU0LDEyNy4zMTksMzUuNDY2LDY3LjEzN2MtMzQuMTMzLDY2LjQ3LDMuNTkzLDEyMi4xNjEsNDQuOTEyLDE1Mi43MDJjLTI3Ljg0NiwwLTUxLjItMy41OTMtNjkuMTY1LTE5Ljc2MQ0KCWMtMS43OTYtMC44OTgtMy41OTMsMC0yLjY5NSwxLjc5N2MxNS4yNyw1NS42OTEsNjcuMzY4LDk2LjExMiwxMDcuNzg5LDEwNy43ODljLTM2LjgyOCwwLTYxLjA4MSw1LjM4OS04Ny4xMy0xMC43NzkNCgljLTEuNzk2LTAuODk4LTMuNTkzLDAtMi42OTUsMS43OTZjMTkuNzYxLDU0Ljc5Myw1OS4yODQsNzEuODYsMTE2Ljc3Miw3MS44NmMtMjguNzQ0LDIxLjU1OC02Ny4zNjgsNDMuMTE2LTE0MC4xMjYsNDQuOTEyDQoJYy0yLjY5NSwwLTQuNDkxLDMuNTkzLTEuNzk2LDUuMzg5YzI2Ljk0NywyMi40NTYsOTMuNDE4LDM5LjUyMywxODYuODM1LDM5LjUyM2MxNTMuNiwwLDI3OC40NTYtMTM2LjUzMywyNzguNDU2LTMwNS40MDR2LTguOTgyDQoJYzI0LjI1My04Ljk4MiwzNy43MjYtMzAuNTQsNDQuOTEyLTUyLjA5OGMwLTAuODk4LTAuODk4LTEuNzk2LTEuNzk3LTEuNzk2bC01MS4yLDE3Ljk2NWMtMC44OTgsMC0xLjc5Ni0xLjc5Ni0wLjg5OC0yLjY5NQ0KCUM0NzkuMiw5Mi4yODgsNDk1LjM2OCw3MC43Myw1MDIuNTU0LDUwLjA3YzAsMC0wLjg5OC0wLjg5OC0xLjc5Ny0wLjg5OGMtMjQuMjUzLDkuODgxLTQ3LjYwNywxOS43NjEtNjUuNTcyLDI1LjE1MQ0KCWMtMi42OTUsMC44OTgtNi4yODgsMC44OTgtOC45ODItMC44OThDNDE0LjUyNiw2Ny4xMzcsMzc5LjQ5NCw0OS4xNzIsMzU3LjAzOCw0OS4xNzIiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
    },
    179: function(e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMXB4IiBoZWlnaHQ9IjU2cHgiIHZpZXdCb3g9IjAgMCAyMDEgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjIuMiAoOTk4MykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+SW1wb3J0ZWQgTGF5ZXJzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9IkltcG9ydGVkLUxheWVycyIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI2I5MmIyNyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC45ODYsNDMuNjIzIEMyNy4wNjgsMzkuODQ4IDI0LjgxOCwzNi4wMzUgMjAuNDI5LDM2LjAzNSBDMTkuNTksMzYuMDM1IDE4Ljc1MiwzNi4xNzQgMTcuOTgzLDM2LjUyNSBMMTYuNDkyLDMzLjU0MSBDMTguMzA5LDMxLjk4MiAyMS4yNDUsMzAuNzQ2IDI1LjAxOSwzMC43NDYgQzMwLjg5LDMwLjc0NiAzMy45MDMsMzMuNTc0IDM2LjI5NSwzNy4xODQgQzM3LjcxNSwzNC4xMDIgMzguMzksMjkuOTQgMzguMzksMjQuNzgxIEMzOC4zOSwxMS44OTggMzQuMzYxLDUuMjgzIDI0Ljk1LDUuMjgzIEMxNS42NzYsNS4yODMgMTEuNjY5LDExLjg5OCAxMS42NjksMjQuNzgxIEMxMS42NjksMzcuNTk2IDE1LjY3Niw0NC4xNDMgMjQuOTUsNDQuMTQzIEMyNi40MjQsNDQuMTQzIDI3Ljc1OSw0My45ODEgMjguOTg2LDQzLjYyMyBMMjguOTg2LDQzLjYyMyBaIE0zMS4yODUsNDguMTE5IEMyOS4yNTIsNDguNjY0IDI3LjA5Miw0OC45NjUgMjQuOTUsNDguOTY1IEMxMi42MDEsNDguOTY1IDAuNTEsMzkuMTExIDAuNTEsMjQuNzgxIEMwLjUxLDEwLjMxNSAxMi42MDEsMC40NTkgMjQuOTUsMC40NTkgQzM3LjUwNiwwLjQ1OSA0OS40ODEsMTAuMjQ0IDQ5LjQ4MSwyNC43ODEgQzQ5LjQ4MSwzMi44NjcgNDUuNzA4LDM5LjQzOCA0MC4yMjQsNDMuNjg1IEM0MS45OTYsNDYuMzQgNDMuODIsNDguMTAzIDQ2LjM2LDQ4LjEwMyBDNDkuMTMyLDQ4LjEwMyA1MC4yNSw0NS45NjEgNTAuNDM3LDQ0LjI4MSBMNTQuMDQ3LDQ0LjI4MSBDNTQuMjU4LDQ2LjUxOCA1My4xMzksNTUuODE1IDQzLjA1LDU1LjgxNSBDMzYuOTM5LDU1LjgxNSAzMy43MDgsNTIuMjczIDMxLjI4NSw0OC4xMTkgTDMxLjI4NSw0OC4xMTkgWiIgaWQ9IkZpbGwtMSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTcuNDIsMzUuODI2IEw1Ny40MiwxOS4yNiBDNTcuNDIsMTcuMzczIDU2LjcyMywxNi41MzUgNTQuNTU2LDE2LjUzNSBMNTIuMjQ5LDE2LjUzNSBMNTIuMjQ5LDEyLjEzMyBMNjcuMzIyLDEyLjEzMyBMNjcuMzIyLDM1LjYxNyBDNjcuMzIyLDM5LjU3NiA2OS40NjUsNDEuMzIyIDcyLjcyOCw0MS4zMjIgQzc1LjQwNiw0MS4zMjIgNzguMDg1LDQwLjEzNyA3OS41MywzNy40MzIgTDc5LjUzLDE5LjI2IEM3OS41MywxNy4zNzMgNzguODMxLDE2LjUzNSA3Ni42NjUsMTYuNTM1IEw3NC4yMTksMTYuNTM1IEw3NC4yMTksMTIuMTMzIEw4OS40MzMsMTIuMTMzIEw4OS40MzMsMzYuNzMyIEM4OS40MzMsMzkuMTgyIDkwLjM0MSw0MC4yOTkgOTMuMTM2LDQwLjI5OSBMOTMuNjI2LDQwLjI5OSBMOTMuNjI2LDQ0Ljg0MiBMODAuMDIsNDcuMDA4IEw4MC4wMiw0Mi4zMjYgTDc5Ljc0LDQyLjMyNiBDNzcuMTA4LDQ1LjUzOSA3My40MDQsNDcuNzA3IDY4LjExNSw0Ny43MDcgQzYyLjE3NCw0Ny43MDcgNTcuNDIsNDQuNzAzIDU3LjQyLDM1LjgyNiIgaWQ9IkZpbGwtMiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEzLjQxNSw0My4zMDUgQzExOC43NzQsNDMuMzA1IDEyMC44MSwzOC42NDMgMTIwLjkxNywyOS4yNTYgQzEyMS4wMjEsMjAuMDc0IDExOC43NzQsMTUuNjI5IDExMy40MTUsMTUuNjI5IEMxMDguNzMzLDE1LjYyOSAxMDUuNzk3LDIwLjA3NiAxMDUuNzk3LDI5LjI1NiBDMTA1Ljc5NywzOC42NDUgMTA4LjY4NSw0My4zMDUgMTEzLjQxNSw0My4zMDUgTDExMy40MTUsNDMuMzA1IFogTTExMy40MTUsNDcuNzA3IEMxMDMuNzI0LDQ3LjcwNyA5NC45ODUsNDAuMjk3IDk0Ljk4NSwyOS4yNTYgQzk0Ljk4NSwxOC40MjIgMTAzLjUxMywxMS4yMjMgMTEzLjQxNSwxMS4yMjMgQzEyMy43MzYsMTEuMjIzIDEzMi4wMDcsMTguNTYgMTMyLjAwNywyOS4yNTYgQzEzMi4wMDcsNDAuMjk3IDEyMy43MzYsNDcuNzA3IDExMy40MTUsNDcuNzA3IEwxMTMuNDE1LDQ3LjcwNyBaIiBpZD0iRmlsbC0zIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzIuMzE5LDQ3LjAwOCBMMTMyLjMxOSw0Mi42MDUgTDEzMy43ODcsNDIuNjA1IEMxMzcuNDIyLDQyLjYwNSAxMzcuNzcxLDQxLjU1NyAxMzcuNzcxLDM4LjQxMiBMMTM3Ljc3MSwxOS4yNiBDMTM3Ljc3MSwxNy4zNzMgMTM2Ljc5MywxNi41MzUgMTM0LjU1NywxNi41MzUgTDEzMi42LDE2LjUzNSBMMTMyLjYsMTIuMTMzIEwxNDYuNDE0LDEyLjEzMyBMMTQ3LjExMywxOS4zMzIgTDE0Ny4zOTQsMTkuMzMyIEMxNDguOTMyLDE0LjE1OCAxNTMuMDU1LDExLjQzMiAxNTYuOTIxLDExLjQzMiBDMTYwLjExMywxMS40MzIgMTYyLjYwNSwxMy4yNSAxNjIuNjA1LDE2LjkzMiBDMTYyLjYwNSwxOS40OTQgMTYxLjM3MywyMi4yMjEgMTU3LjkyNCwyMi4yMjEgQzE1NC44MjQsMjIuMjIxIDE1NC4yMiwyMC4xMjMgMTUxLjY1NiwyMC4xMjMgQzE0OS4zNzQsMjAuMTIzIDE0Ny42MDIsMjIuMjkxIDE0Ny42MDIsMjUuNDgxIEwxNDcuNjAyLDM4LjQxMiBDMTQ3LjYwMiw0MS41NTcgMTQ4LjM3Miw0Mi42MDUgMTUxLjkzNyw0Mi42MDUgTDE1My45NjMsNDIuNjA1IEwxNTMuOTYzLDQ3LjAwOCBMMTMyLjMxOSw0Ny4wMDgiIGlkPSJGaWxsLTQiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE3OC4zMDcsNDEuODgzIEMxODIuNzExLDQxLjg4MyAxODQuNTI3LDM3LjcxMyAxODQuNTI3LDMzLjUyMiBMMTg0LjUyNywyNy45MjggQzE4MS4zMTMsMzEuMjU4IDE3My44MzMsMzEuMzc1IDE3My44MzMsMzcuMzE2IEMxNzMuODMzLDQwLjIyOCAxNzUuNTU5LDQxLjg4MyAxNzguMzA3LDQxLjg4MyBMMTc4LjMwNyw0MS44ODMgWiBNMTg0LjczOCw0MS44NTkgQzE4Mi45Miw0NS4zNTMgMTc5LjE5MSw0Ny43MDcgMTczLjk3NCw0Ny43MDcgQzE2Ny45MTcsNDcuNzA3IDE2NC4wMDMsNDQuNDkgMTY0LjAwMywzOC44MyBDMTY0LjAwMywyNy40NCAxNzkuODY4LDMwLjQ2NyAxODQuNTI3LDIyLjkyIEwxODQuNTI3LDIyLjEwMyBDMTg0LjUyNywxNi4zMDMgMTgyLjI0NCwxNS4zOTUgMTc5LjcyOCwxNS4zOTUgQzE3Mi42NjksMTUuMzk1IDE3NS44ODMsMjIuOTg2IDE2OS4zODMsMjIuOTg2IEMxNjYuMjYyLDIyLjk4NiAxNjUuMDUsMjEuMTAyIDE2NS4wNSwxOC45ODIgQzE2NS4wNSwxNC42OTUgMTcwLjE3NiwxMS4yMjMgMTc5Ljc5OSwxMS4yMjMgQzE4OC45MDYsMTEuMjIzIDE5NC40OTksMTMuNzQgMTk0LjQ5OSwyMi44MDMgTDE5NC40OTksMzcuMjcgQzE5NC40OTksMzkuNTA2IDE5NS4zMTUsNDAuNzE5IDE5Ny4yNzIsNDAuNzE5IEMxOTguMTEsNDAuNzE5IDE5OC44MDksNDAuNDg2IDE5OS4zNDQsNDAuMTEzIEwyMDAuNTEsNDIuOTUzIEMxOTkuNTU0LDQ0LjQyMiAxOTcuMDE0LDQ3LjAwOCAxOTIuMTkxLDQ3LjAwOCBDMTg3Ljk5OSw0Ny4wMDggMTg1LjM2Niw0NS4wNTEgMTg1LjAxNiw0MS44NTkgTDE4NC43MzgsNDEuODU5IEwxODQuNzM4LDQxLjg1OSBaIiBpZD0iRmlsbC01IiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
    },
    180: function(e, t, n) {
      e.exports = n.p + "static/github-5d292e21532ea5857531cdb8b0180637.jpg";
    },
    181: function(e, t, n) {
      e.exports =
        n.p +
        "static/Dixit_Keshavbhai_Patel_2018-00d9413ffe456c72bb50ede90dc578e4.pdf";
    },
    182: function(e, t, n) {
      e.exports = n.p + "static/favicon-db9e577a600d00ca64d458ed3fd1fff2.ico";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-079ebebd6fa40fdd03da.js.map
