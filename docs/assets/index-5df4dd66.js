(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();let f;const b=new Uint8Array(16);function C(){if(!f&&(f=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!f))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(b)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function E(e,t=0){return r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]}const v=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),L={randomUUID:v};function P(e,t,i){if(L.randomUUID&&!t&&!e)return L.randomUUID();e=e||{};const d=e.random||(e.rng||C)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=d[o];return t}return E(d)}class T{constructor(t){this.id=P(),this.description=t,this.done=!1,this.createdAt=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[new T("Comprar pan"),new T("Hacer el almuerzo"),new T("Ir al gimnasio")],filter:a.All},A=()=>{S(),console.log("initStore 🥑")},S=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},w=e=>{localStorage.setItem("state",JSON.stringify(l))},I=(e=a.All)=>{switch(e){case a.All:return[...l.todos];case a.Completed:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid!`)}},U=e=>{if(!e)throw new Error("Description is required");l.todos.push(new T(e)),w()},D=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),w()},q=e=>{l.todos=l.todos.filter(t=>t.id!==e),w()},F=()=>{l.todos=l.todos.filter(e=>!e.done),w()},M=(e=a.All)=>{l.filter=e},x=()=>l.filter,c={addTodo:U,deleteCompleted:F,deleteTodo:q,getCurrentFilter:x,getTodos:I,initStore:A,loadStore:S,setFilter:M,toggleTodo:D},O=`<section class="todoapp">\r
  <header class="header">\r
    <h1>Tareas</h1>\r
    <input\r
      id="new-todo-input"\r
      class="new-todo"\r
      placeholder="¿Qué necesita ser hecho?"\r
      autofocus\r
    />\r
  </header>\r
\r
  <section class="main">\r
    <input id="toggle-all" class="toggle-all" type="checkbox" />\r
    <label for="toggle-all">Mark all as complete</label>\r
    <ul class="todo-list"></ul>\r
  </section>\r
\r
  <footer class="footer">\r
    <span class="todo-count"\r
      ><strong id="pending-count">0</strong> pendiente(s)</span\r
    >\r
    <ul class="filters">\r
      <li>\r
        <a class="filtro" class="selected" href="#/">Todos</a>\r
      </li>\r
      <li>\r
        <a class="filtro" href="#/active">Pendientes</a>\r
      </li>\r
      <li>\r
        <a class="filtro" href="#/completed">Completados</a>\r
      </li>\r
    </ul>\r
    <button class="clear-completed">Borrar completados</button>\r
  </footer>\r
</section>\r
\r
<footer class="info">\r
  <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
  <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
  <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>\r
`,k=e=>{if(!e)throw new Error("Todo object must be required");const{description:t,done:i,id:d}=e,o=`
              <div class="view">
                  <input class="toggle" type="checkbox" ${i?"checked":""} >
                  <label>${t}</label>
                  <button class="destroy"></button>
              </div>
              <input class="edit" value="Create a TodoMVC template">
  `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),e.done&&n.classList.add("completed"),n};let h;const N=(e,t=[])=>{if(!e)throw new Error("Element ID MUST be provided");h||(h=document.querySelector(e)),h.innerHTML="",t.forEach(i=>{h.append(k(i))})};let y;const H=e=>{if(y||(y=document.querySelector(e)),!y)throw new Error(`Element ${e} not found`);y.innerHTML=c.getTodos(a.Pending).length},m={ClearCompleted:".clear-completed",NewTodoInput:"#new-todo-input",TodoList:".todo-list",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},V=e=>{const t=()=>{const s=c.getTodos(c.getCurrentFilter());N(m.TodoList,s),i()},i=()=>{H(m.PendingCountLabel)};(()=>{const s=document.createElement("div");s.innerHTML=O,document.querySelector(e).append(s),t()})();const d=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.ClearCompleted),u=document.querySelectorAll(m.TodoFilters);d.addEventListener("keyup",s=>{s.keyCode===13&&s.target.value.trim().length!==0&&(c.addTodo(s.target.value),t(),s.target.value="")}),o.addEventListener("click",s=>{const p=s.target.closest("[data-id]");c.toggleTodo(p.getAttribute("data-id")),t()}),o.addEventListener("click",s=>{const p=s.target.className==="destroy",g=s.target.closest("[data-id]");!g||!p||(c.deleteTodo(g.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{c.deleteCompleted(),t()}),u.forEach(s=>{s.addEventListener("click",p=>{switch(u.forEach(g=>g.classList.remove("selected")),p.target.classList.add("selected"),p.target.text){case"Todos":c.setFilter(a.All);break;case"Pendientes":c.setFilter(a.Pending);break;case"Completados":c.setFilter(a.Completed);break}t()})})};c.initStore();V("#app");
