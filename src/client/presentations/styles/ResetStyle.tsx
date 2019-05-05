import * as styled from 'styled-components';

export const ResetStyle = styled.createGlobalStyle`
  html,
  body,
  section,
  header,
  footer,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  span,
  ul,
  li,
  label,
  input,
  textarea,
  form,
  nav,
  hr,
  code,
  select,
  button,
  table,
  thead,
  tbody,
  tr,
  th,
  td,
  small,
  img,
  i {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    border-radius: 0;
    font-weight: inherit;
    font-style: normal;
    font-family: inherit;
    vertical-align: baseline;
    -webkit-appearance: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  nav,
  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  table,
  th,
  td {
    border: none;
  }

  img {
    vertical-align: top;
    height: auto;
  }

  input,
  textarea,
  button {
    font-size: inherit;
    color: inherit;
  }
`;
