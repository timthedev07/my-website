import os
from PIL import Image
import requests
from io import BytesIO


def findInParen(s):
    return s[s.find("(")+1:s.find(")")]


def findInSquareBrackets(s):
    return s[s.find("[")+1:s.find("]")]


def main():
    dirs = os.listdir()

    for dir in dirs:
        for file in os.listdir(dir):
            with open(file, "r") as f:
                raw = f.read().strip()
                lines = raw.split("\n")
                removeLineNums = []
                for i, line in enumerate(lines):
                    if "<SizedImage" in line and "width={}" in line:
                        removeLineNums.append(i)
                for i in removeLineNums:
                    lines[i] = ""

                alterations = []  # (linenumber, newContent)
                for i, line in enumerate(lines):
                    t = line.strip().strip("\t")
                    if "![" in t and "(" in t and ")" in t:
                        alt = findInSquareBrackets(t)
                        src = findInParen(t)

                        response = requests.get(src)
                        img = Image.open(BytesIO(response.content))
                        w, h = img.size

                        alterations.append(
                            (i, f'<SizedImage alt="{alt}" src="{src}" width="{w}" height="{h}" />'))


if __name__ == "__main__":
    main()
