const form = document.getElementById("orderForm");

form.addEventListener("submit", function (ev) {
  ev.preventDefault(); // prevenir o comportamento padrão do forms, nao executa a action

  const name = document.querySelector('input[name="name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const breadtype = document.querySelector("select[name='breadType']").value;
  const main = document.querySelector('input[name="main"]').value;
  const observations = document.querySelector(
    'textarea[name="observations"]'
  ).value;

  let salad = "";
  document
    .querySelectorAll('input[name="salad"]:checked')
    .forEach(function (item) {
      salad += " - " + item.value + "\n";
    });

  console.log({
    name,
    address,
    breadtype,
    main,
    salad,
    observations,
  });
});
