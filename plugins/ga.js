/* eslint-disable */
export default ({ app }) => {
  if (process.env.environment !== 'prod') return

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-CVKRSXE7DB');
}