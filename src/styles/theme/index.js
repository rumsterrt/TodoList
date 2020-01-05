import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export { theme }

const GlobalStyle = createGlobalStyle`
  @charset "UTF-8";
:root {
    --blue: #063280;
    --indigo: #6610f2;
    --purple: #8a46d0;
    --pink: #d0469f;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #063280;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: 'Open Sans', sans-serif;
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}
*,
::after,
::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
}
@-ms-viewport {
    width: device-width;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
    display: block;
}
body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #fff !important;
    text-align: left;
    background: ${theme.fg.default};
}
[tabindex='-1']:focus {
    outline: 0 !important;
}
hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
abbr[data-original-title],
abbr[title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
}
address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
}
dl,
ol,
ul {
    margin-top: 0;
    margin-bottom: 1rem;
}
ol ol,
ol ul,
ul ol,
ul ul {
    margin-bottom: 0;
}
dt {
    font-weight: 700;
}
dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
}
blockquote {
    margin: 0 0 1rem;
}
dfn {
    font-style: italic;
}
b,
strong {
    font-weight: bolder;
}
small {
    font-size: 80%;
}
sub,
sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}
sub {
    bottom: -0.25em;
}
sup {
    top: -0.5em;
}
a {
    color: #063280;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
a:hover {
    color: #031537;
    text-decoration: underline;
}
a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
}
a:not([href]):not([tabindex]):focus,
a:not([href]):not([tabindex]):hover {
    color: inherit;
    text-decoration: none;
}
a:not([href]):not([tabindex]):focus {
    outline: 0;
}
code,
kbd,
pre,
samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    font-size: 1em;
}
pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar;
}
figure {
    margin: 0 0 1rem;
}
img {
    vertical-align: middle;
    border-style: none;
}
svg:not(:root) {
    overflow: hidden;
}
table {
    border-collapse: collapse;
}
caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #6c757d;
    text-align: left;
    caption-side: bottom;
}
th {
    text-align: inherit;
}
label {
    display: inline-block;
    margin-bottom: 0.75rem;
}
button {
    border-radius: 0;
}
button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
}
button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button,
input {
    overflow: visible;
}
button,
select {
    text-transform: none;
}
[type='reset'],
[type='submit'],
button,
html [type='button'] {
    -webkit-appearance: button;
}
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner,
button::-moz-focus-inner {
    padding: 0;
    border-style: none;
}
input[type='checkbox'],
input[type='radio'] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}
input[type='date'],
input[type='datetime-local'],
input[type='month'],
input[type='time'] {
    -webkit-appearance: listbox;
}
textarea {
    overflow: auto;
    resize: vertical;
}
fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
}
legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
}
progress {
    vertical-align: baseline;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
    height: auto;
}
[type='search'] {
    outline-offset: -2px;
    -webkit-appearance: none;
}
[type='search']::-webkit-search-cancel-button,
[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
}
::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
}
output {
    display: inline-block;
}
summary {
    display: list-item;
    cursor: pointer;
}
template {
    display: none;
}
[hidden] {
    display: none !important;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
}
.h1,
h1 {
    font-size: 2.5rem;
}
.h2,
h2 {
    font-size: 2rem;
}
.h3,
h3 {
    font-size: 1.75rem;
}
.h4,
h4 {
    font-size: 1.5rem;
}
.h5,
h5 {
    font-size: 1.25rem;
}
.h6,
h6 {
    font-size: 1rem;
}
.lead {
    font-size: 1.25rem;
    font-weight: 300;
}
.display-1 {
    font-size: 6rem;
    font-weight: 300;
    line-height: 1.2;
}
.display-2 {
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 1.2;
}
.display-3 {
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 1.2;
}
.display-4 {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
}
hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.small,
small {
    font-size: 80%;
    font-weight: 400;
}
.mark,
mark {
    padding: 0.2em;
    background-color: #fcf8e3;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
.list-inline {
    padding-left: 0;
    list-style: none;
}
.list-inline-item {
    display: inline-block;
}
.list-inline-item:not(:last-child) {
    margin-right: 0.5rem;
}
.initialism {
    font-size: 90%;
    text-transform: uppercase;
}
.blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
}
.blockquote-footer {
    display: block;
    font-size: 80%;
    color: #6c757d;
}
.blockquote-footer::before {
    content: '\2014 \00A0';
}
.img-fluid {
    max-width: 100%;
    height: auto;
}
.img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    max-width: 100%;
    height: auto;
}
.figure {
    display: inline-block;
}
.figure-img {
    margin-bottom: 0.5rem;
    line-height: 1;
}
.figure-caption {
    font-size: 90%;
    color: #6c757d;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}
@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}
@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}
@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
}
.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;
}
.no-gutters > .col,
.no-gutters > [class*='col-'] {
    padding-right: 0;
    padding-left: 0;
}
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
}
.col-auto {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
}
.col-1 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 8.33333%;
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
}
.col-2 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 16.66667%;
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
}
.col-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}
.col-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
}
.col-5 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.66667%;
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
}
.col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}
.col-7 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 58.33333%;
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
}
.col-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.66667%;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
}
.col-9 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
}
.col-10 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
}
.col-11 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 91.66667%;
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
}
.col-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.order-first {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
}
.order-last {
    -webkit-box-ordinal-group: 14;
    -ms-flex-order: 13;
    order: 13;
}
.order-0 {
    -webkit-box-ordinal-group: 1;
    -ms-flex-order: 0;
    order: 0;
}
.order-1 {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
}
.order-2 {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
}
.order-3 {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
}
.order-4 {
    -webkit-box-ordinal-group: 5;
    -ms-flex-order: 4;
    order: 4;
}
.order-5 {
    -webkit-box-ordinal-group: 6;
    -ms-flex-order: 5;
    order: 5;
}
.order-6 {
    -webkit-box-ordinal-group: 7;
    -ms-flex-order: 6;
    order: 6;
}
.order-7 {
    -webkit-box-ordinal-group: 8;
    -ms-flex-order: 7;
    order: 7;
}
.order-8 {
    -webkit-box-ordinal-group: 9;
    -ms-flex-order: 8;
    order: 8;
}
.order-9 {
    -webkit-box-ordinal-group: 10;
    -ms-flex-order: 9;
    order: 9;
}
.order-10 {
    -webkit-box-ordinal-group: 11;
    -ms-flex-order: 10;
    order: 10;
}
.order-11 {
    -webkit-box-ordinal-group: 12;
    -ms-flex-order: 11;
    order: 11;
}
.order-12 {
    -webkit-box-ordinal-group: 13;
    -ms-flex-order: 12;
    order: 12;
}
.offset-1 {
    margin-left: 8.33333%;
}
.offset-2 {
    margin-left: 16.66667%;
}
.offset-3 {
    margin-left: 25%;
}
.offset-4 {
    margin-left: 33.33333%;
}
.offset-5 {
    margin-left: 41.66667%;
}
.offset-6 {
    margin-left: 50%;
}
.offset-7 {
    margin-left: 58.33333%;
}
.offset-8 {
    margin-left: 66.66667%;
}
.offset-9 {
    margin-left: 75%;
}
.offset-10 {
    margin-left: 83.33333%;
}
.offset-11 {
    margin-left: 91.66667%;
}
@media (min-width: 576px) {
    .col-sm {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-sm-auto {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .col-sm-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .col-sm-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%;
    }
    .col-sm-3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-sm-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .col-sm-5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%;
    }
    .col-sm-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-sm-7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .col-sm-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
    }
    .col-sm-9 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-sm-10 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .col-sm-11 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%;
    }
    .col-sm-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-sm-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
    }
    .order-sm-last {
        -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
        order: 13;
    }
    .order-sm-0 {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        order: 0;
    }
    .order-sm-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
    }
    .order-sm-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
    }
    .order-sm-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3;
    }
    .order-sm-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4;
    }
    .order-sm-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5;
    }
    .order-sm-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6;
    }
    .order-sm-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7;
    }
    .order-sm-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8;
    }
    .order-sm-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9;
    }
    .order-sm-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10;
    }
    .order-sm-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11;
    }
    .order-sm-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-sm-0 {
        margin-left: 0;
    }
    .offset-sm-1 {
        margin-left: 8.33333%;
    }
    .offset-sm-2 {
        margin-left: 16.66667%;
    }
    .offset-sm-3 {
        margin-left: 25%;
    }
    .offset-sm-4 {
        margin-left: 33.33333%;
    }
    .offset-sm-5 {
        margin-left: 41.66667%;
    }
    .offset-sm-6 {
        margin-left: 50%;
    }
    .offset-sm-7 {
        margin-left: 58.33333%;
    }
    .offset-sm-8 {
        margin-left: 66.66667%;
    }
    .offset-sm-9 {
        margin-left: 75%;
    }
    .offset-sm-10 {
        margin-left: 83.33333%;
    }
    .offset-sm-11 {
        margin-left: 91.66667%;
    }
}
@media (min-width: 768px) {
    .col-md {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-md-auto {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .col-md-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .col-md-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%;
    }
    .col-md-3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-md-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .col-md-5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%;
    }
    .col-md-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-md-7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .col-md-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
    }
    .col-md-9 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-md-10 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .col-md-11 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%;
    }
    .col-md-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-md-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
    }
    .order-md-last {
        -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
        order: 13;
    }
    .order-md-0 {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        order: 0;
    }
    .order-md-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
    }
    .order-md-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
    }
    .order-md-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3;
    }
    .order-md-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4;
    }
    .order-md-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5;
    }
    .order-md-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6;
    }
    .order-md-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7;
    }
    .order-md-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8;
    }
    .order-md-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9;
    }
    .order-md-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10;
    }
    .order-md-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11;
    }
    .order-md-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-md-0 {
        margin-left: 0;
    }
    .offset-md-1 {
        margin-left: 8.33333%;
    }
    .offset-md-2 {
        margin-left: 16.66667%;
    }
    .offset-md-3 {
        margin-left: 25%;
    }
    .offset-md-4 {
        margin-left: 33.33333%;
    }
    .offset-md-5 {
        margin-left: 41.66667%;
    }
    .offset-md-6 {
        margin-left: 50%;
    }
    .offset-md-7 {
        margin-left: 58.33333%;
    }
    .offset-md-8 {
        margin-left: 66.66667%;
    }
    .offset-md-9 {
        margin-left: 75%;
    }
    .offset-md-10 {
        margin-left: 83.33333%;
    }
    .offset-md-11 {
        margin-left: 91.66667%;
    }
}
@media (min-width: 992px) {
    .col-lg {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-lg-auto {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .col-lg-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .col-lg-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%;
    }
    .col-lg-3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-lg-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .col-lg-5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%;
    }
    .col-lg-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-lg-7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .col-lg-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
    }
    .col-lg-9 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-lg-10 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .col-lg-11 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%;
    }
    .col-lg-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-lg-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
    }
    .order-lg-last {
        -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
        order: 13;
    }
    .order-lg-0 {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        order: 0;
    }
    .order-lg-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
    }
    .order-lg-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
    }
    .order-lg-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3;
    }
    .order-lg-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4;
    }
    .order-lg-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5;
    }
    .order-lg-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6;
    }
    .order-lg-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7;
    }
    .order-lg-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8;
    }
    .order-lg-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9;
    }
    .order-lg-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10;
    }
    .order-lg-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11;
    }
    .order-lg-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-lg-0 {
        margin-left: 0;
    }
    .offset-lg-1 {
        margin-left: 8.33333%;
    }
    .offset-lg-2 {
        margin-left: 16.66667%;
    }
    .offset-lg-3 {
        margin-left: 25%;
    }
    .offset-lg-4 {
        margin-left: 33.33333%;
    }
    .offset-lg-5 {
        margin-left: 41.66667%;
    }
    .offset-lg-6 {
        margin-left: 50%;
    }
    .offset-lg-7 {
        margin-left: 58.33333%;
    }
    .offset-lg-8 {
        margin-left: 66.66667%;
    }
    .offset-lg-9 {
        margin-left: 75%;
    }
    .offset-lg-10 {
        margin-left: 83.33333%;
    }
    .offset-lg-11 {
        margin-left: 91.66667%;
    }
}
@media (min-width: 1200px) {
    .col-xl {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
    }
    .col-xl-auto {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }
    .col-xl-1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .col-xl-2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
        flex: 0 0 16.66667%;
        max-width: 16.66667%;
    }
    .col-xl-3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-xl-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .col-xl-5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
        flex: 0 0 41.66667%;
        max-width: 41.66667%;
    }
    .col-xl-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-xl-7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .col-xl-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
    }
    .col-xl-9 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-xl-10 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .col-xl-11 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
        flex: 0 0 91.66667%;
        max-width: 91.66667%;
    }
    .col-xl-12 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .order-xl-first {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
    }
    .order-xl-last {
        -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
        order: 13;
    }
    .order-xl-0 {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        order: 0;
    }
    .order-xl-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
    }
    .order-xl-2 {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
    }
    .order-xl-3 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3;
    }
    .order-xl-4 {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
        order: 4;
    }
    .order-xl-5 {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
        order: 5;
    }
    .order-xl-6 {
        -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
        order: 6;
    }
    .order-xl-7 {
        -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
        order: 7;
    }
    .order-xl-8 {
        -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
        order: 8;
    }
    .order-xl-9 {
        -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
        order: 9;
    }
    .order-xl-10 {
        -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
        order: 10;
    }
    .order-xl-11 {
        -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
        order: 11;
    }
    .order-xl-12 {
        -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
        order: 12;
    }
    .offset-xl-0 {
        margin-left: 0;
    }
    .offset-xl-1 {
        margin-left: 8.33333%;
    }
    .offset-xl-2 {
        margin-left: 16.66667%;
    }
    .offset-xl-3 {
        margin-left: 25%;
    }
    .offset-xl-4 {
        margin-left: 33.33333%;
    }
    .offset-xl-5 {
        margin-left: 41.66667%;
    }
    .offset-xl-6 {
        margin-left: 50%;
    }
    .offset-xl-7 {
        margin-left: 58.33333%;
    }
    .offset-xl-8 {
        margin-left: 66.66667%;
    }
    .offset-xl-9 {
        margin-left: 75%;
    }
    .offset-xl-10 {
        margin-left: 83.33333%;
    }
    .offset-xl-11 {
        margin-left: 91.66667%;
    }
}
.form-control {
    display: block;
    width: 100%;
    padding: 0.5625rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #80a2d1;
    background-color: transparent;
    background-clip: padding-box;
    border: 1px solid #4887dc;
    border-radius: 0;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
@media screen and (prefers-reduced-motion: reduce) {
    .form-control {
        -webkit-transition: none;
        transition: none;
    }
}
.form-control::-ms-expand {
    background-color: transparent;
    border: 0;
}
.form-control:focus {
    color: #fff;
    background-color: transparent;
    border-color: #fff;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.25);
}
.form-control::-webkit-input-placeholder {
    color: #80a2d1;
    opacity: 1;
}
.form-control:-ms-input-placeholder {
    color: #80a2d1;
    opacity: 1;
}
.form-control::-ms-input-placeholder {
    color: #80a2d1;
    opacity: 1;
}
.form-control::placeholder {
    color: #80a2d1;
    opacity: 1;
}
.form-control:disabled,
.form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
}
select.form-control:not([size]):not([multiple]) {
    height: calc(2.625rem + 2px);
}
select.form-control:focus::-ms-value {
    color: #80a2d1;
    background-color: transparent;
}
.form-control-file,
.form-control-range {
    display: block;
    width: 100%;
}
.col-form-label {
    padding-top: calc(0.5625rem + 1px);
    padding-bottom: calc(0.5625rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
}
.col-form-label-lg {
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.25rem;
    line-height: 1.5;
}
.col-form-label-sm {
    padding-top: calc(0.25rem + 1px);
    padding-bottom: calc(0.25rem + 1px);
    font-size: 0.875rem;
    line-height: 1.5;
}
.form-control-plaintext {
    display: block;
    width: 100%;
    padding-top: 0.5625rem;
    padding-bottom: 0.5625rem;
    margin-bottom: 0;
    line-height: 1.5;
    color: #fff;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
}
.form-control-plaintext.form-control-lg,
.form-control-plaintext.form-control-sm {
    padding-right: 0;
    padding-left: 0;
}
.form-control-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
}
select.form-control-sm:not([size]):not([multiple]) {
    height: calc(1.8125rem + 2px);
}
.form-control-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
}
select.form-control-lg:not([size]):not([multiple]) {
    height: calc(2.875rem + 2px);
}
.form-group {
    margin-bottom: 1rem;
}
.form-text {
    display: block;
    margin-top: 0.25rem;
}
.form-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
}
.form-row > .col,
.form-row > [class*='col-'] {
    padding-right: 5px;
    padding-left: 5px;
}
.form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem;
}
.form-check-input {
    position: absolute;
    margin-top: 0.3rem;
    margin-left: -1.25rem;
}
.form-check-input:disabled ~ .form-check-label {
    color: #6c757d;
}
.form-check-label {
    margin-bottom: 0;
}
.form-check-inline {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 0;
    margin-right: 0.75rem;
}
.form-check-inline .form-check-input {
    position: static;
    margin-top: 0;
    margin-right: 0.3125rem;
    margin-left: 0;
}
.valid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #28a745;
}
.valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    line-height: 1;
    color: #fff;
    background-color: rgba(40, 167, 69, 0.8);
    border-radius: 0.2rem;
}
.custom-select.is-valid,
.form-control.is-valid,
.was-validated .custom-select:valid,
.was-validated .form-control:valid {
    border-color: #28a745;
}
.custom-select.is-valid:focus,
.form-control.is-valid:focus,
.was-validated .custom-select:valid:focus,
.was-validated .form-control:valid:focus {
    border-color: #28a745;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
.custom-select.is-valid ~ .valid-feedback,
.custom-select.is-valid ~ .valid-tooltip,
.form-control.is-valid ~ .valid-feedback,
.form-control.is-valid ~ .valid-tooltip,
.was-validated .custom-select:valid ~ .valid-feedback,
.was-validated .custom-select:valid ~ .valid-tooltip,
.was-validated .form-control:valid ~ .valid-feedback,
.was-validated .form-control:valid ~ .valid-tooltip {
    display: block;
}
.form-control-file.is-valid ~ .valid-feedback,
.form-control-file.is-valid ~ .valid-tooltip,
.was-validated .form-control-file:valid ~ .valid-feedback,
.was-validated .form-control-file:valid ~ .valid-tooltip {
    display: block;
}
.form-check-input.is-valid ~ .form-check-label,
.was-validated .form-check-input:valid ~ .form-check-label {
    color: #28a745;
}
.form-check-input.is-valid ~ .valid-feedback,
.form-check-input.is-valid ~ .valid-tooltip,
.was-validated .form-check-input:valid ~ .valid-feedback,
.was-validated .form-check-input:valid ~ .valid-tooltip {
    display: block;
}
.custom-control-input.is-valid ~ .custom-control-label,
.was-validated .custom-control-input:valid ~ .custom-control-label {
    color: #28a745;
}
.custom-control-input.is-valid ~ .custom-control-label::before,
.was-validated .custom-control-input:valid ~ .custom-control-label::before {
    background-color: #71dd8a;
}
.custom-control-input.is-valid ~ .valid-feedback,
.custom-control-input.is-valid ~ .valid-tooltip,
.was-validated .custom-control-input:valid ~ .valid-feedback,
.was-validated .custom-control-input:valid ~ .valid-tooltip {
    display: block;
}
.custom-control-input.is-valid:checked ~ .custom-control-label::before,
.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before {
    background-color: #34ce57;
}
.custom-control-input.is-valid:focus ~ .custom-control-label::before,
.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before {
    -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
.custom-file-input.is-valid ~ .custom-file-label,
.was-validated .custom-file-input:valid ~ .custom-file-label {
    border-color: #28a745;
}
.custom-file-input.is-valid ~ .custom-file-label::before,
.was-validated .custom-file-input:valid ~ .custom-file-label::before {
    border-color: inherit;
}
.custom-file-input.is-valid ~ .valid-feedback,
.custom-file-input.is-valid ~ .valid-tooltip,
.was-validated .custom-file-input:valid ~ .valid-feedback,
.was-validated .custom-file-input:valid ~ .valid-tooltip {
    display: block;
}
.custom-file-input.is-valid:focus ~ .custom-file-label,
.was-validated .custom-file-input:valid:focus ~ .custom-file-label {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
.invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
}
.invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    line-height: 1;
    color: #fff;
    background-color: rgba(220, 53, 69, 0.8);
    border-radius: 0.2rem;
}
.custom-select.is-invalid,
.form-control.is-invalid,
.was-validated .custom-select:invalid,
.was-validated .form-control:invalid {
    border-color: #dc3545;
}
.custom-select.is-invalid:focus,
.form-control.is-invalid:focus,
.was-validated .custom-select:invalid:focus,
.was-validated .form-control:invalid:focus {
    border-color: #dc3545;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.custom-select.is-invalid ~ .invalid-feedback,
.custom-select.is-invalid ~ .invalid-tooltip,
.form-control.is-invalid ~ .invalid-feedback,
.form-control.is-invalid ~ .invalid-tooltip,
.was-validated .custom-select:invalid ~ .invalid-feedback,
.was-validated .custom-select:invalid ~ .invalid-tooltip,
.was-validated .form-control:invalid ~ .invalid-feedback,
.was-validated .form-control:invalid ~ .invalid-tooltip {
    display: block;
}
.form-control-file.is-invalid ~ .invalid-feedback,
.form-control-file.is-invalid ~ .invalid-tooltip,
.was-validated .form-control-file:invalid ~ .invalid-feedback,
.was-validated .form-control-file:invalid ~ .invalid-tooltip {
    display: block;
}
.form-check-input.is-invalid ~ .form-check-label,
.was-validated .form-check-input:invalid ~ .form-check-label {
    color: #dc3545;
}
.form-check-input.is-invalid ~ .invalid-feedback,
.form-check-input.is-invalid ~ .invalid-tooltip,
.was-validated .form-check-input:invalid ~ .invalid-feedback,
.was-validated .form-check-input:invalid ~ .invalid-tooltip {
    display: block;
}
.custom-control-input.is-invalid ~ .custom-control-label,
.was-validated .custom-control-input:invalid ~ .custom-control-label {
    color: #dc3545;
}
.custom-control-input.is-invalid ~ .custom-control-label::before,
.was-validated .custom-control-input:invalid ~ .custom-control-label::before {
    background-color: #efa2a9;
}
.custom-control-input.is-invalid ~ .invalid-feedback,
.custom-control-input.is-invalid ~ .invalid-tooltip,
.was-validated .custom-control-input:invalid ~ .invalid-feedback,
.was-validated .custom-control-input:invalid ~ .invalid-tooltip {
    display: block;
}
.custom-control-input.is-invalid:checked ~ .custom-control-label::before,
.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before {
    background-color: #e4606d;
}
.custom-control-input.is-invalid:focus ~ .custom-control-label::before,
.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before {
    -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.custom-file-input.is-invalid ~ .custom-file-label,
.was-validated .custom-file-input:invalid ~ .custom-file-label {
    border-color: #dc3545;
}
.custom-file-input.is-invalid ~ .custom-file-label::before,
.was-validated .custom-file-input:invalid ~ .custom-file-label::before {
    border-color: inherit;
}
.custom-file-input.is-invalid ~ .invalid-feedback,
.custom-file-input.is-invalid ~ .invalid-tooltip,
.was-validated .custom-file-input:invalid ~ .invalid-feedback,
.was-validated .custom-file-input:invalid ~ .invalid-tooltip {
    display: block;
}
.custom-file-input.is-invalid:focus ~ .custom-file-label,
.was-validated .custom-file-input:invalid:focus ~ .custom-file-label {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.form-inline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.form-inline .form-check {
    width: 100%;
}
@media (min-width: 576px) {
    .form-inline label {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-bottom: 0;
    }
    .form-inline .form-group {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 0;
    }
    .form-inline .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle;
    }
    .form-inline .form-control-plaintext {
        display: inline-block;
    }
    .form-inline .custom-select,
    .form-inline .input-group {
        width: auto;
    }
    .form-inline .form-check {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: auto;
        padding-left: 0;
    }
    .form-inline .form-check-input {
        position: relative;
        margin-top: 0;
        margin-right: 0.25rem;
        margin-left: 0;
    }
    .form-inline .custom-control {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .form-inline .custom-control-label {
        margin-bottom: 0;
    }
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.5625rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
@media screen and (prefers-reduced-motion: reduce) {
    .btn {
        -webkit-transition: none;
        transition: none;
    }
}
.btn:focus,
.btn:hover {
    text-decoration: none;
}
.btn.focus,
.btn:focus {
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.25);
}
.btn.disabled,
.btn:disabled {
    opacity: 0.65;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn:not(:disabled):not(.disabled).active,
.btn:not(:disabled):not(.disabled):active {
    background-image: none;
}
a.btn.disabled,
fieldset:disabled a.btn {
    pointer-events: none;
}
.btn-primary {
    color: #fff;
    background-color: #063280;
    border-color: #063280;
}
.btn-primary:hover {
    color: #fff;
    background-color: #04245b;
    border-color: #041f4f;
}
.btn-primary.focus,
.btn-primary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.5);
}
.btn-primary.disabled,
.btn-primary:disabled {
    color: #fff;
    background-color: #063280;
    border-color: #063280;
}
.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #041f4f;
    border-color: #031a43;
}
.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.5);
}
.btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}
.btn-secondary:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
}
.btn-secondary.focus,
.btn-secondary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}
.btn-secondary.disabled,
.btn-secondary:disabled {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}
.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #545b62;
    border-color: #4e555b;
}
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}
.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}
.btn-success:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
}
.btn-success.focus,
.btn-success:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}
.btn-success.disabled,
.btn-success:disabled {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}
.btn-success:not(:disabled):not(.disabled).active,
.btn-success:not(:disabled):not(.disabled):active,
.show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #1e7e34;
    border-color: #1c7430;
}
.btn-success:not(:disabled):not(.disabled).active:focus,
.btn-success:not(:disabled):not(.disabled):active:focus,
.show > .btn-success.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}
.btn-info {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
}
.btn-info:hover {
    color: #fff;
    background-color: #138496;
    border-color: #117a8b;
}
.btn-info.focus,
.btn-info:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}
.btn-info.disabled,
.btn-info:disabled {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
}
.btn-info:not(:disabled):not(.disabled).active,
.btn-info:not(:disabled):not(.disabled):active,
.show > .btn-info.dropdown-toggle {
    color: #fff;
    background-color: #117a8b;
    border-color: #10707f;
}
.btn-info:not(:disabled):not(.disabled).active:focus,
.btn-info:not(:disabled):not(.disabled):active:focus,
.show > .btn-info.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}
.btn-warning {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
}
.btn-warning:hover {
    color: #212529;
    background-color: #e0a800;
    border-color: #d39e00;
}
.btn-warning.focus,
.btn-warning:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}
.btn-warning.disabled,
.btn-warning:disabled {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
}
.btn-warning:not(:disabled):not(.disabled).active,
.btn-warning:not(:disabled):not(.disabled):active,
.show > .btn-warning.dropdown-toggle {
    color: #212529;
    background-color: #d39e00;
    border-color: #c69500;
}
.btn-warning:not(:disabled):not(.disabled).active:focus,
.btn-warning:not(:disabled):not(.disabled):active:focus,
.show > .btn-warning.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}
.btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}
.btn-danger:hover {
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130;
}
.btn-danger.focus,
.btn-danger:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}
.btn-danger.disabled,
.btn-danger:disabled {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}
.btn-danger:not(:disabled):not(.disabled).active,
.btn-danger:not(:disabled):not(.disabled):active,
.show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #bd2130;
    border-color: #b21f2d;
}
.btn-danger:not(:disabled):not(.disabled).active:focus,
.btn-danger:not(:disabled):not(.disabled):active:focus,
.show > .btn-danger.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}
.btn-light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
}
.btn-light:hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
}
.btn-light.focus,
.btn-light:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}
.btn-light.disabled,
.btn-light:disabled {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
}
.btn-light:not(:disabled):not(.disabled).active,
.btn-light:not(:disabled):not(.disabled):active,
.show > .btn-light.dropdown-toggle {
    color: #212529;
    background-color: #dae0e5;
    border-color: #d3d9df;
}
.btn-light:not(:disabled):not(.disabled).active:focus,
.btn-light:not(:disabled):not(.disabled):active:focus,
.show > .btn-light.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}
.btn-dark {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
}
.btn-dark:hover {
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124;
}
.btn-dark.focus,
.btn-dark:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}
.btn-dark.disabled,
.btn-dark:disabled {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
}
.btn-dark:not(:disabled):not(.disabled).active,
.btn-dark:not(:disabled):not(.disabled):active,
.show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #1d2124;
    border-color: #171a1d;
}
.btn-dark:not(:disabled):not(.disabled).active:focus,
.btn-dark:not(:disabled):not(.disabled):active:focus,
.show > .btn-dark.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}
.btn-outline-primary {
    color: #063280;
    background-color: transparent;
    background-image: none;
    border-color: #063280;
}
.btn-outline-primary:hover {
    color: #fff;
    background-color: #063280;
    border-color: #063280;
}
.btn-outline-primary.focus,
.btn-outline-primary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.5);
}
.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
    color: #063280;
    background-color: transparent;
}
.btn-outline-primary:not(:disabled):not(.disabled).active,
.btn-outline-primary:not(:disabled):not(.disabled):active,
.show > .btn-outline-primary.dropdown-toggle {
    color: #fff;
    background-color: #063280;
    border-color: #063280;
}
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(6, 50, 128, 0.5);
}
.btn-outline-secondary {
    color: #6c757d;
    background-color: transparent;
    background-image: none;
    border-color: #6c757d;
}
.btn-outline-secondary:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}
.btn-outline-secondary.focus,
.btn-outline-secondary:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}
.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
    color: #6c757d;
    background-color: transparent;
}
.btn-outline-secondary:not(:disabled):not(.disabled).active,
.btn-outline-secondary:not(:disabled):not(.disabled):active,
.show > .btn-outline-secondary.dropdown-toggle {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}
.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-secondary.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}
.btn-outline-success {
    color: #28a745;
    background-color: transparent;
    background-image: none;
    border-color: #28a745;
}
.btn-outline-success:hover {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}
.btn-outline-success.focus,
.btn-outline-success:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}
.btn-outline-success.disabled,
.btn-outline-success:disabled {
    color: #28a745;
    background-color: transparent;
}
.btn-outline-success:not(:disabled):not(.disabled).active,
.btn-outline-success:not(:disabled):not(.disabled):active,
.show > .btn-outline-success.dropdown-toggle {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}
.btn-outline-success:not(:disabled):not(.disabled).active:focus,
.btn-outline-success:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-success.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}
.btn-outline-info {
    color: #17a2b8;
    background-color: transparent;
    background-image: none;
    border-color: #17a2b8;
}
.btn-outline-info:hover {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
}
.btn-outline-info.focus,
.btn-outline-info:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}
.btn-outline-info.disabled,
.btn-outline-info:disabled {
    color: #17a2b8;
    background-color: transparent;
}
.btn-outline-info:not(:disabled):not(.disabled).active,
.btn-outline-info:not(:disabled):not(.disabled):active,
.show > .btn-outline-info.dropdown-toggle {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
}
.btn-outline-info:not(:disabled):not(.disabled).active:focus,
.btn-outline-info:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-info.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}
.btn-outline-warning {
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107;
}
.btn-outline-warning:hover {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
}
.btn-outline-warning.focus,
.btn-outline-warning:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}
.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
    color: #ffc107;
    background-color: transparent;
}
.btn-outline-warning:not(:disabled):not(.disabled).active,
.btn-outline-warning:not(:disabled):not(.disabled):active,
.show > .btn-outline-warning.dropdown-toggle {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
}
.btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.btn-outline-warning:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-warning.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}
.btn-outline-danger {
    color: #dc3545;
    background-color: transparent;
    background-image: none;
    border-color: #dc3545;
}
.btn-outline-danger:hover {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}
.btn-outline-danger.focus,
.btn-outline-danger:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}
.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
    color: #dc3545;
    background-color: transparent;
}
.btn-outline-danger:not(:disabled):not(.disabled).active,
.btn-outline-danger:not(:disabled):not(.disabled):active,
.show > .btn-outline-danger.dropdown-toggle {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}
.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-danger.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}
.btn-outline-light {
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;
}
.btn-outline-light:hover {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
}
.btn-outline-light.focus,
.btn-outline-light:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light.disabled,
.btn-outline-light:disabled {
    color: #f8f9fa;
    background-color: transparent;
}
.btn-outline-light:not(:disabled):not(.disabled).active,
.btn-outline-light:not(:disabled):not(.disabled):active,
.show > .btn-outline-light.dropdown-toggle {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
}
.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-light.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}
.btn-outline-dark {
    color: #343a40;
    background-color: transparent;
    background-image: none;
    border-color: #343a40;
}
.btn-outline-dark:hover {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
}
.btn-outline-dark.focus,
.btn-outline-dark:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}
.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
    color: #343a40;
    background-color: transparent;
}
.btn-outline-dark:not(:disabled):not(.disabled).active,
.btn-outline-dark:not(:disabled):not(.disabled):active,
.show > .btn-outline-dark.dropdown-toggle {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
}
.btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.btn-outline-dark:not(:disabled):not(.disabled):active:focus,
.show > .btn-outline-dark.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}
.btn-link {
    font-weight: 400;
    color: #063280;
    background-color: transparent;
}
.btn-link:hover {
    color: #031537;
    text-decoration: underline;
    background-color: transparent;
    border-color: transparent;
}
.btn-link.focus,
.btn-link:focus {
    text-decoration: underline;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.btn-link.disabled,
.btn-link:disabled {
    color: #6c757d;
    pointer-events: none;
}
.btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0;
}
.btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0;
}
.btn-block {
    display: block;
    width: 100%;
}
.btn-block + .btn-block {
    margin-top: 0.5rem;
}
input[type='button'].btn-block,
input[type='reset'].btn-block,
input[type='submit'].btn-block {
    width: 100%;
}
.fade {
    -webkit-transition: opacity 0.15s linear;
    transition: opacity 0.15s linear;
}
@media screen and (prefers-reduced-motion: reduce) {
    .fade {
        -webkit-transition: none;
        transition: none;
    }
}
.fade:not(.show) {
    opacity: 0;
}
.collapse:not(.show) {
    display: none;
}
.collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition: height 0.35s ease;
    transition: height 0.35s ease;
}
@media screen and (prefers-reduced-motion: reduce) {
    .collapsing {
        -webkit-transition: none;
        transition: none;
    }
}
.nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.nav-link {
    display: block;
    padding: 0.5rem 1rem;
}
.nav-link:focus,
.nav-link:hover {
    text-decoration: none;
}
.nav-link.disabled {
    color: #6c757d;
}
.nav-tabs {
    border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-item {
    margin-bottom: -1px;
}
.nav-tabs .nav-link {
    border: 1px solid transparent;
}
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
}
.nav-tabs .nav-link.disabled {
    color: #6c757d;
    background-color: transparent;
    border-color: transparent;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .dropdown-menu {
    margin-top: -1px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
    color: #fff;
    background-color: #063280;
}
.nav-fill .nav-item {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    text-align: center;
}
.nav-justified .nav-item {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: center;
}
.tab-content > .tab-pane {
    display: none;
}
.tab-content > .active {
    display: block;
}
@-webkit-keyframes progress-bar-stripes {
    from {
        background-position: 1rem 0;
    }
    to {
        background-position: 0 0;
    }
}
@keyframes progress-bar-stripes {
    from {
        background-position: 1rem 0;
    }
    to {
        background-position: 0 0;
    }
}
.progress {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #e9ecef;
}
.progress-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #063280;
    -webkit-transition: width 0.6s ease;
    transition: width 0.6s ease;
}
@media screen and (prefers-reduced-motion: reduce) {
    .progress-bar {
        -webkit-transition: none;
        transition: none;
    }
}
.progress-bar-striped {
    background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
    );
    background-size: 1rem 1rem;
}
.progress-bar-animated {
    -webkit-animation: progress-bar-stripes 1s linear infinite;
    animation: progress-bar-stripes 1s linear infinite;
}
.modal-open {
    overflow: hidden;
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;
}
.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}
.modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
}
.modal.fade .modal-dialog {
    -webkit-transition: -webkit-transform 0.3s ease-out;
    transition: -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    -webkit-transform: translate(0, -25%);
    transform: translate(0, -25%);
}
@media screen and (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
        -webkit-transition: none;
        transition: none;
    }
}
.modal.show .modal-dialog {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}
.modal-dialog-centered {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));
}
.modal-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: 0;
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
}
.modal-backdrop.fade {
    opacity: 0;
}
.modal-backdrop.show {
    opacity: 0.5;
}
.modal-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
}
.modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
}
.modal-body {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
}
.modal-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
}
.modal-footer > :not(:first-child) {
    margin-left: 0.25rem;
}
.modal-footer > :not(:last-child) {
    margin-right: 0.25rem;
}
.modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
}
@media (min-width: 576px) {
    .modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto;
    }
    .modal-dialog-centered {
        min-height: calc(100% - (1.75rem * 2));
    }
    .modal-sm {
        max-width: 300px;
    }
}
@media (min-width: 992px) {
    .modal-lg {
        max-width: 800px;
    }
}
@media (min-width: 992px) {
    .modal-xl {
        max-width: 90%;
    }
}
.tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    opacity: 0;
}
.tooltip.show {
    opacity: 0.9;
}
.tooltip .arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem;
}
.tooltip .arrow::before {
    position: absolute;
    content: '';
    border-color: transparent;
    border-style: solid;
}
.bs-tooltip-auto[x-placement^='top'],
.bs-tooltip-top {
    padding: 0.4rem 0;
}
.bs-tooltip-auto[x-placement^='top'] .arrow,
.bs-tooltip-top .arrow {
    bottom: 0;
}
.bs-tooltip-auto[x-placement^='top'] .arrow::before,
.bs-tooltip-top .arrow::before {
    top: 0;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: #000;
}
.bs-tooltip-auto[x-placement^='right'],
.bs-tooltip-right {
    padding: 0 0.4rem;
}
.bs-tooltip-auto[x-placement^='right'] .arrow,
.bs-tooltip-right .arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem;
}
.bs-tooltip-auto[x-placement^='right'] .arrow::before,
.bs-tooltip-right .arrow::before {
    right: 0;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    border-right-color: #000;
}
.bs-tooltip-auto[x-placement^='bottom'],
.bs-tooltip-bottom {
    padding: 0.4rem 0;
}
.bs-tooltip-auto[x-placement^='bottom'] .arrow,
.bs-tooltip-bottom .arrow {
    top: 0;
}
.bs-tooltip-auto[x-placement^='bottom'] .arrow::before,
.bs-tooltip-bottom .arrow::before {
    bottom: 0;
    border-width: 0 0.4rem 0.4rem;
    border-bottom-color: #000;
}
.bs-tooltip-auto[x-placement^='left'],
.bs-tooltip-left {
    padding: 0 0.4rem;
}
.bs-tooltip-auto[x-placement^='left'] .arrow,
.bs-tooltip-left .arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem;
}
.bs-tooltip-auto[x-placement^='left'] .arrow::before,
.bs-tooltip-left .arrow::before {
    left: 0;
    border-width: 0.4rem 0 0.4rem 0.4rem;
    border-left-color: #000;
}
.tooltip-inner {
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    background-color: #000;
}
.popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 276px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
.popover .arrow {
    position: absolute;
    display: block;
    width: 1rem;
    height: 0.5rem;
    margin: 0 0.3rem;
}
.popover .arrow::after,
.popover .arrow::before {
    position: absolute;
    display: block;
    content: '';
    border-color: transparent;
    border-style: solid;
}
.bs-popover-auto[x-placement^='top'],
.bs-popover-top {
    margin-bottom: 0.5rem;
}
.bs-popover-auto[x-placement^='top'] .arrow,
.bs-popover-top .arrow {
    bottom: calc((0.5rem + 1px) * -1);
}
.bs-popover-auto[x-placement^='top'] .arrow::after,
.bs-popover-auto[x-placement^='top'] .arrow::before,
.bs-popover-top .arrow::after,
.bs-popover-top .arrow::before {
    border-width: 0.5rem 0.5rem 0;
}
.bs-popover-auto[x-placement^='top'] .arrow::before,
.bs-popover-top .arrow::before {
    bottom: 0;
    border-top-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-auto[x-placement^='top'] .arrow::after,
.bs-popover-top .arrow::after {
    bottom: 1px;
    border-top-color: #fff;
}
.bs-popover-auto[x-placement^='right'],
.bs-popover-right {
    margin-left: 0.5rem;
}
.bs-popover-auto[x-placement^='right'] .arrow,
.bs-popover-right .arrow {
    left: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 1rem;
    margin: 0.3rem 0;
}
.bs-popover-auto[x-placement^='right'] .arrow::after,
.bs-popover-auto[x-placement^='right'] .arrow::before,
.bs-popover-right .arrow::after,
.bs-popover-right .arrow::before {
    border-width: 0.5rem 0.5rem 0.5rem 0;
}
.bs-popover-auto[x-placement^='right'] .arrow::before,
.bs-popover-right .arrow::before {
    left: 0;
    border-right-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-auto[x-placement^='right'] .arrow::after,
.bs-popover-right .arrow::after {
    left: 1px;
    border-right-color: #fff;
}
.bs-popover-auto[x-placement^='bottom'],
.bs-popover-bottom {
    margin-top: 0.5rem;
}
.bs-popover-auto[x-placement^='bottom'] .arrow,
.bs-popover-bottom .arrow {
    top: calc((0.5rem + 1px) * -1);
}
.bs-popover-auto[x-placement^='bottom'] .arrow::after,
.bs-popover-auto[x-placement^='bottom'] .arrow::before,
.bs-popover-bottom .arrow::after,
.bs-popover-bottom .arrow::before {
    border-width: 0 0.5rem 0.5rem 0.5rem;
}
.bs-popover-auto[x-placement^='bottom'] .arrow::before,
.bs-popover-bottom .arrow::before {
    top: 0;
    border-bottom-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-auto[x-placement^='bottom'] .arrow::after,
.bs-popover-bottom .arrow::after {
    top: 1px;
    border-bottom-color: #fff;
}
.bs-popover-auto[x-placement^='bottom'] .popover-header::before,
.bs-popover-bottom .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -0.5rem;
    content: '';
    border-bottom: 1px solid #f7f7f7;
}
.bs-popover-auto[x-placement^='left'],
.bs-popover-left {
    margin-right: 0.5rem;
}
.bs-popover-auto[x-placement^='left'] .arrow,
.bs-popover-left .arrow {
    right: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 1rem;
    margin: 0.3rem 0;
}
.bs-popover-auto[x-placement^='left'] .arrow::after,
.bs-popover-auto[x-placement^='left'] .arrow::before,
.bs-popover-left .arrow::after,
.bs-popover-left .arrow::before {
    border-width: 0.5rem 0 0.5rem 0.5rem;
}
.bs-popover-auto[x-placement^='left'] .arrow::before,
.bs-popover-left .arrow::before {
    right: 0;
    border-left-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-auto[x-placement^='left'] .arrow::after,
.bs-popover-left .arrow::after {
    right: 1px;
    border-left-color: #fff;
}
.popover-header {
    padding: 0.5rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    color: inherit;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
}
.popover-header:empty {
    display: none;
}
.popover-body {
    padding: 0.5rem 0.75rem;
    color: #fff;
}
.d-none {
    display: none !important;
}
.d-inline {
    display: inline !important;
}
.d-inline-block {
    display: inline-block !important;
}
.d-block {
    display: block !important;
}
.d-table {
    display: table !important;
}
.d-table-row {
    display: table-row !important;
}
.d-table-cell {
    display: table-cell !important;
}
.d-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
}
.d-inline-flex {
    display: -webkit-inline-box !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
}
@media (min-width: 576px) {
    .d-sm-none {
        display: none !important;
    }
    .d-sm-inline {
        display: inline !important;
    }
    .d-sm-inline-block {
        display: inline-block !important;
    }
    .d-sm-block {
        display: block !important;
    }
    .d-sm-table {
        display: table !important;
    }
    .d-sm-table-row {
        display: table-row !important;
    }
    .d-sm-table-cell {
        display: table-cell !important;
    }
    .d-sm-flex {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    }
    .d-sm-inline-flex {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }
}
@media (min-width: 768px) {
    .d-md-none {
        display: none !important;
    }
    .d-md-inline {
        display: inline !important;
    }
    .d-md-inline-block {
        display: inline-block !important;
    }
    .d-md-block {
        display: block !important;
    }
    .d-md-table {
        display: table !important;
    }
    .d-md-table-row {
        display: table-row !important;
    }
    .d-md-table-cell {
        display: table-cell !important;
    }
    .d-md-flex {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    }
    .d-md-inline-flex {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }
}
@media (min-width: 992px) {
    .d-lg-none {
        display: none !important;
    }
    .d-lg-inline {
        display: inline !important;
    }
    .d-lg-inline-block {
        display: inline-block !important;
    }
    .d-lg-block {
        display: block !important;
    }
    .d-lg-table {
        display: table !important;
    }
    .d-lg-table-row {
        display: table-row !important;
    }
    .d-lg-table-cell {
        display: table-cell !important;
    }
    .d-lg-flex {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    }
    .d-lg-inline-flex {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }
}
@media (min-width: 1200px) {
    .d-xl-none {
        display: none !important;
    }
    .d-xl-inline {
        display: inline !important;
    }
    .d-xl-inline-block {
        display: inline-block !important;
    }
    .d-xl-block {
        display: block !important;
    }
    .d-xl-table {
        display: table !important;
    }
    .d-xl-table-row {
        display: table-row !important;
    }
    .d-xl-table-cell {
        display: table-cell !important;
    }
    .d-xl-flex {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    }
    .d-xl-inline-flex {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }
}
@media print {
    .d-print-none {
        display: none !important;
    }
    .d-print-inline {
        display: inline !important;
    }
    .d-print-inline-block {
        display: inline-block !important;
    }
    .d-print-block {
        display: block !important;
    }
    .d-print-table {
        display: table !important;
    }
    .d-print-table-row {
        display: table-row !important;
    }
    .d-print-table-cell {
        display: table-cell !important;
    }
    .d-print-flex {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    }
    .d-print-inline-flex {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important;
    }
}
.flex-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: row !important;
    flex-direction: row !important;
}
.flex-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: column !important;
    flex-direction: column !important;
}
.flex-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
}
.flex-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
}
.flex-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
}
.flex-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
}
.flex-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
}
.flex-fill {
    -webkit-box-flex: 1 !important;
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
}
.flex-grow-0 {
    -webkit-box-flex: 0 !important;
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
}
.flex-grow-1 {
    -webkit-box-flex: 1 !important;
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
}
.flex-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
}
.flex-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
}
.justify-content-start {
    -webkit-box-pack: start !important;
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
}
.justify-content-end {
    -webkit-box-pack: end !important;
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
}
.justify-content-center {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
}
.justify-content-between {
    -webkit-box-pack: justify !important;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
}
.justify-content-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
}
.align-items-start {
    -webkit-box-align: start !important;
    -ms-flex-align: start !important;
    align-items: flex-start !important;
}
.align-items-end {
    -webkit-box-align: end !important;
    -ms-flex-align: end !important;
    align-items: flex-end !important;
}
.align-items-center {
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
}
.align-items-baseline {
    -webkit-box-align: baseline !important;
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
}
.align-items-stretch {
    -webkit-box-align: stretch !important;
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
}
.align-content-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
}
.align-content-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
}
.align-content-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
}
.align-content-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
}
.align-content-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
}
.align-content-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
}
.align-self-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
}
.align-self-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
}
.align-self-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
}
.align-self-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
}
.align-self-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
}
.align-self-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
}
@media (min-width: 576px) {
    .flex-sm-row {
        -webkit-box-orient: horizontal !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: row !important;
        flex-direction: row !important;
    }
    .flex-sm-column {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
    .flex-sm-row-reverse {
        -webkit-box-orient: horizontal !important;
        -webkit-box-direction: reverse !important;
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important;
    }
    .flex-sm-column-reverse {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: reverse !important;
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important;
    }
    .flex-sm-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important;
    }
    .flex-sm-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important;
    }
    .flex-sm-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important;
    }
    .flex-sm-fill {
        -webkit-box-flex: 1 !important;
        -ms-flex: 1 1 auto !important;
        flex: 1 1 auto !important;
    }
    .flex-sm-grow-0 {
        -webkit-box-flex: 0 !important;
        -ms-flex-positive: 0 !important;
        flex-grow: 0 !important;
    }
    .flex-sm-grow-1 {
        -webkit-box-flex: 1 !important;
        -ms-flex-positive: 1 !important;
        flex-grow: 1 !important;
    }
    .flex-sm-shrink-0 {
        -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important;
    }
    .flex-sm-shrink-1 {
        -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important;
    }
    .justify-content-sm-start {
        -webkit-box-pack: start !important;
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
    }
    .justify-content-sm-end {
        -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
    }
    .justify-content-sm-center {
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }
    .justify-content-sm-between {
        -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }
    .justify-content-sm-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important;
    }
    .align-items-sm-start {
        -webkit-box-align: start !important;
        -ms-flex-align: start !important;
        align-items: flex-start !important;
    }
    .align-items-sm-end {
        -webkit-box-align: end !important;
        -ms-flex-align: end !important;
        align-items: flex-end !important;
    }
    .align-items-sm-center {
        -webkit-box-align: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
    }
    .align-items-sm-baseline {
        -webkit-box-align: baseline !important;
        -ms-flex-align: baseline !important;
        align-items: baseline !important;
    }
    .align-items-sm-stretch {
        -webkit-box-align: stretch !important;
        -ms-flex-align: stretch !important;
        align-items: stretch !important;
    }
    .align-content-sm-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important;
    }
    .align-content-sm-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important;
    }
    .align-content-sm-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important;
    }
    .align-content-sm-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important;
    }
    .align-content-sm-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important;
    }
    .align-content-sm-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important;
    }
    .align-self-sm-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important;
    }
    .align-self-sm-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important;
    }
    .align-self-sm-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important;
    }
    .align-self-sm-center {
        -ms-flex-item-align: center !important;
        align-self: center !important;
    }
    .align-self-sm-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important;
    }
    .align-self-sm-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important;
    }
}
@media (min-width: 768px) {
    .flex-md-row {
        -webkit-box-orient: horizontal !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: row !important;
        flex-direction: row !important;
    }
    .flex-md-column {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
    .flex-md-row-reverse {
        -webkit-box-orient: horizontal !important;
        -webkit-box-direction: reverse !important;
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important;
    }
    .flex-md-column-reverse {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: reverse !important;
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important;
    }
    .flex-md-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important;
    }
    .flex-md-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important;
    }
    .flex-md-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important;
    }
    .flex-md-fill {
        -webkit-box-flex: 1 !important;
        -ms-flex: 1 1 auto !important;
        flex: 1 1 auto !important;
    }
    .flex-md-grow-0 {
        -webkit-box-flex: 0 !important;
        -ms-flex-positive: 0 !important;
        flex-grow: 0 !important;
    }
    .flex-md-grow-1 {
        -webkit-box-flex: 1 !important;
        -ms-flex-positive: 1 !important;
        flex-grow: 1 !important;
    }
    .flex-md-shrink-0 {
        -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important;
    }
    .flex-md-shrink-1 {
        -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important;
    }
    .justify-content-md-start {
        -webkit-box-pack: start !important;
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
    }
    .justify-content-md-end {
        -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
    }
    .justify-content-md-center {
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }
    .justify-content-md-between {
        -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }
    .justify-content-md-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important;
    }
    .align-items-md-start {
        -webkit-box-align: start !important;
        -ms-flex-align: start !important;
        align-items: flex-start !important;
    }
    .align-items-md-end {
        -webkit-box-align: end !important;
        -ms-flex-align: end !important;
        align-items: flex-end !important;
    }
    .align-items-md-center {
        -webkit-box-align: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
    }
    .align-items-md-baseline {
        -webkit-box-align: baseline !important;
        -ms-flex-align: baseline !important;
        align-items: baseline !important;
    }
    .align-items-md-stretch {
        -webkit-box-align: stretch !important;
        -ms-flex-align: stretch !important;
        align-items: stretch !important;
    }
    .align-content-md-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important;
    }
    .align-content-md-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important;
    }
    .align-content-md-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important;
    }
    .align-content-md-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important;
    }
    .align-content-md-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important;
    }
    .align-content-md-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important;
    }
    .align-self-md-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important;
    }
    .align-self-md-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important;
    }
    .align-self-md-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important;
    }
    .align-self-md-center {
        -ms-flex-item-align: center !important;
        align-self: center !important;
    }
    .align-self-md-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important;
    }
    .align-self-md-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important;
    }
}
@media (min-width: 992px) {
    .flex-lg-row {
        -webkit-box-orient: horizontal !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: row !important;
        flex-direction: row !important;
    }
    .flex-lg-column {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
    .flex-lg-row-reverse {
        -webkit-box-orient: horizontal !important;
        -webkit-box-direction: reverse !important;
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important;
    }
    .flex-lg-column-reverse {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: reverse !important;
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important;
    }
    .flex-lg-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important;
    }
    .flex-lg-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important;
    }
    .flex-lg-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important;
    }
    .flex-lg-fill {
        -webkit-box-flex: 1 !important;
        -ms-flex: 1 1 auto !important;
        flex: 1 1 auto !important;
    }
    .flex-lg-grow-0 {
        -webkit-box-flex: 0 !important;
        -ms-flex-positive: 0 !important;
        flex-grow: 0 !important;
    }
    .flex-lg-grow-1 {
        -webkit-box-flex: 1 !important;
        -ms-flex-positive: 1 !important;
        flex-grow: 1 !important;
    }
    .flex-lg-shrink-0 {
        -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important;
    }
    .flex-lg-shrink-1 {
        -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important;
    }
    .justify-content-lg-start {
        -webkit-box-pack: start !important;
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
    }
    .justify-content-lg-end {
        -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
    }
    .justify-content-lg-center {
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }
    .justify-content-lg-between {
        -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }
    .justify-content-lg-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important;
    }
    .align-items-lg-start {
        -webkit-box-align: start !important;
        -ms-flex-align: start !important;
        align-items: flex-start !important;
    }
    .align-items-lg-end {
        -webkit-box-align: end !important;
        -ms-flex-align: end !important;
        align-items: flex-end !important;
    }
    .align-items-lg-center {
        -webkit-box-align: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
    }
    .align-items-lg-baseline {
        -webkit-box-align: baseline !important;
        -ms-flex-align: baseline !important;
        align-items: baseline !important;
    }
    .align-items-lg-stretch {
        -webkit-box-align: stretch !important;
        -ms-flex-align: stretch !important;
        align-items: stretch !important;
    }
    .align-content-lg-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important;
    }
    .align-content-lg-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important;
    }
    .align-content-lg-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important;
    }
    .align-content-lg-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important;
    }
    .align-content-lg-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important;
    }
    .align-content-lg-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important;
    }
    .align-self-lg-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important;
    }
    .align-self-lg-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important;
    }
    .align-self-lg-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important;
    }
    .align-self-lg-center {
        -ms-flex-item-align: center !important;
        align-self: center !important;
    }
    .align-self-lg-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important;
    }
    .align-self-lg-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important;
    }
}
@media (min-width: 1200px) {
    .flex-xl-row {
        -webkit-box-orient: horizontal !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: row !important;
        flex-direction: row !important;
    }
    .flex-xl-column {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
        flex-direction: column !important;
    }
    .flex-xl-row-reverse {
        -webkit-box-orient: horizontal !important;
        -webkit-box-direction: reverse !important;
        -ms-flex-direction: row-reverse !important;
        flex-direction: row-reverse !important;
    }
    .flex-xl-column-reverse {
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: reverse !important;
        -ms-flex-direction: column-reverse !important;
        flex-direction: column-reverse !important;
    }
    .flex-xl-wrap {
        -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important;
    }
    .flex-xl-nowrap {
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important;
    }
    .flex-xl-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important;
    }
    .flex-xl-fill {
        -webkit-box-flex: 1 !important;
        -ms-flex: 1 1 auto !important;
        flex: 1 1 auto !important;
    }
    .flex-xl-grow-0 {
        -webkit-box-flex: 0 !important;
        -ms-flex-positive: 0 !important;
        flex-grow: 0 !important;
    }
    .flex-xl-grow-1 {
        -webkit-box-flex: 1 !important;
        -ms-flex-positive: 1 !important;
        flex-grow: 1 !important;
    }
    .flex-xl-shrink-0 {
        -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important;
    }
    .flex-xl-shrink-1 {
        -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important;
    }
    .justify-content-xl-start {
        -webkit-box-pack: start !important;
        -ms-flex-pack: start !important;
        justify-content: flex-start !important;
    }
    .justify-content-xl-end {
        -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
    }
    .justify-content-xl-center {
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }
    .justify-content-xl-between {
        -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }
    .justify-content-xl-around {
        -ms-flex-pack: distribute !important;
        justify-content: space-around !important;
    }
    .align-items-xl-start {
        -webkit-box-align: start !important;
        -ms-flex-align: start !important;
        align-items: flex-start !important;
    }
    .align-items-xl-end {
        -webkit-box-align: end !important;
        -ms-flex-align: end !important;
        align-items: flex-end !important;
    }
    .align-items-xl-center {
        -webkit-box-align: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
    }
    .align-items-xl-baseline {
        -webkit-box-align: baseline !important;
        -ms-flex-align: baseline !important;
        align-items: baseline !important;
    }
    .align-items-xl-stretch {
        -webkit-box-align: stretch !important;
        -ms-flex-align: stretch !important;
        align-items: stretch !important;
    }
    .align-content-xl-start {
        -ms-flex-line-pack: start !important;
        align-content: flex-start !important;
    }
    .align-content-xl-end {
        -ms-flex-line-pack: end !important;
        align-content: flex-end !important;
    }
    .align-content-xl-center {
        -ms-flex-line-pack: center !important;
        align-content: center !important;
    }
    .align-content-xl-between {
        -ms-flex-line-pack: justify !important;
        align-content: space-between !important;
    }
    .align-content-xl-around {
        -ms-flex-line-pack: distribute !important;
        align-content: space-around !important;
    }
    .align-content-xl-stretch {
        -ms-flex-line-pack: stretch !important;
        align-content: stretch !important;
    }
    .align-self-xl-auto {
        -ms-flex-item-align: auto !important;
        align-self: auto !important;
    }
    .align-self-xl-start {
        -ms-flex-item-align: start !important;
        align-self: flex-start !important;
    }
    .align-self-xl-end {
        -ms-flex-item-align: end !important;
        align-self: flex-end !important;
    }
    .align-self-xl-center {
        -ms-flex-item-align: center !important;
        align-self: center !important;
    }
    .align-self-xl-baseline {
        -ms-flex-item-align: baseline !important;
        align-self: baseline !important;
    }
    .align-self-xl-stretch {
        -ms-flex-item-align: stretch !important;
        align-self: stretch !important;
    }
}
.position-static {
    position: static !important;
}
.position-relative {
    position: relative !important;
}
.position-absolute {
    position: absolute !important;
}
.position-fixed {
    position: fixed !important;
}
.position-sticky {
    position: -webkit-sticky !important;
    position: sticky !important;
}
.fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}
.fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
}
@supports ((position: -webkit-sticky) or (position: sticky)) {
    .sticky-top {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020;
    }
}
.m-0 {
    margin: 0 !important;
}
.mt-0,
.my-0 {
    margin-top: 0 !important;
}
.mr-0,
.mx-0 {
    margin-right: 0 !important;
}
.mb-0,
.my-0 {
    margin-bottom: 0 !important;
}
.ml-0,
.mx-0 {
    margin-left: 0 !important;
}
.m-1 {
    margin: 0.25rem !important;
}
.mt-1,
.my-1 {
    margin-top: 0.25rem !important;
}
.mr-1,
.mx-1 {
    margin-right: 0.25rem !important;
}
.mb-1,
.my-1 {
    margin-bottom: 0.25rem !important;
}
.ml-1,
.mx-1 {
    margin-left: 0.25rem !important;
}
.m-2 {
    margin: 0.5rem !important;
}
.mt-2,
.my-2 {
    margin-top: 0.5rem !important;
}
.mr-2,
.mx-2 {
    margin-right: 0.5rem !important;
}
.mb-2,
.my-2 {
    margin-bottom: 0.5rem !important;
}
.ml-2,
.mx-2 {
    margin-left: 0.5rem !important;
}
.m-3 {
    margin: 1rem !important;
}
.mt-3,
.my-3 {
    margin-top: 1rem !important;
}
.mr-3,
.mx-3 {
    margin-right: 1rem !important;
}
.mb-3,
.my-3 {
    margin-bottom: 1rem !important;
}
.ml-3,
.mx-3 {
    margin-left: 1rem !important;
}
.m-4 {
    margin: 1.5rem !important;
}
.mt-4,
.my-4 {
    margin-top: 1.5rem !important;
}
.mr-4,
.mx-4 {
    margin-right: 1.5rem !important;
}
.mb-4,
.my-4 {
    margin-bottom: 1.5rem !important;
}
.ml-4,
.mx-4 {
    margin-left: 1.5rem !important;
}
.m-5 {
    margin: 3rem !important;
}
.mt-5,
.my-5 {
    margin-top: 3rem !important;
}
.mr-5,
.mx-5 {
    margin-right: 3rem !important;
}
.mb-5,
.my-5 {
    margin-bottom: 3rem !important;
}
.ml-5,
.mx-5 {
    margin-left: 3rem !important;
}
.p-0 {
    padding: 0 !important;
}
.pt-0,
.py-0 {
    padding-top: 0 !important;
}
.pr-0,
.px-0 {
    padding-right: 0 !important;
}
.pb-0,
.py-0 {
    padding-bottom: 0 !important;
}
.pl-0,
.px-0 {
    padding-left: 0 !important;
}
.p-1 {
    padding: 0.25rem !important;
}
.pt-1,
.py-1 {
    padding-top: 0.25rem !important;
}
.pr-1,
.px-1 {
    padding-right: 0.25rem !important;
}
.pb-1,
.py-1 {
    padding-bottom: 0.25rem !important;
}
.pl-1,
.px-1 {
    padding-left: 0.25rem !important;
}
.p-2 {
    padding: 0.5rem !important;
}
.pt-2,
.py-2 {
    padding-top: 0.5rem !important;
}
.pr-2,
.px-2 {
    padding-right: 0.5rem !important;
}
.pb-2,
.py-2 {
    padding-bottom: 0.5rem !important;
}
.pl-2,
.px-2 {
    padding-left: 0.5rem !important;
}
.p-3 {
    padding: 1rem !important;
}
.pt-3,
.py-3 {
    padding-top: 1rem !important;
}
.pr-3,
.px-3 {
    padding-right: 1rem !important;
}
.pb-3,
.py-3 {
    padding-bottom: 1rem !important;
}
.pl-3,
.px-3 {
    padding-left: 1rem !important;
}
.p-4 {
    padding: 1.5rem !important;
}
.pt-4,
.py-4 {
    padding-top: 1.5rem !important;
}
.pr-4,
.px-4 {
    padding-right: 1.5rem !important;
}
.pb-4,
.py-4 {
    padding-bottom: 1.5rem !important;
}
.pl-4,
.px-4 {
    padding-left: 1.5rem !important;
}
.p-5 {
    padding: 3rem !important;
}
.pt-5,
.py-5 {
    padding-top: 3rem !important;
}
.pr-5,
.px-5 {
    padding-right: 3rem !important;
}
.pb-5,
.py-5 {
    padding-bottom: 3rem !important;
}
.pl-5,
.px-5 {
    padding-left: 3rem !important;
}
.m-auto {
    margin: auto !important;
}
.mt-auto,
.my-auto {
    margin-top: auto !important;
}
.mr-auto,
.mx-auto {
    margin-right: auto !important;
}
.mb-auto,
.my-auto {
    margin-bottom: auto !important;
}
.ml-auto,
.mx-auto {
    margin-left: auto !important;
}
@media (min-width: 576px) {
    .m-sm-0 {
        margin: 0 !important;
    }
    .mt-sm-0,
    .my-sm-0 {
        margin-top: 0 !important;
    }
    .mr-sm-0,
    .mx-sm-0 {
        margin-right: 0 !important;
    }
    .mb-sm-0,
    .my-sm-0 {
        margin-bottom: 0 !important;
    }
    .ml-sm-0,
    .mx-sm-0 {
        margin-left: 0 !important;
    }
    .m-sm-1 {
        margin: 0.25rem !important;
    }
    .mt-sm-1,
    .my-sm-1 {
        margin-top: 0.25rem !important;
    }
    .mr-sm-1,
    .mx-sm-1 {
        margin-right: 0.25rem !important;
    }
    .mb-sm-1,
    .my-sm-1 {
        margin-bottom: 0.25rem !important;
    }
    .ml-sm-1,
    .mx-sm-1 {
        margin-left: 0.25rem !important;
    }
    .m-sm-2 {
        margin: 0.5rem !important;
    }
    .mt-sm-2,
    .my-sm-2 {
        margin-top: 0.5rem !important;
    }
    .mr-sm-2,
    .mx-sm-2 {
        margin-right: 0.5rem !important;
    }
    .mb-sm-2,
    .my-sm-2 {
        margin-bottom: 0.5rem !important;
    }
    .ml-sm-2,
    .mx-sm-2 {
        margin-left: 0.5rem !important;
    }
    .m-sm-3 {
        margin: 1rem !important;
    }
    .mt-sm-3,
    .my-sm-3 {
        margin-top: 1rem !important;
    }
    .mr-sm-3,
    .mx-sm-3 {
        margin-right: 1rem !important;
    }
    .mb-sm-3,
    .my-sm-3 {
        margin-bottom: 1rem !important;
    }
    .ml-sm-3,
    .mx-sm-3 {
        margin-left: 1rem !important;
    }
    .m-sm-4 {
        margin: 1.5rem !important;
    }
    .mt-sm-4,
    .my-sm-4 {
        margin-top: 1.5rem !important;
    }
    .mr-sm-4,
    .mx-sm-4 {
        margin-right: 1.5rem !important;
    }
    .mb-sm-4,
    .my-sm-4 {
        margin-bottom: 1.5rem !important;
    }
    .ml-sm-4,
    .mx-sm-4 {
        margin-left: 1.5rem !important;
    }
    .m-sm-5 {
        margin: 3rem !important;
    }
    .mt-sm-5,
    .my-sm-5 {
        margin-top: 3rem !important;
    }
    .mr-sm-5,
    .mx-sm-5 {
        margin-right: 3rem !important;
    }
    .mb-sm-5,
    .my-sm-5 {
        margin-bottom: 3rem !important;
    }
    .ml-sm-5,
    .mx-sm-5 {
        margin-left: 3rem !important;
    }
    .p-sm-0 {
        padding: 0 !important;
    }
    .pt-sm-0,
    .py-sm-0 {
        padding-top: 0 !important;
    }
    .pr-sm-0,
    .px-sm-0 {
        padding-right: 0 !important;
    }
    .pb-sm-0,
    .py-sm-0 {
        padding-bottom: 0 !important;
    }
    .pl-sm-0,
    .px-sm-0 {
        padding-left: 0 !important;
    }
    .p-sm-1 {
        padding: 0.25rem !important;
    }
    .pt-sm-1,
    .py-sm-1 {
        padding-top: 0.25rem !important;
    }
    .pr-sm-1,
    .px-sm-1 {
        padding-right: 0.25rem !important;
    }
    .pb-sm-1,
    .py-sm-1 {
        padding-bottom: 0.25rem !important;
    }
    .pl-sm-1,
    .px-sm-1 {
        padding-left: 0.25rem !important;
    }
    .p-sm-2 {
        padding: 0.5rem !important;
    }
    .pt-sm-2,
    .py-sm-2 {
        padding-top: 0.5rem !important;
    }
    .pr-sm-2,
    .px-sm-2 {
        padding-right: 0.5rem !important;
    }
    .pb-sm-2,
    .py-sm-2 {
        padding-bottom: 0.5rem !important;
    }
    .pl-sm-2,
    .px-sm-2 {
        padding-left: 0.5rem !important;
    }
    .p-sm-3 {
        padding: 1rem !important;
    }
    .pt-sm-3,
    .py-sm-3 {
        padding-top: 1rem !important;
    }
    .pr-sm-3,
    .px-sm-3 {
        padding-right: 1rem !important;
    }
    .pb-sm-3,
    .py-sm-3 {
        padding-bottom: 1rem !important;
    }
    .pl-sm-3,
    .px-sm-3 {
        padding-left: 1rem !important;
    }
    .p-sm-4 {
        padding: 1.5rem !important;
    }
    .pt-sm-4,
    .py-sm-4 {
        padding-top: 1.5rem !important;
    }
    .pr-sm-4,
    .px-sm-4 {
        padding-right: 1.5rem !important;
    }
    .pb-sm-4,
    .py-sm-4 {
        padding-bottom: 1.5rem !important;
    }
    .pl-sm-4,
    .px-sm-4 {
        padding-left: 1.5rem !important;
    }
    .p-sm-5 {
        padding: 3rem !important;
    }
    .pt-sm-5,
    .py-sm-5 {
        padding-top: 3rem !important;
    }
    .pr-sm-5,
    .px-sm-5 {
        padding-right: 3rem !important;
    }
    .pb-sm-5,
    .py-sm-5 {
        padding-bottom: 3rem !important;
    }
    .pl-sm-5,
    .px-sm-5 {
        padding-left: 3rem !important;
    }
    .m-sm-auto {
        margin: auto !important;
    }
    .mt-sm-auto,
    .my-sm-auto {
        margin-top: auto !important;
    }
    .mr-sm-auto,
    .mx-sm-auto {
        margin-right: auto !important;
    }
    .mb-sm-auto,
    .my-sm-auto {
        margin-bottom: auto !important;
    }
    .ml-sm-auto,
    .mx-sm-auto {
        margin-left: auto !important;
    }
}
@media (min-width: 768px) {
    .m-md-0 {
        margin: 0 !important;
    }
    .mt-md-0,
    .my-md-0 {
        margin-top: 0 !important;
    }
    .mr-md-0,
    .mx-md-0 {
        margin-right: 0 !important;
    }
    .mb-md-0,
    .my-md-0 {
        margin-bottom: 0 !important;
    }
    .ml-md-0,
    .mx-md-0 {
        margin-left: 0 !important;
    }
    .m-md-1 {
        margin: 0.25rem !important;
    }
    .mt-md-1,
    .my-md-1 {
        margin-top: 0.25rem !important;
    }
    .mr-md-1,
    .mx-md-1 {
        margin-right: 0.25rem !important;
    }
    .mb-md-1,
    .my-md-1 {
        margin-bottom: 0.25rem !important;
    }
    .ml-md-1,
    .mx-md-1 {
        margin-left: 0.25rem !important;
    }
    .m-md-2 {
        margin: 0.5rem !important;
    }
    .mt-md-2,
    .my-md-2 {
        margin-top: 0.5rem !important;
    }
    .mr-md-2,
    .mx-md-2 {
        margin-right: 0.5rem !important;
    }
    .mb-md-2,
    .my-md-2 {
        margin-bottom: 0.5rem !important;
    }
    .ml-md-2,
    .mx-md-2 {
        margin-left: 0.5rem !important;
    }
    .m-md-3 {
        margin: 1rem !important;
    }
    .mt-md-3,
    .my-md-3 {
        margin-top: 1rem !important;
    }
    .mr-md-3,
    .mx-md-3 {
        margin-right: 1rem !important;
    }
    .mb-md-3,
    .my-md-3 {
        margin-bottom: 1rem !important;
    }
    .ml-md-3,
    .mx-md-3 {
        margin-left: 1rem !important;
    }
    .m-md-4 {
        margin: 1.5rem !important;
    }
    .mt-md-4,
    .my-md-4 {
        margin-top: 1.5rem !important;
    }
    .mr-md-4,
    .mx-md-4 {
        margin-right: 1.5rem !important;
    }
    .mb-md-4,
    .my-md-4 {
        margin-bottom: 1.5rem !important;
    }
    .ml-md-4,
    .mx-md-4 {
        margin-left: 1.5rem !important;
    }
    .m-md-5 {
        margin: 3rem !important;
    }
    .mt-md-5,
    .my-md-5 {
        margin-top: 3rem !important;
    }
    .mr-md-5,
    .mx-md-5 {
        margin-right: 3rem !important;
    }
    .mb-md-5,
    .my-md-5 {
        margin-bottom: 3rem !important;
    }
    .ml-md-5,
    .mx-md-5 {
        margin-left: 3rem !important;
    }
    .p-md-0 {
        padding: 0 !important;
    }
    .pt-md-0,
    .py-md-0 {
        padding-top: 0 !important;
    }
    .pr-md-0,
    .px-md-0 {
        padding-right: 0 !important;
    }
    .pb-md-0,
    .py-md-0 {
        padding-bottom: 0 !important;
    }
    .pl-md-0,
    .px-md-0 {
        padding-left: 0 !important;
    }
    .p-md-1 {
        padding: 0.25rem !important;
    }
    .pt-md-1,
    .py-md-1 {
        padding-top: 0.25rem !important;
    }
    .pr-md-1,
    .px-md-1 {
        padding-right: 0.25rem !important;
    }
    .pb-md-1,
    .py-md-1 {
        padding-bottom: 0.25rem !important;
    }
    .pl-md-1,
    .px-md-1 {
        padding-left: 0.25rem !important;
    }
    .p-md-2 {
        padding: 0.5rem !important;
    }
    .pt-md-2,
    .py-md-2 {
        padding-top: 0.5rem !important;
    }
    .pr-md-2,
    .px-md-2 {
        padding-right: 0.5rem !important;
    }
    .pb-md-2,
    .py-md-2 {
        padding-bottom: 0.5rem !important;
    }
    .pl-md-2,
    .px-md-2 {
        padding-left: 0.5rem !important;
    }
    .p-md-3 {
        padding: 1rem !important;
    }
    .pt-md-3,
    .py-md-3 {
        padding-top: 1rem !important;
    }
    .pr-md-3,
    .px-md-3 {
        padding-right: 1rem !important;
    }
    .pb-md-3,
    .py-md-3 {
        padding-bottom: 1rem !important;
    }
    .pl-md-3,
    .px-md-3 {
        padding-left: 1rem !important;
    }
    .p-md-4 {
        padding: 1.5rem !important;
    }
    .pt-md-4,
    .py-md-4 {
        padding-top: 1.5rem !important;
    }
    .pr-md-4,
    .px-md-4 {
        padding-right: 1.5rem !important;
    }
    .pb-md-4,
    .py-md-4 {
        padding-bottom: 1.5rem !important;
    }
    .pl-md-4,
    .px-md-4 {
        padding-left: 1.5rem !important;
    }
    .p-md-5 {
        padding: 3rem !important;
    }
    .pt-md-5,
    .py-md-5 {
        padding-top: 3rem !important;
    }
    .pr-md-5,
    .px-md-5 {
        padding-right: 3rem !important;
    }
    .pb-md-5,
    .py-md-5 {
        padding-bottom: 3rem !important;
    }
    .pl-md-5,
    .px-md-5 {
        padding-left: 3rem !important;
    }
    .m-md-auto {
        margin: auto !important;
    }
    .mt-md-auto,
    .my-md-auto {
        margin-top: auto !important;
    }
    .mr-md-auto,
    .mx-md-auto {
        margin-right: auto !important;
    }
    .mb-md-auto,
    .my-md-auto {
        margin-bottom: auto !important;
    }
    .ml-md-auto,
    .mx-md-auto {
        margin-left: auto !important;
    }
}
@media (min-width: 992px) {
    .m-lg-0 {
        margin: 0 !important;
    }
    .mt-lg-0,
    .my-lg-0 {
        margin-top: 0 !important;
    }
    .mr-lg-0,
    .mx-lg-0 {
        margin-right: 0 !important;
    }
    .mb-lg-0,
    .my-lg-0 {
        margin-bottom: 0 !important;
    }
    .ml-lg-0,
    .mx-lg-0 {
        margin-left: 0 !important;
    }
    .m-lg-1 {
        margin: 0.25rem !important;
    }
    .mt-lg-1,
    .my-lg-1 {
        margin-top: 0.25rem !important;
    }
    .mr-lg-1,
    .mx-lg-1 {
        margin-right: 0.25rem !important;
    }
    .mb-lg-1,
    .my-lg-1 {
        margin-bottom: 0.25rem !important;
    }
    .ml-lg-1,
    .mx-lg-1 {
        margin-left: 0.25rem !important;
    }
    .m-lg-2 {
        margin: 0.5rem !important;
    }
    .mt-lg-2,
    .my-lg-2 {
        margin-top: 0.5rem !important;
    }
    .mr-lg-2,
    .mx-lg-2 {
        margin-right: 0.5rem !important;
    }
    .mb-lg-2,
    .my-lg-2 {
        margin-bottom: 0.5rem !important;
    }
    .ml-lg-2,
    .mx-lg-2 {
        margin-left: 0.5rem !important;
    }
    .m-lg-3 {
        margin: 1rem !important;
    }
    .mt-lg-3,
    .my-lg-3 {
        margin-top: 1rem !important;
    }
    .mr-lg-3,
    .mx-lg-3 {
        margin-right: 1rem !important;
    }
    .mb-lg-3,
    .my-lg-3 {
        margin-bottom: 1rem !important;
    }
    .ml-lg-3,
    .mx-lg-3 {
        margin-left: 1rem !important;
    }
    .m-lg-4 {
        margin: 1.5rem !important;
    }
    .mt-lg-4,
    .my-lg-4 {
        margin-top: 1.5rem !important;
    }
    .mr-lg-4,
    .mx-lg-4 {
        margin-right: 1.5rem !important;
    }
    .mb-lg-4,
    .my-lg-4 {
        margin-bottom: 1.5rem !important;
    }
    .ml-lg-4,
    .mx-lg-4 {
        margin-left: 1.5rem !important;
    }
    .m-lg-5 {
        margin: 3rem !important;
    }
    .mt-lg-5,
    .my-lg-5 {
        margin-top: 3rem !important;
    }
    .mr-lg-5,
    .mx-lg-5 {
        margin-right: 3rem !important;
    }
    .mb-lg-5,
    .my-lg-5 {
        margin-bottom: 3rem !important;
    }
    .ml-lg-5,
    .mx-lg-5 {
        margin-left: 3rem !important;
    }
    .p-lg-0 {
        padding: 0 !important;
    }
    .pt-lg-0,
    .py-lg-0 {
        padding-top: 0 !important;
    }
    .pr-lg-0,
    .px-lg-0 {
        padding-right: 0 !important;
    }
    .pb-lg-0,
    .py-lg-0 {
        padding-bottom: 0 !important;
    }
    .pl-lg-0,
    .px-lg-0 {
        padding-left: 0 !important;
    }
    .p-lg-1 {
        padding: 0.25rem !important;
    }
    .pt-lg-1,
    .py-lg-1 {
        padding-top: 0.25rem !important;
    }
    .pr-lg-1,
    .px-lg-1 {
        padding-right: 0.25rem !important;
    }
    .pb-lg-1,
    .py-lg-1 {
        padding-bottom: 0.25rem !important;
    }
    .pl-lg-1,
    .px-lg-1 {
        padding-left: 0.25rem !important;
    }
    .p-lg-2 {
        padding: 0.5rem !important;
    }
    .pt-lg-2,
    .py-lg-2 {
        padding-top: 0.5rem !important;
    }
    .pr-lg-2,
    .px-lg-2 {
        padding-right: 0.5rem !important;
    }
    .pb-lg-2,
    .py-lg-2 {
        padding-bottom: 0.5rem !important;
    }
    .pl-lg-2,
    .px-lg-2 {
        padding-left: 0.5rem !important;
    }
    .p-lg-3 {
        padding: 1rem !important;
    }
    .pt-lg-3,
    .py-lg-3 {
        padding-top: 1rem !important;
    }
    .pr-lg-3,
    .px-lg-3 {
        padding-right: 1rem !important;
    }
    .pb-lg-3,
    .py-lg-3 {
        padding-bottom: 1rem !important;
    }
    .pl-lg-3,
    .px-lg-3 {
        padding-left: 1rem !important;
    }
    .p-lg-4 {
        padding: 1.5rem !important;
    }
    .pt-lg-4,
    .py-lg-4 {
        padding-top: 1.5rem !important;
    }
    .pr-lg-4,
    .px-lg-4 {
        padding-right: 1.5rem !important;
    }
    .pb-lg-4,
    .py-lg-4 {
        padding-bottom: 1.5rem !important;
    }
    .pl-lg-4,
    .px-lg-4 {
        padding-left: 1.5rem !important;
    }
    .p-lg-5 {
        padding: 3rem !important;
    }
    .pt-lg-5,
    .py-lg-5 {
        padding-top: 3rem !important;
    }
    .pr-lg-5,
    .px-lg-5 {
        padding-right: 3rem !important;
    }
    .pb-lg-5,
    .py-lg-5 {
        padding-bottom: 3rem !important;
    }
    .pl-lg-5,
    .px-lg-5 {
        padding-left: 3rem !important;
    }
    .m-lg-auto {
        margin: auto !important;
    }
    .mt-lg-auto,
    .my-lg-auto {
        margin-top: auto !important;
    }
    .mr-lg-auto,
    .mx-lg-auto {
        margin-right: auto !important;
    }
    .mb-lg-auto,
    .my-lg-auto {
        margin-bottom: auto !important;
    }
    .ml-lg-auto,
    .mx-lg-auto {
        margin-left: auto !important;
    }
}
@media (min-width: 1200px) {
    .m-xl-0 {
        margin: 0 !important;
    }
    .mt-xl-0,
    .my-xl-0 {
        margin-top: 0 !important;
    }
    .mr-xl-0,
    .mx-xl-0 {
        margin-right: 0 !important;
    }
    .mb-xl-0,
    .my-xl-0 {
        margin-bottom: 0 !important;
    }
    .ml-xl-0,
    .mx-xl-0 {
        margin-left: 0 !important;
    }
    .m-xl-1 {
        margin: 0.25rem !important;
    }
    .mt-xl-1,
    .my-xl-1 {
        margin-top: 0.25rem !important;
    }
    .mr-xl-1,
    .mx-xl-1 {
        margin-right: 0.25rem !important;
    }
    .mb-xl-1,
    .my-xl-1 {
        margin-bottom: 0.25rem !important;
    }
    .ml-xl-1,
    .mx-xl-1 {
        margin-left: 0.25rem !important;
    }
    .m-xl-2 {
        margin: 0.5rem !important;
    }
    .mt-xl-2,
    .my-xl-2 {
        margin-top: 0.5rem !important;
    }
    .mr-xl-2,
    .mx-xl-2 {
        margin-right: 0.5rem !important;
    }
    .mb-xl-2,
    .my-xl-2 {
        margin-bottom: 0.5rem !important;
    }
    .ml-xl-2,
    .mx-xl-2 {
        margin-left: 0.5rem !important;
    }
    .m-xl-3 {
        margin: 1rem !important;
    }
    .mt-xl-3,
    .my-xl-3 {
        margin-top: 1rem !important;
    }
    .mr-xl-3,
    .mx-xl-3 {
        margin-right: 1rem !important;
    }
    .mb-xl-3,
    .my-xl-3 {
        margin-bottom: 1rem !important;
    }
    .ml-xl-3,
    .mx-xl-3 {
        margin-left: 1rem !important;
    }
    .m-xl-4 {
        margin: 1.5rem !important;
    }
    .mt-xl-4,
    .my-xl-4 {
        margin-top: 1.5rem !important;
    }
    .mr-xl-4,
    .mx-xl-4 {
        margin-right: 1.5rem !important;
    }
    .mb-xl-4,
    .my-xl-4 {
        margin-bottom: 1.5rem !important;
    }
    .ml-xl-4,
    .mx-xl-4 {
        margin-left: 1.5rem !important;
    }
    .m-xl-5 {
        margin: 3rem !important;
    }
    .mt-xl-5,
    .my-xl-5 {
        margin-top: 3rem !important;
    }
    .mr-xl-5,
    .mx-xl-5 {
        margin-right: 3rem !important;
    }
    .mb-xl-5,
    .my-xl-5 {
        margin-bottom: 3rem !important;
    }
    .ml-xl-5,
    .mx-xl-5 {
        margin-left: 3rem !important;
    }
    .p-xl-0 {
        padding: 0 !important;
    }
    .pt-xl-0,
    .py-xl-0 {
        padding-top: 0 !important;
    }
    .pr-xl-0,
    .px-xl-0 {
        padding-right: 0 !important;
    }
    .pb-xl-0,
    .py-xl-0 {
        padding-bottom: 0 !important;
    }
    .pl-xl-0,
    .px-xl-0 {
        padding-left: 0 !important;
    }
    .p-xl-1 {
        padding: 0.25rem !important;
    }
    .pt-xl-1,
    .py-xl-1 {
        padding-top: 0.25rem !important;
    }
    .pr-xl-1,
    .px-xl-1 {
        padding-right: 0.25rem !important;
    }
    .pb-xl-1,
    .py-xl-1 {
        padding-bottom: 0.25rem !important;
    }
    .pl-xl-1,
    .px-xl-1 {
        padding-left: 0.25rem !important;
    }
    .p-xl-2 {
        padding: 0.5rem !important;
    }
    .pt-xl-2,
    .py-xl-2 {
        padding-top: 0.5rem !important;
    }
    .pr-xl-2,
    .px-xl-2 {
        padding-right: 0.5rem !important;
    }
    .pb-xl-2,
    .py-xl-2 {
        padding-bottom: 0.5rem !important;
    }
    .pl-xl-2,
    .px-xl-2 {
        padding-left: 0.5rem !important;
    }
    .p-xl-3 {
        padding: 1rem !important;
    }
    .pt-xl-3,
    .py-xl-3 {
        padding-top: 1rem !important;
    }
    .pr-xl-3,
    .px-xl-3 {
        padding-right: 1rem !important;
    }
    .pb-xl-3,
    .py-xl-3 {
        padding-bottom: 1rem !important;
    }
    .pl-xl-3,
    .px-xl-3 {
        padding-left: 1rem !important;
    }
    .p-xl-4 {
        padding: 1.5rem !important;
    }
    .pt-xl-4,
    .py-xl-4 {
        padding-top: 1.5rem !important;
    }
    .pr-xl-4,
    .px-xl-4 {
        padding-right: 1.5rem !important;
    }
    .pb-xl-4,
    .py-xl-4 {
        padding-bottom: 1.5rem !important;
    }
    .pl-xl-4,
    .px-xl-4 {
        padding-left: 1.5rem !important;
    }
    .p-xl-5 {
        padding: 3rem !important;
    }
    .pt-xl-5,
    .py-xl-5 {
        padding-top: 3rem !important;
    }
    .pr-xl-5,
    .px-xl-5 {
        padding-right: 3rem !important;
    }
    .pb-xl-5,
    .py-xl-5 {
        padding-bottom: 3rem !important;
    }
    .pl-xl-5,
    .px-xl-5 {
        padding-left: 3rem !important;
    }
    .m-xl-auto {
        margin: auto !important;
    }
    .mt-xl-auto,
    .my-xl-auto {
        margin-top: auto !important;
    }
    .mr-xl-auto,
    .mx-xl-auto {
        margin-right: auto !important;
    }
    .mb-xl-auto,
    .my-xl-auto {
        margin-bottom: auto !important;
    }
    .ml-xl-auto,
    .mx-xl-auto {
        margin-left: auto !important;
    }
}
.visible {
    visibility: visible !important;
}
.invisible {
    visibility: hidden !important;
}
.btn {
    border-width: 1px;
    font-weight: 700;
}
.btn.btn-pink {
    background-color: transparent;
    border-color: #d0469f;
    color: #fff;
}
.btn.btn-pink:hover {
    background-color: #d0469f;
    border-color: #d0469f;
    color: #fff;
}
.btn.btn-pink:active {
    background-color: #c1318e;
    border-color: #c1318e;
    color: #fff;
}
.btn.btn-white {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
}
.btn.btn-white:hover {
    background-color: #fff;
    border-color: #fff;
    color: #002354;
}
.btn.btn-white:active {
    background-color: #ededed;
    border-color: #ededed;
    color: #002354;
}
.btn.btn-purple {
    background-color: #8a46d0;
    border-color: #8a46d0;
    color: #fff;
}
.btn.btn-purple:hover {
    background-color: #975ad5;
    color: #fff;
}
.btn.btn-purple:active {
    background-color: #7d33c9;
    color: #fff;
}
.btn.btn-purple-heart {
    background-color: #673ab7;
    color: #fff;
}
.btn.btn-purple-heart:hover {
    background-color: #8d4ffa;
}
.btn.btn-purple-heart:active {
    background-color: #5a33a1;
}
.btn-dashboard {
    padding-top: 6px;
    padding-bottom: 7px;
    border-radius: 2px;
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
}
.btn-dashboard:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
}
.btn-add-step {
    padding-top: 0;
    padding-bottom: 0;
    border: none;
}
.btn-add-step svg {
    fill: #ff56c3;
}
.btn-add-step:focus,
.btn-add-step:hover {
    color: #0065f5;
}
.btn-add-step:focus svg,
.btn-add-step:hover svg {
    fill: #ff78cf;
}
.btn-add-step:active svg {
    fill: #cf469e;
}
.btn-add-content-right {
    padding-left: 0;
    padding-right: 0;
}
.btn-add-content-right span {
    font-size: 12px;
}
.btn-mx-140 {
    max-width: 140px;
    padding-right: 0;
    padding-left: 0;
}
.btn-mx-130 {
    max-width: 130px;
}
.btn-mx-120 {
    max-width: 120px;
}
.btn-grey {
    background-color: #dfdfdf;
    color: #212121;
}
.btn-grey:focus,
.btn-grey:hover {
    background-color: #fff;
    color: #003581;
}
.btn-grey:active {
    background-color: #f2f2f2;
    color: #003581;
}
.btn-grey-dark {
    background-color: #929292;
    color: #fff;
}
.btn-grey-dark:focus,
.btn-grey-dark:hover {
    background-color: #a1a1a1;
    color: #fff;
}
.btn-grey-dark:active {
    background-color: #3d3d3d;
}
.btn-white-br {
    border-color: #fff;
    color: #fff;
}
.btn-white-br:focus,
.btn-white-br:hover {
    background-color: #fff;
    color: #003581;
}
.btn-white-br:active {
    background-color: #f2f2f2;
    color: #003581;
}
.btn-purple-heart {
    border-color: #673ab7;
    background-color: #673ab7;
    color: #fff;
}
.btn-purple-heart:focus,
.btn-purple-heart:hover {
    border-color: #8d4ffa;
    background-color: #8d4ffa;
}
.btn-purple-heart:active {
    border-color: #5a33a1;
    background-color: #5a33a1;
}
.btn-purple-heart-br {
    border-color: #673ab7;
    color: #673ab7;
}
.btn-purple-heart-br:focus,
.btn-purple-heart-br:hover {
    border-color: #8d4ffa;
    background-color: #8d4ffa;
    color: #fff;
}
.btn-purple-heart-br:active {
    background-color: #5a33a1;
    border-color: #5a33a1;
    color: #fff;
}
.btn-magento-krayola {
    background-color: #d0469f;
    color: #fff;
}
.btn-magento-krayola:focus,
.btn-magento-krayola:hover {
    background-color: #e64daf;
}
.btn-magento-krayola:active {
    background-color: #a6387f;
}
.btn-purple {
    background-color: #673ab7;
    color: #fff;
}
.btn-purple:focus,
.btn-purple:hover {
    background-color: #8d4ffa;
}
.btn-purple:active {
    background-color: #5a33a1;
}
.btn-magento-krayola-shadow {
    -webkit-box-shadow: 0 -2px 0 #882665 inset;
    box-shadow: 0 -2px 0 #882665 inset;
}
.btn-magento-krayola-shadow:focus,
.btn-magento-krayola-shadow:hover {
    -webkit-box-shadow: 0 -2px 0 #882665 inset;
    box-shadow: 0 -2px 0 #882665 inset;
}
.btn-blue-square {
    background-color: #0065f5;
    border-color: #0c63db;
}
.btn-blue-square:focus,
.btn-blue-square:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: #217dff;
    border-color: #0c63db;
}
.btn-blue-square:focus svg,
.btn-blue-square:hover svg {
    fill: #217dff;
}
.btn-blue-square:active {
    background-color: #004fbf;
    border-color: #0c63db;
}
.btn-blue-square:active svg {
    fill: #004fbf;
}
.btn-blue-square svg {
    fill: #0065f5;
}
.btn-favorit {
    width: 17px;
    height: 17px;
    padding: 0;
    border: none;
}
.btn-favorit svg {
    fill: transparent;
    stroke: #d0469f;
}
.btn-favorit:focus svg,
.btn-favorit:hover svg {
    fill: #d0469f;
}
.btn-favorit-active svg {
    fill: #d0469f;
}
.btn-favorit-grey {
    width: 17px;
    height: 17px;
    padding: 0;
    border: none;
}
.btn-favorit-grey svg {
    fill: transparent;
    stroke: #c4d9f5;
}
.btn-favorit-grey:focus svg,
.btn-favorit-grey:hover svg {
    fill: #c4d9f5;
}
.btn-favorit-grey-active svg {
    fill: #c4d9f5;
}
.btn-scope {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 1px 6px;
    border-radius: 100%;
    border: none;
    background-color: #c4d9f5;
}
.btn-scope svg {
    fill: #4473b7;
}
.btn-scope:focus,
.btn-scope:hover {
    background-color: #4473b7;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.btn-scope:focus svg,
.btn-scope:hover svg {
    fill: #c4d9f5;
}
.btn-scope-vertical {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
}
.btn-scope-vertical svg {
    fill: #4473b7;
}
.btn-scope-vertical:focus svg,
.btn-scope-vertical:hover svg {
    fill: #0065f5;
}
.btn-extra-file {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-right: 0;
    padding-left: 0;
    background-color: transparent;
    border-color: transparent;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #5c97eb;
}
.btn-extra-file:focus,
.btn-extra-file:hover {
    color: #5c97eb;
    text-decoration: underline;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.btn-extra-file svg {
    fill: #5c97eb;
}
.btn-link-img {
    position: relative;
    padding: 0;
}
.btn-link-img:focus,
.btn-link-img:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
}
.btn-link-img:focus::before,
.btn-link-img:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-box-shadow: 0 0 5px #212121 inset;
    box-shadow: 0 0 5px #212121 inset;
}
.btn-msg-action {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
}
.btn-msg-action:focus span,
.btn-msg-action:hover span {
    text-decoration: underline;
}
.btn-msg-action-blue {
    color: #73a3e4;
}
.btn-msg-action-blue svg {
    fill: #73a3e4;
}
.btn-msg-action-blue:active {
    color: #5a80b3;
}
.btn-msg-action-blue:active svg {
    fill: #5a80b3;
}
.btn-msg-action-pink {
    color: #d0469f;
}
.btn-msg-action-pink svg {
    fill: #d0469f;
}
.btn-msg-action-pink:active {
    color: #a6387f;
}
.btn-msg-action-pink:active svg {
    fill: #a6387f;
}
.btn-transaction {
    border-color: #673ab7;
}
.btn-transaction svg {
    fill: #673ab7;
}
.btn-transaction:focus,
.btn-transaction:hover {
    background-color: #673ab7;
}
.btn-transaction:focus svg,
.btn-transaction:hover svg {
    fill: #fff;
}
.btn-transaction:active {
    background-color: #5a33a1;
}
.btn-transaction:active svg {
    fill: #fff;
}
.btn-search-filter {
    position: relative;
    text-align: left;
}
.btn-search-filter:focus,
.btn-search-filter:hover {
    outline: 0;
    color: #003581;
}
.btn-search-filter:focus::before,
.btn-search-filter:hover::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    display: block;
    height: calc(100% + 2px);
    width: 3px;
    background-color: #e986c6;
}
.btn-contract {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 36px;
    flex: 0 0 36px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 36px;
    height: 36px;
    padding: 0;
    background-color: #ff56c3;
    border-radius: 100%;
}
.btn-contract:focus,
.btn-contract:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: #ff78cf;
}
.btn-contract:active {
    background-color: #cf469e;
}
.btn-contract svg {
    fill: #fff;
}
.btn-square {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 36px;
    flex: 0 0 36px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border-radius: 2px;
}
.btn-chevron svg {
    fill: #929292;
}
.btn-chevron:focus svg,
.btn-chevron:hover svg {
    fill: #a1a1a1;
}
.btn-chevron:active svg {
    fill: #3d3d3d;
}
.btn-attachment {
    position: relative;
    background-color: transparent;
}
.btn-attachment:focus,
.btn-attachment:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
}
.btn-attachment:focus svg,
.btn-attachment:hover svg {
    fill: #004ab5;
}
.btn-attachment:active svg {
    fill: #091e54;
}
.btn-attachment input[type='file'] {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 0;
}
.btn-attachment svg {
    fill: #003581;
}
.btn-attachment-disable:focus svg,
.btn-attachment-disable:hover svg {
    fill: #ccc;
}
.btn-attachment-disable:active svg {
    fill: #ccc;
}
.btn-attachment-disable svg {
    fill: #ccc;
}
.btn-group-vertical-shadow-white {
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid #dde1e6;
    -webkit-box-shadow: 0 1px 2px rgba(92, 151, 235, 0.25);
    box-shadow: 0 1px 2px rgba(92, 151, 235, 0.25);
}
.btn-group-vertical-shadow-white button {
    border-top: 1px solid #c4d9f5;
    padding-top: 10px;
    padding-bottom: 10px;
}
.btn-group-vertical-shadow-white button:first-child {
    border: none;
}
.progress {
    height: 20px;
    border-radius: 2px;
}
.progress-bar {
    background: #a22f79;
    background: -webkit-gradient(linear, left top, right top, from(#a22f79), to(#de75b9));
    background: linear-gradient(to right, #a22f79 0, #de75b9 100%);
}
.modal-w-310 {
    max-width: 310px;
}
.modal-w-400 {
    max-width: 400px;
}
.modal-w-693 {
    max-width: 693px;
}
.modal-header {
    padding: 35px 30px 20px 30px;
}
.modal-title {
    font-size: 18px;
    font-weight: 700;
}
.modal-body {
    padding: 0 30px 15px 30px;
}
.modal-scroll-y {
    max-height: 485px;
    overflow-y: auto;
}
.modal-item {
    padding: 25px 25px 22px 20px;
    border: 1px solid #d9d9d9;
}
.row-16 {
    margin-left: -8px;
    margin-right: -8px;
}
.row-16 > div {
    padding-right: 8px;
    padding-left: 8px;
}
.row-25 {
    margin-left: -25px;
    margin-right: -25px;
}
.row-25 > div {
    padding-right: 25px;
    padding-left: 25px;
}
.form-control-dashboard {
    padding-top: 7px;
    padding-bottom: 8px;
    border-radius: 2px;
    font-size: 14px;
    line-height: normal;
    color: #929292;
    border-color: #6da4f2;
}
.form-control-dashboard:hover {
    border-color: #4473b7;
    color: #929292;
}
.form-control-dashboard:focus {
    border-color: #0065f5;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #0c63db;
}
.form-control-disable,
.form-control-disable:disabled,
.form-control-disable[readonly] {
    background-color: #c7b3eb;
    border-color: #c7b3eb;
    color: #212121;
}
.form-control-disable:disabled:focus,
.form-control-disable:disabled:hover,
.form-control-disable:focus,
.form-control-disable:hover,
.form-control-disable[readonly]:focus,
.form-control-disable[readonly]:hover {
    border-color: #a985eb;
    background-color: #c7b3eb;
    color: #212121;
}
.form-control-select {
    height: initial !important;
    padding-top: 6px;
    padding-bottom: 7px;
    border-radius: 2px;
    border-color: #6da4f2;
    font-size: 14px;
    font-weight: 400;
    color: #003581;
}
.form-control-select:focus,
.form-control-select:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #4473b7;
    color: #003581;
}
.form-control-select:active {
    border-color: #0065f5;
}
.form-control-calendar {
    background: url(../images/search-more__calendar.svg) no-repeat right 10px center;
}
.form-control-grey-br {
    border-radius: 2px;
    border: 1px solid #c4d9f5;
    color: #818080;
}
.form-control-error {
    color: #d0469f;
    border-color: #d0469f;
}
.form-control-blue {
    background-color: #dce8f8;
    border-color: #dce8f8;
}
.form-control-project span {
    max-width: 210px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #212121;
}
.form-control-project a {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    color: #212121;
}
.form-control-project a:focus,
.form-control-project a:hover {
    outline: 0;
    color: #212121;
    text-decoration: underline;
}
.description-feedback {
    padding: 8px 0 0 15px;
    font-size: 12px;
    font-weight: 400;
    color: #929292;
}
button {
    cursor: pointer;
}
.form-control {
    font-weight: 300;
}
.form-control-label {
    font-size: 1.125rem;
    font-weight: 300;
}
.form-tooltip {
    display: inline-block;
    padding: 0 5px;
}
.form-text {
    font-weight: 300;
}
.form-check-label {
    position: relative;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 300;
}
.form-check-label .pseudo-checkbox {
    content: '';
    position: absolute;
    left: -1.25rem;
    top: 2px;
    width: 18px;
    height: 18px;
    border: 1px solid #6ea2ec;
}
.form-check-label .form-check-input:checked + span.pseudo-checkbox {
    background: url(../images/check.png) no-repeat center center;
}
.form-check-label .form-check-input {
    position: absolute;
    display: none;
}
.form-check-label .form-check-input:only-child {
    position: static;
}
.form-control + span {
    color: #0065f5;
}
.form-control.invalid,
.form-control.invalid:focus {
    border-color: #d0469f;
    color: #d0469f;
    -webkit-box-shadow: 0 none;
    box-shadow: 0 none;
}
.form-control.invalid + small {
    color: #d0469f;
}
.form-control.valid,
.form-control.valid:focus {
    border-color: #66d3ae;
    color: #66d3ae;
    -webkit-box-shadow: 0 none;
    box-shadow: 0 none;
}
.form-control.valid + small {
    color: #66d3ae;
}
.form-currency {
    font-size: 12px;
    font-weight: 400;
    color: #929292;
    text-transform: uppercase;
}
.form-control + .form-currency {
    color: #929292;
}
.form-control + .form-currency-white {
    color: #ebe6f6;
}
.form-control + .form-currency-blue {
    color: #0065f5;
}
.position-right {
    position: absolute;
    top: 0;
    right: 15px;
}
.text-center {
    text-align: center;
}
.text-right {
    text-align: right;
}
.text-size-12 {
    font-size: 12px;
}
.text-size-14 {
    font-size: 14px;
    font-weight: 400;
}
.text-size-16 {
    font-size: 16px;
}
.text-size-18 {
    font-size: 18px;
    font-weight: 400;
}
.text-color-grey-1 {
    color: #3d3d3d;
}
.text-color-grey-2 {
    color: #212121;
}
.text-color-grey-3 {
    color: #929292;
}
.text-color-grey-4 {
    color: #3d3d3d;
}
.text-slowly-pink {
    color: #ebe6f6;
}
.text-color-blue-1 {
    color: #033071;
}
.text-color-blue-2 {
    color: #0065f5;
}
.text-color-blue-3 {
    color: #003581;
}
.text-weight-400 {
    font-weight: 400;
}
.text-weight-600 {
    font-weight: 600;
}
.text-weight-700 {
    font-weight: 700;
}
.text-uppercase {
    text-transform: uppercase;
}
.w-50 {
    width: 50%;
}
.w-100 {
    width: 100%;
}
.h-100 {
    height: 100%;
}
.pink-marker .pink-marker__item {
    position: relative;
    padding-left: 15px;
}
.pink-marker .pink-marker__item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: #d0469f;
}
ul.pink-marker {
    list-style: none;
}
.svg-icon {
    display: inline-block;
    vertical-align: middle;
}
.user-img {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40px;
    flex: 0 0 40px;
    max-width: 40px;
    width: 100%;
    height: auto;
    border-radius: 100%;
}
.checkbox {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.checkbox input[type='checkbox'] {
    position: absolute;
    width: 0;
    height: 0;
    font-size: 0;
    opacity: 0;
}
.checkbox__custom {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 15px;
    height: 15px;
    border-radius: 2px;
    border: 1px solid #73a3e4;
}
.checkbox__custom:focus,
.checkbox__custom:hover {
    border-color: #0065f5;
}
.checkbox__custom:focus svg,
.checkbox__custom:hover svg {
    fill: #0065f5;
}
.checkbox__custom svg {
    display: none;
    fill: #73a3e4;
}
.checkbox__custom--circle {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    border: 1px solid #d0469f;
}
.checkbox__custom--circle:focus,
.checkbox__custom--circle:hover {
    border-color: #a6387f;
}
.checkbox__custom--circle:focus svg,
.checkbox__custom--circle:hover svg {
    fill: #fff;
}
.checkbox__custom--circle svg {
    display: none;
    fill: #fff;
}
input[type='checkbox']:checked + .checkbox__custom svg {
    display: block;
}
input[type='checkbox']:checked + .checkbox__custom--circle {
    background-color: #d0469f;
}
input[type='checkbox']:focus + .checkbox__custom {
    border-color: #0065f5;
}
input[type='checkbox']:focus + .checkbox__custom svg {
    fill: #0065f5;
}
input[type='checkbox']:focus + .checkbox__custom--circle {
    border-color: #a6387f;
}
input[type='checkbox']:focus + .checkbox__custom--circle svg {
    fill: #fff;
}
.radio-input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.radio-input:focus + .custom-radio-input--pink::before {
    border-color: #a6387f;
}
.radio-input:checked + .custom-radio-input--pink::after {
    background-color: #e986c6;
}
.custom-radio-input {
    position: relative;
    margin: 0 0 15px 0;
    cursor: pointer;
    line-height: 14px;
}
.custom-radio-input::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 14px;
    height: 14px;
    margin: 0 5px 0 0;
    border-width: 1px;
    border-style: solid;
    border-radius: 100%;
}
.custom-radio-input span {
    display: inline-block;
    vertical-align: middle;
}
.custom-radio-input--pink::before {
    border-color: #e986c6;
}
.radio-input:checked + .custom-radio-input::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 3px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
}
.custom-file {
    position: relative;
}
.file-input {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
}
.file-input:focus + .custom-file-input::before,
.file-input:hover + .custom-file-input::before {
    background-color: #4d4d4d;
}
.file-input:active + .custom-file-input::before {
    background-color: #1a1a1a;
}
.custom-file-input {
    position: relative;
    margin: 0;
}
.custom-file-input::before {
    content: 'Выбрать файл';
    display: flex-inline;
    margin: 0 8px 0 0;
    padding: 9px 30px;
    background-color: #565656;
    border-radius: 2px;
    font-size: 14px;
    color: #fff;
}
label {
    font-size: 14px;
    font-weight: 400;
    color: #212121;
}
.required {
    font-size: 14px;
    font-weight: 400;
    color: #d0469f;
}
.btn-address-copy {
    border: none;
    background-color: transparent;
}
.border-0 {
    border: none;
}
.border-top-0 {
    border-top: 0;
}
.border-bottom-0 {
    border-bottom: 0;
}
.border-bottom-1-grey {
    border-bottom: 1px solid #dfdfdf;
}
.border-left-1-grey {
    border-left: 1px solid #dfdfdf;
}
.border-bottom-1-pink {
    border-bottom: 1px solid #e986c6;
}
.bg-purple-heart {
    background-color: #673ab7;
}
.bg-grey {
    background-color: #dfdfdf;
}
.shadow-top {
    -webkit-box-shadow: 0 3px 6px #d9d9d9 inset;
    box-shadow: 0 3px 6px #d9d9d9 inset;
}
.col-right {
    margin-left: auto;
}
.search-contacts {
    margin: 0 0 15px 0;
    padding: 12px 15px;
    background: #fff;
    border-radius: 0 0 2px 2px;
    border: 1px solid #dde1e6;
}
.search-input-icon {
    padding-left: 43px;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 390' fill='%23b3cbec'%3e%3cpath d='M282 235.5c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3C69.6 1.5 1.5 69.7 1.5 153.8s68.1 152.3 152.1 152.3c30.5 0 58.9-9 82.7-24.4l6.9-4.8 108.6 108.6 33.7-34.3L277 242.6l5-7.1zM238.9 68.7c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85-52.9 35.2-85 35.2-62.3-12.5-85-35.2-35.2-52.9-35.2-85 12.5-62.3 35.2-85 52.9-35.2 85-35.2 62.3 12.5 85 35.2z'/%3e%3c/svg%3e");
    background-size: 18px 18px;
    background-repeat: no-repeat;
    background-position: 15px center;
}
.search-input-icon:focus,
.search-input-icon:hover {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 390' fill='%230c63db'%3e%3cpath d='M282 235.5c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3C69.6 1.5 1.5 69.7 1.5 153.8s68.1 152.3 152.1 152.3c30.5 0 58.9-9 82.7-24.4l6.9-4.8 108.6 108.6 33.7-34.3L277 242.6l5-7.1zM238.9 68.7c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85-52.9 35.2-85 35.2-62.3-12.5-85-35.2-35.2-52.9-35.2-85 12.5-62.3 35.2-85 52.9-35.2 85-35.2 62.3 12.5 85 35.2z'/%3e%3c/svg%3e");
}
.tags {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -2px;
    padding: 0;
    list-style: none;
}
.tags__item {
    padding: 0 2px;
}
.tags__link {
    font-size: 13px;
    font-weight: 400;
    color: #0c63db;
}
.tags__link:focus,
.tags__link:hover {
    outline: 0;
    color: #031537;
    text-decoration: underline;
}
.tags--blue-bg .tags__link {
    display: block;
    padding: 5px 6px 4px 6px;
    background-color: #c4d9f5;
    -webkit-box-shadow: 0 1px 0 #b9d1f1;
    box-shadow: 0 1px 0 #b9d1f1;
    font-size: 12px;
    color: #003581;
}
.tags--blue-bg .tags__link:focus,
.tags--blue-bg .tags__link:hover {
    background-color: #bacee8;
    text-decoration: none;
}
.tags--blue-bg .tags__link:active {
    background-color: #99a9bf;
}
.tags--color-grey .tags__link {
    padding-right: 15px;
    padding-left: 15px;
    font-size: 14px;
    font-weight: 400;
    color: #212121;
}
.rating {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.rating__title {
    margin: 0 10px 0 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    color: #212121;
}
.rating__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
}
.rating__item {
    margin: 0 3px 0 0;
}
.rating__icon--pink {
    fill: #d0469f;
}
.rating__icon--blue {
    fill: #0065f5;
}
.rating__icon--blank {
    fill: #dfdfdf;
}
.scope__btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    border: none;
    background-color: #c4d9f5;
}
.scope__btn:focus {
    outline: 0;
}
.scope__icon {
    fill: #4473b7;
}
.step {
    padding: 9px 15px;
    border-radius: 2px;
    background-color: #dae6f5;
}
.step--disable {
    background-color: #c4c4c4;
}
.step__caption {
    margin: 0 9px 0 0;
    font-size: 14px;
    line-height: normal;
    font-weight: 700;
    color: #212121;
}
.step__qty {
    margin: 0 5px 0 0;
    font-size: 14px;
    line-height: normal;
    font-weight: 700;
    color: #003581;
}
.step__qty--disable {
    color: #3d3d3d;
}
.step__currency {
    font-size: 12px;
    line-height: normal;
    font-weight: 400;
    text-transform: uppercase;
    color: #73a3e4;
}
.step__currency--disable {
    color: #929292;
}
.step__date {
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    color: #212121;
}
.content__right-title {
    font-size: 16px;
    font-weight: 600;
}
.content__right-title--blue {
    color: #003581;
}
.content__right-title--grey {
    color: #212121;
}
.dashboard {
    min-height: 100vh;
    background-color: #fcfcfc;
}
.content-inner,
.dashboard .page-content,
.dashboard .page-content > .container,
.dashboard .page-content > .container > .row {
    min-height: 100vh;
}
.sidebar {
    height: 100%;
    -webkit-box-shadow: 0 0 65px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 65px rgba(0, 0, 0, 0.05);
    border-radius: 0 0 2px 2px;
    background-color: #edf0f5;
    display: flex;
    flex-direction: column;
}
.brand {
    padding: 22px 0 22px 0;
    border-bottom: 1px solid #dbdee3;
}
.brand__logo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 0 11px 0;
    text-decoration: none;
}
.brand__logo:focus,
.brand__logo:hover {
    text-decoration: none;
    outline: 0;
}
.brand__logo:focus .brand__logo-name,
.brand__logo:hover .brand__logo-name {
    fill: #003f99;
}
.brand__logo:focus .brand__logo-caption,
.brand__logo:hover .brand__logo-caption {
    color: #003f99;
}
.brand__logo-name {
    margin: 0 5px 0 0;
    fill: #091e54;
}
.brand__logo-caption {
    margin: 0;
    font-family: Montserrat, sans-serif;
    font-size: 26px;
    line-height: normal;
    font-weight: 600;
    text-transform: uppercase;
    color: #091e54;
}
.brand__logo-description {
    margin: 0 0 25px 0;
    font-size: 12px;
    font-weight: 400;
    color: #888a8c;
    text-align: center;
}
.notifications {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 19px 15px 18px 15px;
    background-color: #edf0f5;
    border-bottom: 1px solid #dbdee3;
}
.notifications__figure {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin: 0 0 16px 0;
    background-color: #99a9bf;
    border-radius: 100%;
}
.notifications__figure--active::after {
    content: '';
    position: absolute;
    top: 4px;
    right: 8px;
    width: 8px;
    height: 8px;
    background-color: #d0469f;
    border-radius: 100%;
}
.notifications__icon {
    fill: #fff;
}
.notifications__user {
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
}
.notifications__user:focus,
.notifications__user:hover {
    text-decoration: underline;
    outline: 0;
}
.navbar__menu {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
}
.navbar__menu-item {
    position: relative;
    border-bottom: 1px solid #dbdee3;
}
.navbar__menu-link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 17px 10px 17px 25px;
    background-repeat: no-repeat;
    background-position: 25px center;
    font-size: 16px;
    color: #000000;
    font-weight: 300;
    cursor: pointer;
}
.navbar__menu-link:focus,
.navbar__menu-link:hover {
    color: #0044cc;
    text-decoration: none;
    outline: 0;
}
.navbar__menu-link:focus::before,
.navbar__menu-link:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #0044cc;
}
.navbar__menu-link:focus .navbar__menu-icon,
.navbar__menu-link:hover .navbar__menu-icon {
    fill: #0044cc;
}
.navbar__menu-link--active {
    color: #fff;
    text-decoration: none;
    outline: 0;
}
.navbar__menu-link__text {
    color: #000;
}
.navbar__menu-link__text:focus,
.navbar__menu-link__text:hover {
    color: #0044cc;
}
.navbar__menu-link--active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #0044cc;
}
.navbar__menu-link--active .navbar__menu-icon {
    fill: #0044cc;
}
.navbar__menu-icon-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-width: 30px;
}
.navbar__menu-icon {
    fill: #343e50;
}
.navbar__menu-icon--exit {
    stroke: #343e50;
}
.navbar__menu-item--active .navbar__menu-icon--exit,
.navbar__menu-link:hover .navbar__menu-icon--exit {
    stroke: #343e50;
}
.navbar__menu-badge {
    margin-left: auto;
    padding: 4px 11px 3px 11px;
    border-radius: 13px;
    background-color: #e986c6;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
}
.layout__sidebar-overlay {
    z-index: 600;
}
.about__links {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
    padding: 0 0 22px 22px;
}
.about__links-item {
    text-decoration: none;
    color: #484848;
}
.about__links-item:not(:last-of-type) {
    margin-bottom: 10px;
}
.about__links-item:focus,
.about__links-item:hover {
    text-decoration: underline;
    color: #484848;
}
.nav-pills .nav-item {
    border-left: 1px solid #316adc;
}
.nav-pills .nav-item:first-child {
    border: none;
}
.nav-pills .nav-link-content {
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #04c;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #7ca7fc;
}
.nav-pills .nav-link-content:focus,
.nav-pills .nav-link-content:hover {
    background-color: #004ce3;
    outline: 0;
}
.nav-pills .nav-link-content.active {
    background-color: #04c;
    -webkit-box-shadow: 0 -5px 0 #e986c6 inset;
    box-shadow: 0 -5px 0 #e986c6 inset;
}
.rounded-right {
    border-radius: 0 2px 2px 0;
}
.rounded-left {
    border-radius: 2px 0 0 2px;
}
.top-line {
    background-color: #04c;
}
.top-line__block {
    padding: 15px 10px 0 15px;
    border-right: 1px solid #1353d0;
}
.top-line__block--customer {
    padding-top: 25px;
}
.top-line__block--customer .top-line__title {
    margin-bottom: 25px;
}
.top-line__btn {
    padding-top: 8px;
    padding-bottom: 9px;
}
.top-line__block-bottom {
    margin-right: -10px;
    margin-left: -15px;
    padding: 10px 10px 10px 15px;
    background-color: #004ade;
}
.top-line__title {
    display: inline-block;
    margin: 0 0 15px 0;
    padding: 0 37px 0 0;
    background: url(../images/top-line__title--icon-arrow.svg) no-repeat right center;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
}
.top-line__title:focus,
.top-line__title:hover {
    color: #fff;
    text-decoration: underline;
    outline: 0;
}
.top-line__total {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    color: #dae6f5;
}
.content__box {
    padding: 10px;
    border-radius: 2px 2px 0 0;
    border: 1px solid #dde1e6;
    background-color: #fff;
}
.content__sub-title {
    font-size: 18px;
    font-weight: 700;
    color: #212121;
}
.content__box--p-15 {
    padding: 15px;
}
.content__box--inner-job {
    padding: 20px 25px;
}
.content__box-caption {
    font-size: 16px;
    font-weight: 700;
    color: #212121;
}
.content__box-bailee {
    font-size: 14px;
    font-weight: 700;
    color: #033071;
}
.content__box-bailee:focus,
.content__box-bailee:hover {
    outline: 0;
    color: #031537;
    text-decoration: underline;
}
.content__box-social-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    max-width: 46px;
}
.content__box-social-icon svg {
    fill: #0c63db;
}
.content__article {
    padding: 30px 25px;
    border-radius: 2px;
    border: 1px solid #dde1e6;
    background-color: #fff;
}
.content__article p {
    margin: 0 0 14px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #212121;
}
.content__article .content__description-paragraph {
    margin: 0 0 25px 0;
}
.content__article a {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #0c63db;
}
.content__article a:focus,
.content__article a:hover {
    text-decoration: underline;
    outline: 0;
}
.content__caption {
    margin: 0 0 15px 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    color: #212121;
}
.content__num-list {
    padding: 0;
    list-style: none;
    counter-reset: item;
}
.content__num-item {
    margin: 0 0 14px 0;
}
.content__num-item p {
    margin: 0;
}
.content__num-item:before {
    display: inline-block;
    content: counter(item) '. ';
    counter-increment: item;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    color: #003581;
}
.content__num-item p {
    display: inline-block;
    padding-left: 3px;
}
.content__num-item--copy {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.address-copy {
    margin: 0 0 0 10px;
    fill: #003581;
    cursor: pointer;
}
.address-copy:focus,
.address-copy:hover {
    fill: #0c63db;
    outline: 0;
}
.content__code-field {
    display: block;
    max-width: 376px;
    width: 100%;
    margin: 14px 0 0 0;
    padding: 10px;
    border-radius: 2px;
    background-color: #f2f2f2;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #003581;
}
.content__title {
    margin: 0 0 11px 0;
    font-size: 18px;
    font-weight: 700;
    color: #212121;
}
`

export default GlobalStyle
