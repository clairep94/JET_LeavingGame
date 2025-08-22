# Claire Offboarding Challenge:

Claire is leaving JET and is very sad. She has one problem though:
As part of offboarding, she needs to organise all her demos and they are an absolute mess!

<img src='./Screenshot 2025-08-22 at 10.43.05.png'>

She has been taking screenshots of features without naming them properly, so all the demos are called `"Screenshot XXXX-XX-XX at XX.XX.XX.png` or `"Screenrecording XXXX-XX-XX at XX.XX.XX.mov"`.

Given a string representation of the file names on her desktop, can you help her sort them by:

- Deleting all non-relevant files which are not demos (not screenshots or screenrecordings) 
- Sort the demos into folders on her desktop so that each folder represents a single day, and arrange the folders in a grid so that each row represents a calendar month
- For each folder, count the number of screenshots vs. number of screen recordings per day 
- If the number of screen recordings is higher than the number of screenshots, that means the feature was especially tricky. Mark that day with an "#", otherwise mark it with an "."
- Return a string to represent the markings on all the organised folders in their grid


---

## Example Input: 

Input:
```
Screenshot 2025-08-22 at 10.43.05.png utf.csv utf.csv(2) Screenshot 2025-08-22 at 11.43.05.png Screenshot 2025-08-22 at 10.43.05.png Screenrecording 2025-07-22 at 10.43.05.mov 
```

Output:
```
#.
#.##
.#....#
```
