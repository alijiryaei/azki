export type FormData = {
  name: string;
  value: string | Blob;
  fileName?: string;
}[];

const appendFormData = (arr: FormData) => {
  const formData = new FormData();
  for (let i = 0; i < arr.length; i++) {
    formData.append(arr[i].name, arr[i].value as Blob, arr[i].fileName);
  }
  return formData;
};

export default appendFormData;
