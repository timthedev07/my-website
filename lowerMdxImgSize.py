import os
import re

pj = os.path.join


def getWidth(line):
    a = line.index("width=\"") + 7
    b = int(a)
    while line[b] != "\"":
        b += 1
    return int(line[a:b])


def getHeight(line):
    a = line.index("height=\"") + 8
    b = int(a)
    while line[b] != "\"":
        b += 1
    return int(line[a:b])


def main():
    dirs = os.listdir(pj("src", "blog-mdx"))
    for d in dirs:
        print(f"In dir: <{d}>")
        for fname in os.listdir(pj("src", "blog-mdx", d)):
            print(f"  - In file: <{fname}>")
            completeF = pj("src", "blog-mdx", d, fname)
            newContent = ""

            with open(completeF, "r") as f:
                alterations = []
                lines = f.read().strip().split("\n")
                for i, line in enumerate(lines):
                    if "<SizedImage" in line and "/>" in line:
                        w = getWidth(line)
                        h = getHeight(line)

                        oldW = int(w)
                        oldH = int(h)

                        altered = False

                        if w > 1440:
                            sf = 1440/w
                            w = 1440
                            h = round(h * sf)
                            altered = True

                        if h > 810:
                            sf = 810/h
                            h = 810
                            w = round(w * sf)
                            altered = True

                        if altered:
                            alterations.append((i, (oldW, oldH), (w, h)))

                for i, old, new in alterations:
                    lines[i] = lines[i].replace(
                        f"width=\"{old[0]}\"", f"width=\"{new[0]}\"")
                    lines[i] = lines[i].replace(
                        f"height=\"{old[1]}\"", f"height=\"{new[1]}\"")

                newContent = "\n".join(lines) + "\n"

            with open(completeF, "w") as f:
                f.write(newContent)


if __name__ == "__main__":
    main()
