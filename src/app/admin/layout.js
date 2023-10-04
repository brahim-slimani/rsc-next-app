export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section>Admin header | &nbsp;
          <span><a href="/home">Home</a></span>&nbsp;
          <span><a href="/dashboard">Dashboard</a></span>&nbsp;
          <span><a href="/admin">Admin</a></span>&nbsp;
        </section>
        <br />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
