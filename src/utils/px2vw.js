const px2vw = (size, toPx, width = 1440) => `${(size / width) * toPx}vw`;

export default px2vw;
