from pathlib import Path
import shutil
import re

HOME = Path.home()

SOURCE_ROOT = HOME / "pfin_local_site" / "docs"
SOURCE_LESSONS = SOURCE_ROOT / "lessons"
SOURCE_VIDEOS = SOURCE_ROOT / "videos"
SOURCE_IMAGES = SOURCE_ROOT / "images"

TARGET_ROOT = HOME / "pfin-next-site"
TARGET_LESSONS = TARGET_ROOT / "content" / "lessons"
TARGET_VIDEOS = TARGET_ROOT / "content" / "videos"
TARGET_IMAGES = TARGET_ROOT / "public" / "images"


def ensure_dirs():
    TARGET_LESSONS.mkdir(parents=True, exist_ok=True)
    TARGET_VIDEOS.mkdir(parents=True, exist_ok=True)
    TARGET_IMAGES.mkdir(parents=True, exist_ok=True)


def rewrite_image_paths(text: str) -> str:
    """
    Convert markdown image paths from:
      images/foo.jpg
    to:
      /images/foo.jpg
    """
    text = re.sub(r'!\[([^\]]*)\]\((images/[^)]+)\)', r'![\1](/\2)', text)
    text = re.sub(r'!\[([^\]]*)\]\((/??docs/images/[^)]+)\)', r'![\1](/\2)', text)
    return text


def copy_markdown_files(source_dir: Path, target_dir: Path, label: str):
    copied = 0
    skipped = 0

    if not source_dir.exists():
        print(f"[WARN] Missing source directory: {source_dir}")
        return copied, skipped

    for md_file in source_dir.glob("*.md"):
        if md_file.name.lower() == "index.md":
            skipped += 1
            continue

        target = target_dir / md_file.name
        text = md_file.read_text(encoding="utf-8", errors="ignore")
        text = rewrite_image_paths(text)

        target.write_text(text, encoding="utf-8")
        copied += 1

    print(f"[{label}] copied={copied} skipped={skipped}")
    return copied, skipped


def copy_images():
    copied = 0
    skipped = 0

    if not SOURCE_IMAGES.exists():
        print(f"[WARN] Missing image source directory: {SOURCE_IMAGES}")
        return copied, skipped

    for img in SOURCE_IMAGES.iterdir():
        if not img.is_file():
            continue

        target = TARGET_IMAGES / img.name
        if target.exists():
            skipped += 1
            continue

        shutil.copy2(img, target)
        copied += 1

    print(f"[IMAGES] copied={copied} skipped={skipped}")
    return copied, skipped


def main():
    if not TARGET_ROOT.exists():
        print(f"[ERROR] Next.js target folder not found: {TARGET_ROOT}")
        print("Create the Next.js app first with:")
        print("  npx create-next-app@latest pfin-next-site --typescript --eslint --app")
        return

    ensure_dirs()

    lessons_copied, lessons_skipped = copy_markdown_files(SOURCE_LESSONS, TARGET_LESSONS, "LESSONS")
    videos_copied, videos_skipped = copy_markdown_files(SOURCE_VIDEOS, TARGET_VIDEOS, "VIDEOS")
    images_copied, images_skipped = copy_images()

    print("=" * 60)
    print("[IMPORT COMPLETE]")
    print(f"Lessons copied: {lessons_copied}")
    print(f"Videos copied:  {videos_copied}")
    print(f"Images copied:  {images_copied}")
    print("=" * 60)
    print("Next step: create Next.js pages and run:")
    print("  cd ~/pfin-next-site")
    print("  npm run dev")
    print("=" * 60)


if __name__ == "__main__":
    main()