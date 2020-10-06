import {updateElement} from "./base";

let count = 0;

const vdom = () => (
  <div id="_Q5" style="border: 1px solid red;">
    <div style="text-align: center" onClick={addCount}>
      hello {count}
    </div>
  </div>
)

const content = document.querySelector('#content');
let oldDom = vdom()
updateElement(content, oldDom)

function addCount() {
  count ++;
  updateElement(content, vdom(), oldDom)
}