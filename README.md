# Claire Offboarding Challenge:

Claire is leaving JET and is very sad. She has one problem though:
As part of offboarding, she needs to organise all her demos and they are an absolute mess!

<img src='./Screenshot 2025-08-22 at 10.43.05.png'>

She has been taking screenshots of features without naming them properly, so all the demos are called `"Screenshot XXXX-XX-XX at XX.XX.XX.png` or `"Screenrecording XXXX-XX-XX at XX.XX.XX.mov"`.

Given a representation of the file names on her desktop, can you help her sort them by:

- Removing all non-relevant files which are not screenshots or screenrecordings
- Arranging the screenshots and screenrecordings **in a grid** where:
  - Each row represents a 1-month period
  - all `.mov` files go before `.png` files
- **Rename each file** by getting the sum of the **second of each of its neighbours, not including itself**, then converting that number to its associated 0-indexed letter?
  - **IMPORTANT**: 
    - If the number is 31 or below, default to 32
    - If the number is above 126, 
- Don't worry if you have files with the same name. This is expected!

---

## Example Input & Output for Renaming Step: 

Let's assume, after filtering and initial sorting, Claire's relevant files for a 2-month period (Month 1 and Month 2) are arranged in this grid:

**Month 1 (Row 1):**

| File 1,1                                  | File 1,2                                  | File 1,3                                |
| :---------------------------------------- | :---------------------------------------- | :-------------------------------------- |
| `Screenrecording 2025-01-15 at 08.30.00.mov` | `Screenrecording 2025-01-20 at 14.10.00.mov` | `Screenshot 2025-01-25 at 10.05.00.png` |

**Month 2 (Row 2):**

| File 2,1                                  | File 2,2                                | File 2,3                                |
| :---------------------------------------- | :-------------------------------------- | :-------------------------------------- |
| `Screenrecording 2025-02-05 at 11.45.00.mov` | `Screenshot 2025-02-10 at 07.20.00.png` | `Screenshot 2025-02-18 at 16.55.00.png` |

---

Then we would get the following for the second characters:
|                                 |                                  |                               |
| :---------------------------------------- | :---------------------------------------- | :-------------------------------------- |
| `08` | `14` | `10` |
| `11` | `07` | `16` |

---

Then we would get the following for the neighbourly sums:
|                                 |                                  |                               |
| :---------------------------------------- | :---------------------------------------- | :-------------------------------------- |
| `32` | `52` | `37` |
| `29` --> `32` | `59` | `31` --> `32` |

---

Then we would get the following output:
``` txt
 4%
 ; 
```



ACTUAL INPUT:
 _       _  _       _      _ ___
|_) \_/ |_ |_) \_/ |_   | |_  | 
|_)  |  |_ |_)  |  |_ \_| |_  | 

