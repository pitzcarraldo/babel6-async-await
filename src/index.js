import 'universal-fetch';

fetch('/api.json')
  .then(res => res.json())
  .then(body => alert(`${JSON.stringify(body)} by Promise.`));

(async function callApi() {
  const res = await fetch('/api.json');
  const body = await res.json();
  alert(`${JSON.stringify(body)} by async,await.`);
}());
