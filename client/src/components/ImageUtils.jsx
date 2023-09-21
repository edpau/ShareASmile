export default function ImageUtils(item, size = 's') {
    return (
      'https://i.imgur.com/' +
      item.imageId +
      size +
      '.jpg'
    );
  }