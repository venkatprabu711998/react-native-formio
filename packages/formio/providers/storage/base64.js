/** THIS FILE IS NOT USABLE, NEEDS TO BE RECREATED IN REACT NATIVE */

const base64 = () => ({
  title: 'Base64',
  name: 'base64',
  uploadFile(file, fileName) {
    const reader = {};

    return new Promise((resolve, reject) => {
      reader.onload = (event) => {
        const url = event.target.result;
        resolve({
          storage: 'base64',
          name: fileName,
          url: url,
          size: file.size,
          type: file.type,
          data: url.replace(`data:${file.type};base64,`, '')
        });
      };

      reader.onerror = () => {
        return reject(this);
      };

      reader.readAsDataURL(file);
    });
  },
  downloadFile(file) {
    // Return the original as there is nothing to do.
    return Promise.resolve(file);
  }
});

base64.title = 'Base64';
export default base64;
