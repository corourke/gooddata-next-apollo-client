import Head from 'next/head'

export default ({ children }) => (
  <main>
      <Head>
          <title>GoodData Javascript</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
      </Head>
    {children}
    <style jsx global>{`
      * {
        font-family: "Open Sans", Lato;
      }
      body {
        margin: 0;
        padding: 0px 0px;
      }
    `}</style>
  </main>
)
