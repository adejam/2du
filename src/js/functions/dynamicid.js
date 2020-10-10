const dynamicId = () => {
  const a = '';
  const c = Date.now() / 1000;
  let d = c
    .toString(16)
    .split('.')
    .join('');
  while (d.length < 14) d += '0';
  const id = a + d;

  return id;
};

export default dynamicId;
