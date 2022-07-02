const imageUrlToBase64 = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((onSuccess, onError) => {
    try {
      const reader = new FileReader();
      reader.onload = function () {
        onSuccess(this.result);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
      onError(e);
    }
  });
};

export const hydrateImageFromHTML = async (html: string) => {
  const r = /<img src="/gi;
  let match = null;
  let newHTML = html;

  const imageUrls = [];

  while ((match = r.exec(html)) !== null) {
    const start = match.index + 10;
    let ptr = start;
    let cumulatedStr = "";

    while (html[ptr] !== '"') {
      cumulatedStr += html[ptr];
      ptr++;
    }

    imageUrls.push(cumulatedStr);
  }

  for (let i = 0, n = imageUrls.length; i < n; ++i) {
    const base64 = await imageUrlToBase64(imageUrls[i]);
    newHTML = newHTML.replaceAll(imageUrls[i], base64 as string);
  }

  return newHTML;
};
