
from PIL import Image, ImageSequence

def make_gif_transparent(input_path, output_path):
    try:
        im = Image.open(input_path)
    except IOError:
        print(f"Cannot load image {input_path}")
        return

    frames = []
    for frame in ImageSequence.Iterator(im):
        frame = frame.convert("RGBA")
        datas = frame.getdata()
        
        newData = []
        for item in datas:
            # Change all white (also shades of whites) pixels to transparent
            # Lowered threshold to 200 to catch more "halo" pixels
            if item[0] > 200 and item[1] > 200 and item[2] > 200:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        
        frame.putdata(newData)
        frames.append(frame)

    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        optimize=False,
        duration=im.info.get('duration', 100),
        loop=0,
        disposal=2  # Restore to background color. key for transparency
    )
    print(f"Saved transparent gif to {output_path}")

if __name__ == "__main__":
    make_gif_transparent("public/naruto ran.gif", "public/naruto_transparent.gif")
