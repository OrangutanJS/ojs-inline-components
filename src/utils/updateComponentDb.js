
export default function updateComponentDb(db, name, index, value) {
  value = value.trim();
  if (Array.isArray(db[name])) {
    if(!index && index !== 0) {
      console.warn('oInput: no index property set');
      return;
    }
    db[index][name] = value;
  } else {
    db[name] = value;
  }
}
