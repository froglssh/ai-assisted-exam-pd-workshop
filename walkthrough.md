# AI 輔助考卷出改解題研習簡報成果報告

本研習專案旨在為教師提供「AI 助教時代的教學評量革命」之實務教材。目前已成功生成全部 **32 頁** 高解析度簡報投影片、完成 **16,000 字** 完整演講稿 (備忘錄)、組裝成 `.pptx` 簡報檔案，並順利發佈至 GitHub Repository 與啟用 GitHub Pages。

## 🛠️ 完成項目

### 1. 簡報投影片生成 (32/32)
* **視覺風格**：清爽專業風 (A風格)，採用淺灰背景、深藍結構及青色強調色，全數 32 頁皆依照 `slide_18.png` 樣張風格一鍵渲染生成。
* **投影片內容**：完整覆蓋素養導向評量變革學理基礎、AI 互動出題與診斷、AI 視覺智慧批改手寫題與作文、Gradescope 應用、NotebookLM 專屬解題助教、以及 AI Agent 自動化試卷生成等。
* **產出位置**：[origin_image/](file:///Users/froglssh/Library/CloudStorage/GoogleDrive-frog@lssh.tp.edu.tw/我的雲端硬碟/0AI應用/0-AI輔助出改解題/AI輔助考卷出改解題研習/origin_image)

### 2. 逐頁演講稿與備忘錄
* **內容**：包含每一頁投影片的詳細中文說法、教學重點、畫面引導指南與節奏注意點。
* **產出檔案**：[speech.md](file:///Users/froglssh/Library/CloudStorage/GoogleDrive-frog@lssh.tp.edu.tw/我的雲端硬碟/0AI應用/0-AI輔助出改解題/AI輔助考卷出改解題研習/speech.md)

### 3. PowerPoint 簡報組裝 (.pptx)
* **規格**：16:9 寬螢幕，每頁由高解析度投影片圖片充滿。
* **特色**：已將 [speech.md](file:///Users/froglssh/Library/CloudStorage/GoogleDrive-frog@lssh.tp.edu.tw/我的雲端硬碟/0AI應用/0-AI輔助出改解題/AI輔助考卷出改解題研習/speech.md) 中對應的演講講稿與教師引導重點 **全部自動注入為 PPT 每一頁的備忘錄**。
* **產出檔案**：[AI輔助考卷出改解題研習.pptx](file:///Users/froglssh/Library/CloudStorage/GoogleDrive-frog@lssh.tp.edu.tw/我的雲端硬碟/0AI應用/0-AI輔助出改解題/AI輔助考卷出改解題研習/AI輔助考卷出改解題研習.pptx)

### 4. Git 雲端備份與網頁發佈
* **遠端儲存庫**：[froglssh/ai-assisted-exam-pd-workshop](https://github.com/froglssh/ai-assisted-exam-pd-workshop)
* **GitHub Pages 網頁**：[ai-assisted-exam-pd-workshop Pages](https://froglssh.github.io/ai-assisted-exam-pd-workshop/)
* **說明**：專案已包含精心撰寫的 `README.md` 並提供精彩頁面預覽與下載連結，Pages 部署完成後即可作為成果展示頁。

---

## 🔍 驗證結果與品質檢查
1. **圖片解析度與文字可讀性**：所有圖片均以 `2048x1152` 解析度生成，中文繁體文字清晰無毛邊或亂碼。
2. **簡報組裝驗證**：運行 `assemble_ppt.py` 成功載入 32 張圖片及 32 頁備註，並匯出完整相容的 PowerPoint 檔。
3. **GitHub 發佈與 Pages 綁定**：通過 GitHub CLI 順利創建與推送儲存庫，GitHub Pages 設定完成。
