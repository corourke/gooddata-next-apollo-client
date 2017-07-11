export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        font-family: Menlo, Monaco;
      }
      body {
        margin: 0;
        padding: 0px 50px;
      }
    `}</style>
  </main>
)
