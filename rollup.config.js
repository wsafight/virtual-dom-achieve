
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      presets: [[
        "env",
        {
          module: false
        }
      ]],
      plugins: [
        ['transform-react-jsx', {
          'pragma': 'vnode'
        }]
      ]
    })
  ]
}