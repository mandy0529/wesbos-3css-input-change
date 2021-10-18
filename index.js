const inputs = document.querySelectorAll('input');

const handleUpdate = (e) => {
  const sizing = e.target.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value + sizing
  );
};

inputs.forEach((input) => input.addEventListener('input', handleUpdate));
