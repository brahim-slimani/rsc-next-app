import { NextResponse } from "next/server"

export default midlleware = (req) => {
    return NextResponse.redirect(new URL('/home', req.url))
}

export const config = {
    matcher : '/admin/users/:path*'
}

// Midlleware is more useful to intercept requests (manipulating cookies, headers like checking bearer tokens...), as well secure routes based authentication..