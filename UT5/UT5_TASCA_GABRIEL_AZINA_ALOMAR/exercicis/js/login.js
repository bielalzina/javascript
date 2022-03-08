window.onload = function () {
  setTimeout(
    () =>
      (document.getElementById("email").value =
        "gabrielalzina@paucasesnovescifp.cat"),
    300
  );
  setTimeout(
    () => (document.getElementById("password").value = "Passw@rd"),
    600
  );
  setTimeout(() => document.getElementById("fLogin").submit(), 900);
};
