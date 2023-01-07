interface ItemView {
  render(item: Item): HTMLElement;
}

class TextItemView implements ItemView {
  render(item: TextItem): HTMLElement {
    const container = document.createElement('div');
    container.textContent = item.text;
    return container;
  }
}

class ImageItemView implements ItemView {
  render(item: ImageItem): HTMLElement {
    const container = document.createElement('div');
    const image = document.createElement('img');
    image.src = item.imageUrl;
    container.appendChild(image);
    return container;
  }
}

class VideoItemView implements ItemView {
  render(item: VideoItem): HTMLElement {
    const container = document.createElement('div');
    const video = document.createElement('video');
    video.src = item.videoUrl;
    container.appendChild(video);
    return container;
  }
}

class ItemViewFactory {
  static createView(item: Item): ItemView {
    if (item instanceof TextItem) {
      return new TextItemView();
    } else if (item instanceof ImageItem) {
      return new ImageItemView();
    } else if (item instanceof VideoItem) {
      return new VideoItemView();
    } else {
      throw new Error('Invalid item type');
    }
  }
}
