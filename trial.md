More about normal mode:
 - This is the mode in which you can manipulate code with alphabetic characters, and this is the core idea behind vim as it's very convenient and you don't have to move your hand to the arrow keys
 - Basic movements
  * one character at a time
   - `j` goes down
   - `k` goes up
   - `h` goes to the left
   - `l` goes to the right
  * one word at a time
   - `w` skips a word
   - `b` goes back a word
  * move through an entire file at a time
   - double `g` to go to the very top
   - `shift + g` to go to the very bottom
  * move through a chunk at a time(two *chunks* of code are separated by a blank line between them)
   - `}` or `shift + ]` to move over a chunk *in front of* the cursor
   - `{` or `shift + [` to move over a chunk *before* the cursor
  * switching modes

   - `shift + a` to go into insert mode *but at the end of the current line`

   - `i` to go into insert mode
   - `v` to go into visual mode(normal selection, e.g. char by char, word, by word, chunk by chunk, etc)
   - `shift + v` to go into visual **line** mode(selecting lines of code)
   - `control + v` to go into block selection mode(don't need to know this for now)



 k
h l
 j

word1 word2 word3 word4 word5


i am a piece of text

1.
2.
3.
4.
5.
6.
7.
8.

i am another one

i am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of text

i am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of texti am a big chunk of text