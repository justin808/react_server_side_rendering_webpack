# Server Rendering with ReactJs, Webpack, and Rails

SPIKE with Samnang and Justin on making React server render with Webpack!

# Setup:
1. bundle
2. cd client && npm i
3. $(npm bin)/webpack -w
4. open another terminal and start rails


# Notes:
1. You can mark the globals to export in one of 2 ways:
   a. Use global.Something = Something (see Global.js)
   b. Declare in webpack config file
2. models/execjs_renderer changes often require a server restart. However, changing the contents 
   of the javascript file don't seem matter, so long as webpack recompiles it.

# References
1. [Charlie Marsh's article "Rendering React Components on the Server"](http://www.crmarsh.com/react-ssr/)
2. [Node globals](https://nodejs.org/api/globals.html#globals_global)
