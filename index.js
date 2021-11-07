function fibonacci(F1, F2, n) {
  F1 = Number(prompt("Введіть перше число"));
  F2 = Number(prompt("Введіть друге число"));
  n = Number(prompt("Введіть число фібоначі"));
  let F3;
  if (n > 0) {
    if (n == 1) {
      return alert(F2);
    }
    for (let i = 1; i < n; i++) {
      F3 = F1 + F2;
      F1 = F2;
      F2 = F3;
    }
  }
  if (n < 0) {
    for (let i = 0; i > n; i--) {
      F3 = F2 - F1;
      F2 = F1;
      F1 = F3;
    }
  }
  return alert(F3);
}
