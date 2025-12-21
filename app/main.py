import os

def list_contents(path, indent=0):
    try:
        items = os.listdir(path)
    except FileNotFoundError:
        print(f"❌ Folder not found: {path}")
        return

    for item in sorted(items):
        item_path = os.path.join(path, item)
        print(" " * indent + "|-- " + item)

        if os.path.isdir(item_path):
            list_contents(item_path, indent + 4)

if __name__ == "__main__":
    # Automatically use the script's directory as root
    script_dir = os.path.dirname(os.path.abspath(__file__))
    src_path = os.path.join(script_dir, )

    print(f"\n📁 Reading folder: {src_path}\n")
    list_contents(src_path)
