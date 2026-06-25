// ==========================================================================
// MODULE DATA DEFINITIONS (Descriptions, Titles, and Special Interactive Tools)
// ==========================================================================
const moduleData = {
    "module-0": {
        num: "01",
        badge: "提示詞與設定",
        title: "系統設定與提示詞底座",
        desc: "AI 系統設定與提示詞是將大語言模型轉化為專業助教的關鍵「底座」。本單元提供適用於 Gemini Gem、Claude Project、NotebookLM 及 GPTs 的黃金提示詞結構。核心在於透過明確的「角色定位、任務目標、格式規範與邊界限制」，引導 AI 產出符合大考規格的考卷與答案。此外，特別收錄了兩款可單機運作的互動提示詞產生器 HTML，讓教師能一鍵勾選產出高精確度的客製化提示詞。",
        pathPrefix: "0提示詞",
        tools: [
            {
                name: "AI 出題改題解題提示詞工具",
                desc: "整合了各大 AI 模型出題與解題的系統提示詞，提供直覺的選單介面，讓老師快速複製黃金結構提示詞。",
                url: "https://froglssh.github.io/ai-assisted-exam-pd-workshop/AI出題改題解題提示詞工具.html"
            },
            {
                name: "AI 生物教學課程提示詞",
                desc: "專為生物學科設計的課程與教學提示詞工具，涵蓋課程設計、教案撰寫、引導式提問及課堂探究引導心法。",
                url: "https://froglssh.github.io/ai-assisted-exam-pd-workshop/AI生物教學課程提示詞.html"
            }
        ]
    },
    "module-1": {
        num: "02",
        badge: "命題實務與範例",
        title: "AI 輔助出題與多模態命題",
        desc: "出題是教學評量中耗時最長、文書負擔最重的一環。本單元展示如何運用各大模型（Claude、Gemini、Felo、Perplexity）進行素養導向命題，並對比各家誘答選項設計能力。此外，收錄了以 YouTube 影音逐字稿、實驗操作指引為素材的「影音多模態出題」學習單案例，以及針對高中生物能力競賽、閱讀測驗題組的實作資源，協助教師快速構建能引導學生深度探究的素養試題。",
        pathPrefix: "1出題",
        tools: []
    },
    "module-2": {
        num: "03",
        badge: "解題與複習指引",
        title: "AI 輔助解題與資訊圖診斷",
        desc: "傳統上為考卷撰寫詳細解析常耗費教師大量時間，本單元示範如何運用 AI 進行大考考題解析、一鍵生成精美解題資訊圖與錯題診斷。收錄了 115 國中會考自然科（生物、地科、理化）的 ChatGPT 圖解案例，以及學測自然科非選擇題的解題分析。透過 AI 的輔助，教師能為班級快速產出 24 小時解題助教（NotebookLM）與考後複習策略，提升個別化輔導成效。",
        pathPrefix: "2解題",
        tools: []
    },
    "module-3": {
        num: "04",
        badge: "自主學習與寫作",
        title: "小論文專家評審與指導系統",
        desc: "指導學生參與小論文競賽，是高中教師引導自主學習的重要任務。本單元結合全國高級中等學校小論文寫作比賽的生物類群評分標準與引用格式規範，設計了專屬的 AI 專家評審系統提示詞。AI 評審能針對論文結構、論點邏輯、格式合規性提供細緻的扣分原則回饋與修改建議，作為學生投稿前的第一道把關鷹架，減輕指導老師閱讀初稿的負擔。",
        pathPrefix: "3論文評審",
        tools: []
    },
    "module-4": {
        num: "05",
        badge: "批改與等第評閱",
        title: "非選擇題與作文手寫卷 AI 批改",
        desc: "非選擇題型（簡答、作圖、論述）最能評量學生的高階思維，但也是批改最具挑戰的痛點。本單元演示如何建立明確的階段式 Rubrics（評分規準），並結合多模態 AI 的視覺能力對學生實體手寫考卷、國文作文（國寫）進行等級評閱。收錄了 114 年模擬考生物非選批改與 Gradescope 智能批改助手的使用指南，實現客觀且高效的評分工作流。",
        pathPrefix: "4AI評分評改",
        tools: []
    },
    "module-5": {
        num: "06",
        badge: "教育理論與心法",
        title: "出題與修題理論與實踐指南",
        desc: "素養導向命題不能徒具形式，必須建立在嚴謹的科學理論與教學目標上。本單元彙整了台灣新課綱素養試題探討、基本命題原則、教師出修解題原理與實踐指南。透過對齊布魯姆（Bloom）認知層次、編製雙向細目表，協助教師在導入 AI 命題技術的同時，仍能秉持教學初心，讓考卷題目兼具情境脈絡與科學探究深度，而非流於簡單的單詞填空。",
        pathPrefix: "5出題修改原則",
        tools: []
    }
};

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
let allFiles = [
    {
        "name": "AI出題改題解題提示詞工具.html",
        "type": "file",
        "size": 52687,
        "path": "0提示詞/AI出題改題解題提示詞工具.html",
        "driveUrl": "https://drive.google.com/file/d/1h05-q-q63Li4D7BydYVxmiA45V1X70xM/view?usp=drive_link"
    },
    {
        "name": "AI出題解題系統設定_Claude project.pdf",
        "type": "file",
        "size": 219043,
        "path": "0提示詞/AI出題解題系統設定_Claude project.pdf",
        "driveUrl": "https://drive.google.com/file/d/1GwMK_uTV1ezzY0w5C531c_dVjNIhOYWt/view?usp=drive_link"
    },
    {
        "name": "SKILL.md",
        "type": "file",
        "size": 23227,
        "path": "0提示詞/SKILL.md",
        "driveUrl": "https://drive.google.com/file/d/1WCVSv7Fld-3Q6ZWw64FK6Ry_6D7cMZnf/view?usp=drive_link"
    },
    {
        "name": "bio-exam-project-skill.skill",
        "type": "file",
        "size": 12738,
        "path": "0提示詞/bio-exam-project-skill.skill",
        "driveUrl": "https://drive.google.com/file/d/1rSLqW-uLb-V82vW-ug5D-7vkQwGrY8s9/view?usp=drive_link"
    },
    {
        "name": "bio-prompt-pro.zip",
        "type": "file",
        "size": 109077,
        "path": "0提示詞/bio-prompt-pro.zip",
        "driveUrl": "https://drive.google.com/file/d/1RH0LbTuh6Po0FZZlFs-zisbG_NPptNNe/view?usp=drive_link"
    },
    {
        "name": "出題改題提示詞整理.pdf",
        "type": "file",
        "size": 202510,
        "path": "0提示詞/出題改題提示詞整理.pdf",
        "driveUrl": "https://drive.google.com/file/d/1hrGjrz8u6S7y8JZhphmyY_Au3kmtXvoA/view?usp=drive_link"
    },
    {
        "name": "出題改題：GPTs 系統提示詞.pdf",
        "type": "file",
        "size": 463265,
        "path": "0提示詞/出題改題：GPTs 系統提示詞.pdf",
        "driveUrl": "https://drive.google.com/file/d/1fsl7sTaUeqhe5JQLkhfaV567gC2oYcr1/view?usp=drive_link"
    },
    {
        "name": "教師出題改題notebookLM提示詞.pdf",
        "type": "file",
        "size": 328900,
        "path": "0提示詞/教師出題改題notebookLM提示詞.pdf",
        "driveUrl": "https://drive.google.com/file/d/14CDE23boZt3kcDZeoO-PlQ1X_F5TVrt0/view?usp=drive_link"
    },
    {
        "name": "考試出題改題修題Gemini gem 系統設定.pdf",
        "type": "file",
        "size": 323289,
        "path": "0提示詞/考試出題改題修題Gemini gem 系統設定.pdf",
        "driveUrl": "https://drive.google.com/file/d/1LENw-TWhTe8dvKqOrY8BidoFWxpv92Au/view?usp=drive_link"
    },
    {
        "name": "高中選修生物(I) 第四章 遺傳訊息的表現     段考評量試題.pdf",
        "type": "file",
        "size": 240540,
        "path": "1出題/Gemini/ 0Gem出題範例/高中選修生物(I) 第四章 遺傳訊息的表現     段考評量試題.pdf",
        "driveUrl": "https://drive.google.com/file/d/1JbuhPZVYKM0HahE37GNAxZqVXByHyKPd/view?usp=drive_link"
    },
    {
        "name": "高中選修生物(I) 第四章 遺傳訊息的表現 試卷詳解.pdf",
        "type": "file",
        "size": 217331,
        "path": "1出題/Gemini/ 0Gem出題範例/高中選修生物(I) 第四章 遺傳訊息的表現 試卷詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/1heTjDzVkjL3SSuDdre3ZOikp058nxvkv/view?usp=drive_link"
    },
    {
        "name": "選修一細胞能力＿Gemin deeoresearch(解答).pdf",
        "type": "file",
        "size": 429868,
        "path": "1出題/Gemini/高三選生一/選修一細胞能力＿Gemin deeoresearch(解答).pdf",
        "driveUrl": "https://drive.google.com/file/d/1JPOtMiar08iiKa16IW8GBCCeKSvg27wD/view?usp=drive_link"
    },
    {
        "name": "選修一細胞能力＿Gemin deeoresearch(解答)2.pdf",
        "type": "file",
        "size": 330636,
        "path": "1出題/Gemini/高三選生一/選修一細胞能力＿Gemin deeoresearch(解答)2.pdf",
        "driveUrl": "https://drive.google.com/file/d/1_uKvAcf3RK39gHrMU5M8dhSh3SmZGO2m/view?usp=drive_link"
    },
    {
        "name": "選修一細胞能力＿Gemin 出題（解答）.pdf",
        "type": "file",
        "size": 261135,
        "path": "1出題/Gemini/高三選生一/選修一細胞能力＿Gemin 出題（解答）.pdf",
        "driveUrl": "https://drive.google.com/file/d/1D9ADDcrzTu7HD-K77RGBPQ7SoFuq3sXM/view?usp=drive_link"
    },
    {
        "name": "選修一細胞能力＿Gemin 出題（解答）2.pdf",
        "type": "file",
        "size": 263496,
        "path": "1出題/Gemini/高三選生一/選修一細胞能力＿Gemin 出題（解答）2.pdf",
        "driveUrl": "https://drive.google.com/file/d/1HJyFnmtLVt3me1Q5dSzgK434Y47VUrkr/view?usp=drive_link"
    },
    {
        "name": "免疫反應考卷與詳解_gemini.pdf",
        "type": "file",
        "size": 245247,
        "path": "1出題/Gemini/免疫反應考卷與詳解_gemini.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Vd-XOOcU7UH7YtwWWx0jCR1iRpUfTSz5/view?usp=drive_link"
    },
    {
        "name": "生物組織中有機物檢測評量_gemini.pdf",
        "type": "file",
        "size": 179557,
        "path": "1出題/Gemini/生物組織中有機物檢測評量_gemini.pdf",
        "driveUrl": "https://drive.google.com/file/d/16FbdAvmgGaprmJgX5JCPPxJdl6mRVLsy/view?usp=drive_link"
    },
    {
        "name": "細胞分裂出題_gemini.pdf",
        "type": "file",
        "size": 17361146,
        "path": "1出題/Gemini/細胞分裂出題_gemini.pdf",
        "driveUrl": "https://drive.google.com/file/d/1644XjLxkNQzzm4HpNjgf44UISyMs6m2b/view?usp=drive_link"
    },
    {
        "name": "細胞分裂出題＿gemini.pdf",
        "type": "file",
        "size": 820134,
        "path": "1出題/Gemini/細胞分裂出題＿gemini.pdf",
        "driveUrl": "https://drive.google.com/file/d/1w6YbQ5cjQjfY1_5hyz3BlYmIRyDbWC3z/view?usp=drive_link"
    },
    {
        "name": "達爾文演化論與物種演化考試卷＿geminideepresearch.pdf",
        "type": "file",
        "size": 499391,
        "path": "1出題/Gemini/達爾文演化論與物種演化考試卷＿geminideepresearch.pdf",
        "driveUrl": "https://drive.google.com/file/d/168Auw-yPQ-J5KIvkRzrJOGJV5RRUMkxN/view?usp=drive_link"
    },
    {
        "name": "實驗考題出題與解答_LM.pdf",
        "type": "file",
        "size": 326192,
        "path": "1出題/LM/實驗考題出題與解答_LM.pdf",
        "driveUrl": "https://drive.google.com/file/d/11c6HY41rpsmXxC6xoIgHnBXMWLdRA23o/view?usp=drive_link"
    },
    {
        "name": "Codex出題測試.docx",
        "type": "file",
        "size": 151484,
        "path": "1出題/codex/Codex出題測試.docx",
        "driveUrl": "https://drive.google.com/file/d/1FZHlrfCPMDfFDB3ZPoC3SJP1UgrVpOz4/view?usp=drive_link"
    },
    {
        "name": "Codex出題測試.pdf",
        "type": "file",
        "size": 322972,
        "path": "1出題/codex/Codex出題測試.pdf",
        "driveUrl": "https://drive.google.com/file/d/1eKmT332dk9jywmq_s9exE5BEPzMp4QkL/view?usp=drive_link"
    },
    {
        "name": "台灣地理知識.pdf",
        "type": "file",
        "size": 267065,
        "path": "1出題/edcafe/台灣地理知識.pdf",
        "driveUrl": "https://drive.google.com/file/d/11rL0VoIyfZ5EQ-ZTGuwPzWzFGysySjAb/view?usp=drive_link"
    },
    {
        "name": "台灣地理知識.pptx",
        "type": "file",
        "size": 197471,
        "path": "1出題/edcafe/台灣地理知識.pptx",
        "driveUrl": "https://drive.google.com/file/d/11v46T8R1z-NCwD0RIe8qoCLoYaI99hvL/view?usp=drive_link"
    },
    {
        "name": "酵素實驗小考.pdf",
        "type": "file",
        "size": 326647,
        "path": "1出題/edcafe/酵素實驗小考.pdf",
        "driveUrl": "https://drive.google.com/file/d/11j_aqRRHfmiDbnGadoFqdJeufERUINF4/view?usp=drive_link"
    },
    {
        "name": "酵素實驗小考.pptx",
        "type": "file",
        "size": 248437,
        "path": "1出題/edcafe/酵素實驗小考.pptx",
        "driveUrl": "https://drive.google.com/file/d/11jVsV-JYcsf67e_jR8xDo9-4wyzR6O_J/view?usp=drive_link"
    },
    {
        "name": "植物防禦機制考卷_claude.pdf",
        "type": "file",
        "size": 499661,
        "path": "1出題/各模型比較/植物防禦機制考卷_claude.pdf",
        "driveUrl": "https://drive.google.com/file/d/17iSM1eHCkdRB91RESbTfLjxthzEwTQnK/view?usp=drive_link"
    },
    {
        "name": "植物防禦機制考卷_felo.pdf",
        "type": "file",
        "size": 378638,
        "path": "1出題/各模型比較/植物防禦機制考卷_felo.pdf",
        "driveUrl": "https://drive.google.com/file/d/18ydYThoX5UTz23mao-Xp3164wbJyA2r_/view?usp=drive_link"
    },
    {
        "name": "植物防禦機制考卷_gemini.pdf",
        "type": "file",
        "size": 461107,
        "path": "1出題/各模型比較/植物防禦機制考卷_gemini.pdf",
        "driveUrl": "https://drive.google.com/file/d/1smJsQUiPBqkSb0Q8GsRvylyFqwZrUY1g/view?usp=drive_link"
    },
    {
        "name": "植物防禦機制考卷_prplexity.pdf",
        "type": "file",
        "size": 338431,
        "path": "1出題/各模型比較/植物防禦機制考卷_prplexity.pdf",
        "driveUrl": "https://drive.google.com/file/d/17a-VLko1AHZj6rNANKEscsRPvCKHLw7Y/view?usp=drive_link"
    },
    {
        "name": "植物防禦機制考卷＿antigravity.pdf",
        "type": "file",
        "size": 651149,
        "path": "1出題/各模型比較/植物防禦機制考卷＿antigravity.pdf",
        "driveUrl": "https://drive.google.com/file/d/1C2BexO-zTgrR1EVqA52yMSspoq1ArjYb/view?usp=drive_link"
    },
    {
        "name": "心臟構造短影片.pdf",
        "type": "file",
        "size": 386643,
        "path": "1出題/影片出題/心臟構造短影片.pdf",
        "driveUrl": "https://drive.google.com/file/d/1AF2T5dVRYzIcgdXSXlIEx18Huuair6gr/view?usp=drive_link"
    },
    {
        "name": "細胞學說短影片學習單.pdf",
        "type": "file",
        "size": 331382,
        "path": "1出題/影片出題/細胞學說短影片學習單.pdf",
        "driveUrl": "https://drive.google.com/file/d/1A4F9YDpSiSrOFaDmSgmBlGj-5W1U188L/view?usp=drive_link"
    },
    {
        "name": "酵素實驗影片考題.pdf",
        "type": "file",
        "size": 246342,
        "path": "1出題/影片出題/酵素實驗影片考題.pdf",
        "driveUrl": "https://drive.google.com/file/d/1AOaVfSmD2d72B5vXdiJgLu9ct-Fm3_PT/view?usp=drive_link"
    },
    {
        "name": "青蛙觀察與解剖實驗學習單與考題.pdf",
        "type": "file",
        "size": 630148,
        "path": "1出題/影片出題/青蛙觀察與解剖實驗學習單與考題.pdf",
        "driveUrl": "https://drive.google.com/file/d/1ARbJkLRjMwQb5Ls-5SGiAYeBOVBNFHMT/view?usp=drive_link"
    },
    {
        "name": "114校內數理學科能力競賽試題_生物科.pdf",
        "type": "file",
        "size": 606865,
        "path": "1出題/能力競賽/114校內數理學科能力競賽試題_生物科.pdf",
        "driveUrl": "https://drive.google.com/file/d/1QFBTgOHrEnQ86RAWifhk1uoifMw500HW/view?usp=drive_link"
    },
    {
        "name": "114校內數理學科能力競賽試題_生物科_claude.pdf",
        "type": "file",
        "size": 626705,
        "path": "1出題/能力競賽/114校內數理學科能力競賽試題_生物科_claude.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Nhu6KN5ixU6YHgjq-t0sMQBm-c8v8OXf/view?usp=drive_link"
    },
    {
        "name": "大學程度生物學評量測驗卷 - 單選題.pdf",
        "type": "file",
        "size": 692418,
        "path": "1出題/能力競賽/大學程度生物學評量測驗卷 - 單選題.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Ojgkc3DncTfEw0LWm3DLyaxVkzXEzHDf/view?usp=drive_link"
    },
    {
        "name": "大學程度生物學評量測驗卷 - 多選題.pdf",
        "type": "file",
        "size": 564632,
        "path": "1出題/能力競賽/大學程度生物學評量測驗卷 - 多選題.pdf",
        "driveUrl": "https://drive.google.com/file/d/13ChAZ1V2t_2H-Y8eoLSsfcIrhiB92AUT/view?usp=drive_link"
    },
    {
        "name": "大學程度生物學評量測驗卷 - 閱讀題.pdf",
        "type": "file",
        "size": 524289,
        "path": "1出題/能力競賽/大學程度生物學評量測驗卷 - 閱讀題.pdf",
        "driveUrl": "https://drive.google.com/file/d/19sF4aOeSznezA7ZsIkkbf2Rpc7IiSEZA/view?usp=drive_link"
    },
    {
        "name": "大學程度生物學評量測驗卷 - 非選擇題題組.pdf",
        "type": "file",
        "size": 691736,
        "path": "1出題/能力競賽/大學程度生物學評量測驗卷 - 非選擇題題組.pdf",
        "driveUrl": "https://drive.google.com/file/d/1nE1MY3Ii8eKjWfIMydbjdjX-B7GQVLDy/view?usp=drive_link"
    },
    {
        "name": "高中生物學科能力測驗卷_Gemini deepresearch.pdf",
        "type": "file",
        "size": 688387,
        "path": "1出題/能力競賽/高中生物學科能力測驗卷_Gemini deepresearch.pdf",
        "driveUrl": "https://drive.google.com/file/d/1pNUxB_U_AEr42Cjgq9LFBGP1zorYtykW/view?usp=drive_link"
    },
    {
        "name": "發育中胚胎如何淘汰異常細胞(閱讀測驗題AI出題).pdf",
        "type": "file",
        "size": 582582,
        "path": "1出題/閱讀測驗/發育中胚胎如何淘汰異常細胞(閱讀測驗題AI出題).pdf",
        "driveUrl": "https://drive.google.com/file/d/174G5CurGBcbJPiUk_6wex6yVY1KysKDB/view?usp=drive_link"
    },
    {
        "name": "發育中胚胎如何淘汰異常細胞？——《生命之舞》 - PanSci 泛科學.pdf",
        "type": "file",
        "size": 21341429,
        "path": "1出題/閱讀測驗/發育中胚胎如何淘汰異常細胞？——《生命之舞》 - PanSci 泛科學.pdf",
        "driveUrl": "https://drive.google.com/file/d/1702QKXsvMlTnHdoB0P41UPg2hgY0eb7L/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_11_43.png",
        "type": "file",
        "size": 1488871,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_11_43.png",
        "driveUrl": "https://drive.google.com/file/d/17Cn7ZibID9ULYUtT_Dj-6p8ChvHMj2d2/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_11_51 (1).png",
        "type": "file",
        "size": 1497360,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_11_51 (1).png",
        "driveUrl": "https://drive.google.com/file/d/17ZW5xpQclF5NA6L0VNS_HPkIIPgaf5Yf/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_11_51 (2).png",
        "type": "file",
        "size": 1455321,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_11_51 (2).png",
        "driveUrl": "https://drive.google.com/file/d/1qbWJtRIx62OR1_g7jyhDpGW4YNk4Q2in/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_11_57 (1).png",
        "type": "file",
        "size": 1497360,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_11_57 (1).png",
        "driveUrl": "https://drive.google.com/file/d/1E4HIjFNldExU7BqTLmOu9DkWmZxmMH9f/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_11_57 (2).png",
        "type": "file",
        "size": 1455321,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_11_57 (2).png",
        "driveUrl": "https://drive.google.com/file/d/1NYdNRv4Snj73AuJGwtrx2GEoMAFAQLtT/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_12_00.png",
        "type": "file",
        "size": 1484423,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_12_00.png",
        "driveUrl": "https://drive.google.com/file/d/1vkohYw0AnBcBQXKvzaD2pyBB6QDatyNt/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_12_03.png",
        "type": "file",
        "size": 1493038,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_12_03.png",
        "driveUrl": "https://drive.google.com/file/d/1saBT9gPjJI9M82EaEOrGk-xhvhmYDahm/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_12_06.png",
        "type": "file",
        "size": 1527421,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_12_06.png",
        "driveUrl": "https://drive.google.com/file/d/1138HzXbvm_H130B2j3NlEgEaGG0U1kda/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_12_10.png",
        "type": "file",
        "size": 1361980,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_12_10.png",
        "driveUrl": "https://drive.google.com/file/d/1B3vE2Sc57J5J4MPKerRRDgjLxaJqSreB/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_12_13.png",
        "type": "file",
        "size": 1477710,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_12_13.png",
        "driveUrl": "https://drive.google.com/file/d/1MwP6wCmPYCGPoWqUe9NuMHGs238kXKJk/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_12_16.png",
        "type": "file",
        "size": 1428728,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_12_16.png",
        "driveUrl": "https://drive.google.com/file/d/1SKqzCRW4DPSrA0CJUfOaYF4SjAPtR6Ua/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_12_20.png",
        "type": "file",
        "size": 1469905,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_12_20.png",
        "driveUrl": "https://drive.google.com/file/d/168M09IOQ2IzVWIjRWm-KZuxx_Ah_Mhdr/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_12_23.png",
        "type": "file",
        "size": 1509639,
        "path": "2解題/115國中會考/GPT/化學/ChatGPT Image 2026年5月21日 上午11_12_23.png",
        "driveUrl": "https://drive.google.com/file/d/10ShjHoNDyENKYNDk4-qx9xi05NiD__yZ/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_14_57.png",
        "type": "file",
        "size": 1573735,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_14_57.png",
        "driveUrl": "https://drive.google.com/file/d/1ySAslqNPw7cSAVF-jlEVA4hGcREVMvMs/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_00.png",
        "type": "file",
        "size": 1434052,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_00.png",
        "driveUrl": "https://drive.google.com/file/d/1keRjE--naMUCU5B5Nu01OIJkExCVLPF0/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_05 (1).png",
        "type": "file",
        "size": 1553215,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_05 (1).png",
        "driveUrl": "https://drive.google.com/file/d/1Gsy-Rkun_zHc0cI7aLJWPuI-G2GBiDop/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_05 (2).png",
        "type": "file",
        "size": 1595429,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_05 (2).png",
        "driveUrl": "https://drive.google.com/file/d/1rkPx87_45h55ql_3MtWLy_7FtRwE8QGh/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_09 (1).png",
        "type": "file",
        "size": 1553215,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_09 (1).png",
        "driveUrl": "https://drive.google.com/file/d/1orlYJg3CsPXI0WsbrloFQy3wuh-wE-Vz/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_09 (2).png",
        "type": "file",
        "size": 1595429,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_09 (2).png",
        "driveUrl": "https://drive.google.com/file/d/1s2kODw2GtJjYRgsfi2zt-9xNHPOXdMJp/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_13.png",
        "type": "file",
        "size": 1537744,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_13.png",
        "driveUrl": "https://drive.google.com/file/d/11DgWqv7C0icCG-rv4af7qlzvX23hLu3Y/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_19.png",
        "type": "file",
        "size": 1807941,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_19.png",
        "driveUrl": "https://drive.google.com/file/d/1roMLmI9kjjYws5gjpgqNsVYC3Av_cOaX/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_22.png",
        "type": "file",
        "size": 1473485,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_22.png",
        "driveUrl": "https://drive.google.com/file/d/18RgT6X5thozyB9NVBbTsAcIiVeskZnuq/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_25.png",
        "type": "file",
        "size": 1883198,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_25.png",
        "driveUrl": "https://drive.google.com/file/d/1BzoUgOCc7l9of-tYZkGmT56k5BVgkVy3/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_28.png",
        "type": "file",
        "size": 1523015,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_28.png",
        "driveUrl": "https://drive.google.com/file/d/1x5pBRzylRXfhbE6o_k6O8nVK6dlRTH2X/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_31.png",
        "type": "file",
        "size": 1541016,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_31.png",
        "driveUrl": "https://drive.google.com/file/d/1SXGLA9jzw32q-PYnisomBpvO3xRcR4ak/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_34.png",
        "type": "file",
        "size": 1725410,
        "path": "2解題/115國中會考/GPT/地科/ChatGPT Image 2026年5月21日 上午11_15_34.png",
        "driveUrl": "https://drive.google.com/file/d/1DjqoStaBxta09R7p2UiJZrWyTB40uvS1/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_31_55.png",
        "type": "file",
        "size": 1567130,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_31_55.png",
        "driveUrl": "https://drive.google.com/file/d/1_Lo5uL6x3Zf5AJCaclSAJWl_ORaJT9B0/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_32_44.png",
        "type": "file",
        "size": 1315988,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_32_44.png",
        "driveUrl": "https://drive.google.com/file/d/1_3oCrJVdke9IvpAwaJhmbQkVn3_bRwmv/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_32_49.png",
        "type": "file",
        "size": 1298281,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_32_49.png",
        "driveUrl": "https://drive.google.com/file/d/1PHu5EubV_wTBUSyPvf8DK8nOktDoq4eu/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_32_52.png",
        "type": "file",
        "size": 1507601,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_32_52.png",
        "driveUrl": "https://drive.google.com/file/d/12vMJDEa132ZjfDkKXgW6La0Z0Dnnr5mi/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_32_55.png",
        "type": "file",
        "size": 1493580,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_32_55.png",
        "driveUrl": "https://drive.google.com/file/d/1zifC-px6zY-LtRp_jwtZBvdBy3-uKVj8/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_32_58.png",
        "type": "file",
        "size": 1567888,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_32_58.png",
        "driveUrl": "https://drive.google.com/file/d/1R7JZluUUoG0RYGzbMiWnCZ0DN2YJdGCG/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_00.png",
        "type": "file",
        "size": 1543212,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_00.png",
        "driveUrl": "https://drive.google.com/file/d/1FUEkw-n98R9p2GGPTALAu_FO4471iGul/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_03.png",
        "type": "file",
        "size": 1623254,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_03.png",
        "driveUrl": "https://drive.google.com/file/d/17LvKUJsDV7dOCXZaeGhvzBSWpQWYGH_n/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_15.png",
        "type": "file",
        "size": 1694911,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_15.png",
        "driveUrl": "https://drive.google.com/file/d/1sA7oPewV5NiPBMoMMu04QpiAf4KX-CDF/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_18.png",
        "type": "file",
        "size": 1640682,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_18.png",
        "driveUrl": "https://drive.google.com/file/d/1rz8a4qiPZYwo4sRPpGi8zsxGt6IR3wCC/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_20.png",
        "type": "file",
        "size": 1547514,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_20.png",
        "driveUrl": "https://drive.google.com/file/d/1hp9dSSoQ14rnhHPVcJ0Fx9vEEAPSqOUD/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_23.png",
        "type": "file",
        "size": 1382909,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_23.png",
        "driveUrl": "https://drive.google.com/file/d/1dYdibok96FkXAxs0vsrtymCPeEkRBS-d/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_26.png",
        "type": "file",
        "size": 1498302,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_26.png",
        "driveUrl": "https://drive.google.com/file/d/1zXzef75xLSr7tpgxRf6KKZbzm0M9s1qG/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_29.png",
        "type": "file",
        "size": 1494664,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_29.png",
        "driveUrl": "https://drive.google.com/file/d/1zQ5vbKy9FNeniC1iZ3wS6GOwk1l_PJjZ/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_32.png",
        "type": "file",
        "size": 1611987,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_32.png",
        "driveUrl": "https://drive.google.com/file/d/1p_RM517mvvm6C8wwoa8f2U1b6kTG9PpJ/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_34.png",
        "type": "file",
        "size": 1316504,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_34.png",
        "driveUrl": "https://drive.google.com/file/d/1wntM1ZPaVR5dZzVNC4yTcRMZMgLlbvvi/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_37.png",
        "type": "file",
        "size": 1428018,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_37.png",
        "driveUrl": "https://drive.google.com/file/d/1KqrPIsZH0CsM0p0RFd7Rq2iCBZ4TnGdP/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午09_33_40.png",
        "type": "file",
        "size": 1521287,
        "path": "2解題/115國中會考/GPT/物理/ChatGPT Image 2026年5月21日 上午09_33_40.png",
        "driveUrl": "https://drive.google.com/file/d/17Z_No9XURCzQKnQKmNv3EO9jo_ugSPfT/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_37.png",
        "type": "file",
        "size": 1541528,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_15_37.png",
        "driveUrl": "https://drive.google.com/file/d/1a22S1rtjc4PCsZVH3fS2yPQZKHcb-B2V/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_40.png",
        "type": "file",
        "size": 1608736,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_15_40.png",
        "driveUrl": "https://drive.google.com/file/d/1NM6bI1mukxpVAv3iyUDeB7cx1W64yAyI/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_15_43.png",
        "type": "file",
        "size": 1508989,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_15_43.png",
        "driveUrl": "https://drive.google.com/file/d/1nZyJFQohYP6kjBnxivuQ_sCQPHQWex69/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_33.png",
        "type": "file",
        "size": 1670364,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_33.png",
        "driveUrl": "https://drive.google.com/file/d/1nQ7hj8NS-Xb8cDNx7lARCedPukto1ep7/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_36.png",
        "type": "file",
        "size": 1635163,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_36.png",
        "driveUrl": "https://drive.google.com/file/d/1fhVwoyuZ-9lXjr8xoSZNdjCbWeLbP75D/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_39.png",
        "type": "file",
        "size": 1616318,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_39.png",
        "driveUrl": "https://drive.google.com/file/d/1AGEhhlTD-qEaWkoCwB8jI4Y0BA-9blSn/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_42.png",
        "type": "file",
        "size": 1462284,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_42.png",
        "driveUrl": "https://drive.google.com/file/d/164ftabSOghbzaVshIZZdglytd4x4Kuj0/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_46.png",
        "type": "file",
        "size": 1580606,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_46.png",
        "driveUrl": "https://drive.google.com/file/d/1HXsxleg5ql7WqP9LCksleFmtYoTHSqKK/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_51 (1).png",
        "type": "file",
        "size": 1547707,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_51 (1).png",
        "driveUrl": "https://drive.google.com/file/d/1TTRNVq684psWhkXyiW1FT_6tGqKxxK9j/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_51 (2).png",
        "type": "file",
        "size": 1528781,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_51 (2).png",
        "driveUrl": "https://drive.google.com/file/d/1F21LJSCvyT2nUKMq_Y7vooiVkX91sfGZ/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_54 (1).png",
        "type": "file",
        "size": 1547707,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_54 (1).png",
        "driveUrl": "https://drive.google.com/file/d/1nCf6f0rKc0_USAzaFBLjlTG3bXjKvmv3/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_54 (2).png",
        "type": "file",
        "size": 1528781,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_54 (2).png",
        "driveUrl": "https://drive.google.com/file/d/10YsifLXBglxYftFBj_AynGzb-hjOBRTz/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_56.png",
        "type": "file",
        "size": 1547363,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_56.png",
        "driveUrl": "https://drive.google.com/file/d/1nRsAPcXdOUcSjJax_Jbdzx1hq_AS7YRA/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_17_59.png",
        "type": "file",
        "size": 1495868,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_17_59.png",
        "driveUrl": "https://drive.google.com/file/d/1obU0P6-yYvmMEi9cOtm5S4IQLBL8x3pF/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_18_02.png",
        "type": "file",
        "size": 1583599,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_18_02.png",
        "driveUrl": "https://drive.google.com/file/d/1-gnPnHol_MsQV3xjDcvXG3rARCegKpZ3/view?usp=drive_link"
    },
    {
        "name": "ChatGPT Image 2026年5月21日 上午11_18_05.png",
        "type": "file",
        "size": 1685379,
        "path": "2解題/115國中會考/GPT/生物/ChatGPT Image 2026年5月21日 上午11_18_05.png",
        "driveUrl": "https://drive.google.com/file/d/1ijReW_9yW6taWcWmkdMUT20DGU9hPXA6/view?usp=drive_link"
    },
    {
        "name": "115會考化學解題資訊圖_GPT.pdf",
        "type": "file",
        "size": 1959039,
        "path": "2解題/115國中會考/GPT/115會考化學解題資訊圖_GPT.pdf"
    },
    {
        "name": "115會考化學資訊圖.pdf",
        "type": "file",
        "size": 275257,
        "path": "2解題/115國中會考/GPT/115會考化學資訊圖.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Dau5tE-YPRaBqFlDux6ajKoi5TTH6cZ7/view?usp=drive_link"
    },
    {
        "name": "115會考化學資訊圖.png",
        "type": "file",
        "size": 2005281,
        "path": "2解題/115國中會考/GPT/115會考化學資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1J6-8Kr12Mh7xSYHLDNaGrIYh2kHssBPz/view?usp=drive_link"
    },
    {
        "name": "115會考地科解題資訊圖_GPT.pdf",
        "type": "file",
        "size": 2139244,
        "path": "2解題/115國中會考/GPT/115會考地科解題資訊圖_GPT.pdf"
    },
    {
        "name": "115會考地科資訊圖.pdf",
        "type": "file",
        "size": 265091,
        "path": "2解題/115國中會考/GPT/115會考地科資訊圖.pdf",
        "driveUrl": "https://drive.google.com/file/d/1H9AnYSGPLzLjOCIk6opsxtXAKnxQ29FP/view?usp=drive_link"
    },
    {
        "name": "115會考地科資訊圖.png",
        "type": "file",
        "size": 1994781,
        "path": "2解題/115國中會考/GPT/115會考地科資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1ZdQZRQ8JiJC0HCOqXwE7vlNh2UE2TF7B/view?usp=drive_link"
    },
    {
        "name": "115會考物理解題資訊圖_GPT.pdf",
        "type": "file",
        "size": 3247524,
        "path": "2解題/115國中會考/GPT/115會考物理解題資訊圖_GPT.pdf"
    },
    {
        "name": "115會考物理資訊圖.pdf",
        "type": "file",
        "size": 267581,
        "path": "2解題/115國中會考/GPT/115會考物理資訊圖.pdf",
        "driveUrl": "https://drive.google.com/file/d/1xqamcdtzygOSegKFIjAjsIMuvsluM71t/view?usp=drive_link"
    },
    {
        "name": "115會考物理資訊圖.png",
        "type": "file",
        "size": 2013749,
        "path": "2解題/115國中會考/GPT/115會考物理資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1vUZD3vMYPFIkGhUn1pae4w8DBg37JZhz/view?usp=drive_link"
    },
    {
        "name": "115會考生物解題資訊圖_GPT.pdf",
        "type": "file",
        "size": 2740135,
        "path": "2解題/115國中會考/GPT/115會考生物解題資訊圖_GPT.pdf"
    },
    {
        "name": "115會考生物解題資訊圖_GPT_2.pdf",
        "type": "file",
        "size": 1202399,
        "path": "2解題/115國中會考/GPT/115會考生物解題資訊圖_GPT_2.pdf",
        "driveUrl": "https://drive.google.com/file/d/1hM7iVFbczmridRe60bl9tiGCXWeuxry3/view?usp=drive_link"
    },
    {
        "name": "115會考生物資訊圖.pdf",
        "type": "file",
        "size": 268605,
        "path": "2解題/115國中會考/GPT/115會考生物資訊圖.pdf",
        "driveUrl": "https://drive.google.com/file/d/1A8oDhbiIXvMdZryZUNug78ZIEjmSwAHn/view?usp=drive_link"
    },
    {
        "name": "115會考生物資訊圖.png",
        "type": "file",
        "size": 1999646,
        "path": "2解題/115國中會考/GPT/115會考生物資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1K0Vb8al6ZE-X4SIOEpmnbiibAWj1qic8/view?usp=drive_link"
    },
    {
        "name": "115會考自然解題資訊圖_GPT.pdf",
        "type": "file",
        "size": 10072883,
        "path": "2解題/115國中會考/GPT/115會考自然解題資訊圖_GPT.pdf"
    },
    {
        "name": "115會考自然試題詳解＿Codex.pdf",
        "type": "file",
        "size": 10019251,
        "path": "2解題/115國中會考/GPT/115會考自然試題詳解＿Codex.pdf",
        "driveUrl": "https://drive.google.com/file/d/1OkWxxgMDzQwRn6dctzHlPYQDfBXORosU/view?usp=drive_link"
    },
    {
        "name": "115會考各科試題分析.docx",
        "type": "file",
        "size": 3103554,
        "path": "2解題/115國中會考/LM工作室/115會考各科試題分析.docx",
        "driveUrl": "https://drive.google.com/file/d/1LawZENGWpYVdmKTMpeMbZh2HLnXvVt2U/view?usp=drive_link"
    },
    {
        "name": "115會考各科試題分析.pdf",
        "type": "file",
        "size": 702098,
        "path": "2解題/115國中會考/LM工作室/115會考各科試題分析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1cGq-91I_RYqQBLt7hoBLqlPkJrdfALse/view?usp=drive_link"
    },
    {
        "name": "115會考各科試題解析圖.png",
        "type": "file",
        "size": 4861385,
        "path": "2解題/115國中會考/LM工作室/115會考各科試題解析圖.png",
        "driveUrl": "https://drive.google.com/file/d/1PXCxYffmdT_peLTC8u0HamzmD1Dh8r4x/view?usp=drive_link"
    },
    {
        "name": "115會考教育情報戰略.pdf",
        "type": "file",
        "size": 2607294,
        "path": "2解題/115國中會考/LM工作室/115會考教育情報戰略.pdf",
        "driveUrl": "https://drive.google.com/file/d/1g0DMoyivZjjrRBorej3DEKTVhynL2SVI/view?usp=drive_link"
    },
    {
        "name": "115會考未來人才規格書.m4a",
        "type": "file",
        "size": 47499709,
        "path": "2解題/115國中會考/LM工作室/115會考未來人才規格書.m4a",
        "driveUrl": "https://drive.google.com/file/d/1SHeBFIrhBUqyMD3jCmx81LQXxBLXctT-/view?usp=drive_link"
    },
    {
        "name": "破解115會考：深度戰略解析.mp4",
        "type": "file",
        "size": 44895732,
        "path": "2解題/115國中會考/LM工作室/破解115會考：深度戰略解析.mp4",
        "driveUrl": "https://drive.google.com/file/d/1_fyqg1q5HhLGY7TZtfG2CSAgSjuHM_yU/view?usp=drive_link"
    },
    {
        "name": "115會考公民圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 3329145,
        "path": "2解題/115國中會考/LM簡報/社會科/115會考公民圖解解析_LM簡報.pdf"
    },
    {
        "name": "115會考公民資訊圖.png",
        "type": "file",
        "size": 4773124,
        "path": "2解題/115國中會考/LM簡報/社會科/115會考公民資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1kEU6DnnDIKBdKmZKoaXwfvEaXboL3dgr/view?usp=drive_link"
    },
    {
        "name": "115會考地理圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 2502118,
        "path": "2解題/115國中會考/LM簡報/社會科/115會考地理圖解解析_LM簡報.pdf"
    },
    {
        "name": "115會考地理資訊圖.png",
        "type": "file",
        "size": 5187300,
        "path": "2解題/115國中會考/LM簡報/社會科/115會考地理資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1SSqYDnjr6RR6012ZvFej7Pbs_S2q9D_H/view?usp=drive_link"
    },
    {
        "name": "115會考歷史圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 2862979,
        "path": "2解題/115國中會考/LM簡報/社會科/115會考歷史圖解解析_LM簡報.pdf"
    },
    {
        "name": "115會考歷史資訊圖.png",
        "type": "file",
        "size": 4696268,
        "path": "2解題/115國中會考/LM簡報/社會科/115會考歷史資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/15C2uK_uMkP_IxobFNNusoraTQ_8md1xq/view?usp=drive_link"
    },
    {
        "name": "115會考社會圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 8701148,
        "path": "2解題/115國中會考/LM簡報/社會科/115會考社會圖解解析_LM簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1GTZPUNXtTsQLwXdDnXaJ23eEKrgNxdCJ/view?usp=drive_link"
    },
    {
        "name": "115會考社會資訊圖.png",
        "type": "file",
        "size": 5088271,
        "path": "2解題/115國中會考/LM簡報/社會科/115會考社會資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1ChoqfKFITORS31lMOQ4B7GDbmrPptPaI/view?usp=drive_link"
    },
    {
        "name": "115會考化學圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 2631427,
        "path": "2解題/115國中會考/LM簡報/自然科/115會考化學圖解解析_LM簡報.pdf"
    },
    {
        "name": "115會考化學資訊圖.png",
        "type": "file",
        "size": 4734166,
        "path": "2解題/115國中會考/LM簡報/自然科/115會考化學資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1sqBsUVXm9giLEBp8zMBVS7kJQSRLIvCg/view?usp=drive_link"
    },
    {
        "name": "115會考地科圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 3077040,
        "path": "2解題/115國中會考/LM簡報/自然科/115會考地科圖解解析_LM簡報.pdf"
    },
    {
        "name": "115會考地科資訊圖.png",
        "type": "file",
        "size": 5033629,
        "path": "2解題/115國中會考/LM簡報/自然科/115會考地科資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/11IMBij0GYga1JqMTKhmPFPV33I38kpnp/view?usp=drive_link"
    },
    {
        "name": "115會考物理圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 2918978,
        "path": "2解題/115國中會考/LM簡報/自然科/115會考物理圖解解析_LM簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1IFlASp6lFfDKK9FtYh29voOTmZ0lZXNn/view?usp=drive_link"
    },
    {
        "name": "115會考物理資訊圖.png",
        "type": "file",
        "size": 4667143,
        "path": "2解題/115國中會考/LM簡報/自然科/115會考物理資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1NrDZtbIsC9RDzOSeO5PrVnxDcpoTyRUV/view?usp=drive_link"
    },
    {
        "name": "115會考生物圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 2562272,
        "path": "2解題/115國中會考/LM簡報/自然科/115會考生物圖解解析_LM簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1t5k7dM_a-0ZTcrUZOy9iv84G2VU0_ufw/view?usp=drive_link"
    },
    {
        "name": "115會考生物資訊圖.png",
        "type": "file",
        "size": 4156861,
        "path": "2解題/115國中會考/LM簡報/自然科/115會考生物資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1ffhQyzNNMFf_Qz3LMuyubKAdx8jVdSKV/view?usp=drive_link"
    },
    {
        "name": "115會考自然圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 11197197,
        "path": "2解題/115國中會考/LM簡報/自然科/115會考自然圖解解析_LM簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1AW9aD1q7AyKEeM113tKG6T28KzydCSrc/view?usp=drive_link"
    },
    {
        "name": "115會考自然詳解_LM簡報.pdf",
        "type": "file",
        "size": 6649993,
        "path": "2解題/115國中會考/LM簡報/自然科/115會考自然詳解_LM簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1cev1EqBb8X1BUwK-rWWzzz-1pTMnXjiQ/view?usp=drive_link"
    },
    {
        "name": "115會考國文圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 8335617,
        "path": "2解題/115國中會考/LM簡報/115會考國文圖解解析_LM簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1xcttHaFiBCKkY4bPehKuIkio__6NoeV5/view?usp=drive_link"
    },
    {
        "name": "115會考國文資訊圖.png",
        "type": "file",
        "size": 4463251,
        "path": "2解題/115國中會考/LM簡報/115會考國文資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1i1hG00qHSPIFPdfVbZ2nee_fKUi50cqh/view?usp=drive_link"
    },
    {
        "name": "115會考數學圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 5195779,
        "path": "2解題/115國中會考/LM簡報/115會考數學圖解解析_LM簡報.pdf"
    },
    {
        "name": "115會考數學資訊圖.png",
        "type": "file",
        "size": 4963069,
        "path": "2解題/115國中會考/LM簡報/115會考數學資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1uEZTi57Q6JDNTswcnLEqIP1Eq3-5GM1H/view?usp=drive_link"
    },
    {
        "name": "115會考英文圖解解析_LM簡報.pdf",
        "type": "file",
        "size": 7038991,
        "path": "2解題/115國中會考/LM簡報/115會考英文圖解解析_LM簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Hv2Yng4ICSNWpsdgfmX6KXjg40Tp6d6S/view?usp=drive_link"
    },
    {
        "name": "115會考英文資訊圖.png",
        "type": "file",
        "size": 4677428,
        "path": "2解題/115國中會考/LM簡報/115會考英文資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1YCBKZd5AalhQuzK3pqRONAgy2lbwaSyq/view?usp=drive_link"
    },
    {
        "name": "115P_Answer.pdf",
        "type": "file",
        "size": 219228,
        "path": "2解題/115國中會考/試題/115P_Answer.pdf",
        "driveUrl": "https://drive.google.com/file/d/1zqrjOboBg00i9uHyLYX2Y3STjPr5Uuuz/view?usp=drive_link"
    },
    {
        "name": "115P_Chinese.pdf",
        "type": "file",
        "size": 3526692,
        "path": "2解題/115國中會考/試題/115P_Chinese.pdf",
        "driveUrl": "https://drive.google.com/file/d/18XeODNTTOVr02cfo-Jfg2CriiCQUOfvp/view?usp=drive_link"
    },
    {
        "name": "115P_English.pdf",
        "type": "file",
        "size": 5287251,
        "path": "2解題/115國中會考/試題/115P_English.pdf",
        "driveUrl": "https://drive.google.com/file/d/1KXn00mGEiFi7GaVaCiVWKHs6GlqxD2oh/view?usp=drive_link"
    },
    {
        "name": "115P_Math.pdf",
        "type": "file",
        "size": 1563817,
        "path": "2解題/115國中會考/試題/115P_Math.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Nf6xwtpBl7anAyHULXYCmL321JRCS1HE/view?usp=drive_link"
    },
    {
        "name": "115P_Nature.pdf",
        "type": "file",
        "size": 4516167,
        "path": "2解題/115國中會考/試題/115P_Nature.pdf",
        "driveUrl": "https://drive.google.com/file/d/1gHGvs1fgE48bQjn8N0hYMdSqSSU7Cmj0/view?usp=drive_link"
    },
    {
        "name": "115P_Society.pdf",
        "type": "file",
        "size": 3471306,
        "path": "2解題/115國中會考/試題/115P_Society.pdf",
        "driveUrl": "https://drive.google.com/file/d/1jdnGQ09w24EdwkwCdnA0vk_fm0z3Cm-d/view?usp=drive_link"
    },
    {
        "name": "甄戰一點通115會考國文科詳解.pdf",
        "type": "file",
        "size": 753995,
        "path": "2解題/115國中會考/試題/甄戰一點通115會考國文科詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/1725hKq4-IS5N3gJLfvm7d3-Ed-esfxAn/view?usp=drive_link"
    },
    {
        "name": "甄戰一點通115會考數學科詳解.pdf",
        "type": "file",
        "size": 529925,
        "path": "2解題/115國中會考/試題/甄戰一點通115會考數學科詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/1CB8_bUh3hCRdihWO6G9fFxWDyA8C1X-p/view?usp=drive_link"
    },
    {
        "name": "甄戰一點通115會考社會科詳解.pdf",
        "type": "file",
        "size": 550046,
        "path": "2解題/115國中會考/試題/甄戰一點通115會考社會科詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/1iM5bOUNTRJ-E3Qc0e7JGjOPl5zzn43o8/view?usp=drive_link"
    },
    {
        "name": "甄戰一點通115會考自然科詳解.pdf",
        "type": "file",
        "size": 607336,
        "path": "2解題/115國中會考/試題/甄戰一點通115會考自然科詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/1PXWlW55jXeFbxESKpkp4FzNVu2SEA_g3/view?usp=drive_link"
    },
    {
        "name": "甄戰一點通115會考英文科詳解.pdf",
        "type": "file",
        "size": 506101,
        "path": "2解題/115國中會考/試題/甄戰一點通115會考英文科詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/1FqDRqycG3eLJG8gskyoqCcgXniaWgOOK/view?usp=drive_link"
    },
    {
        "name": "01-115學測國綜試卷.pdf",
        "type": "file",
        "size": 986727,
        "path": "2解題/115學測/原始考卷/01-115學測國綜試卷.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Krw2BOW2U6HCa1X-8RBQmJt95gb8g_BC/view?usp=drive_link"
    },
    {
        "name": "01-115學測國語文綜合能力測驗參考答案.pdf",
        "type": "file",
        "size": 99741,
        "path": "2解題/115學測/原始考卷/01-115學測國語文綜合能力測驗參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1OmUa9Q_M_uwa3O5K5RfuDYJMk1CA-e8t/view?usp=drive_link"
    },
    {
        "name": "02-115學測英文參考答案.pdf",
        "type": "file",
        "size": 98866,
        "path": "2解題/115學測/原始考卷/02-115學測英文參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1ItG3HOliBdhyonwYQz7shs6n2_OB-A7Q/view?usp=drive_link"
    },
    {
        "name": "02-115學測英文科.pdf",
        "type": "file",
        "size": 1290907,
        "path": "2解題/115學測/原始考卷/02-115學測英文科.pdf",
        "driveUrl": "https://drive.google.com/file/d/1P6YZaz1HDvGPm9AwbyOjIcUzdVqYB38k/view?usp=drive_link"
    },
    {
        "name": "02-115學測英文試卷.pdf",
        "type": "file",
        "size": 1286541,
        "path": "2解題/115學測/原始考卷/02-115學測英文試卷.pdf",
        "driveUrl": "https://drive.google.com/file/d/16E18gTFFbhyz0XcZGgWstec_sL7o14qE/view?usp=drive_link"
    },
    {
        "name": "03-115學測數學A參考答案.pdf",
        "type": "file",
        "size": 94228,
        "path": "2解題/115學測/原始考卷/03-115學測數學A參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1ghCzqyflgrDJdrOfTn9AVjFc2lT_8rNu/view?usp=drive_link"
    },
    {
        "name": "03-115學測數學A試卷.pdf",
        "type": "file",
        "size": 343091,
        "path": "2解題/115學測/原始考卷/03-115學測數學A試卷.pdf",
        "driveUrl": "https://drive.google.com/file/d/1NE05YXVezU60T2xp6gXumtnuNhJ07EKG/view?usp=drive_link"
    },
    {
        "name": "04-115學測數學B.pdf",
        "type": "file",
        "size": 457844,
        "path": "2解題/115學測/原始考卷/04-115學測數學B.pdf",
        "driveUrl": "https://drive.google.com/file/d/1nDupfJTdTmAgtAAC6zqItQaye9Mn-ZdM/view?usp=drive_link"
    },
    {
        "name": "04-115學測數學B參考答案.pdf",
        "type": "file",
        "size": 94388,
        "path": "2解題/115學測/原始考卷/04-115學測數學B參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1EKNZ41oAlrOAzGF7wi9pe6SJLnTYI3TE/view?usp=drive_link"
    },
    {
        "name": "05-115學測社會參考答案.pdf",
        "type": "file",
        "size": 93900,
        "path": "2解題/115學測/原始考卷/05-115學測社會參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1GVM9F_phnCbLfITq9cI9gt45xqN9SzIF/view?usp=drive_link"
    },
    {
        "name": "05-115學測社會科.pdf",
        "type": "file",
        "size": 5488749,
        "path": "2解題/115學測/原始考卷/05-115學測社會科.pdf",
        "driveUrl": "https://drive.google.com/file/d/1-mI8tRaYhxZo_B0prHPl4XL-fuIbAmi-/view?usp=drive_link"
    },
    {
        "name": "06-115學測自然參考答案.pdf",
        "type": "file",
        "size": 97316,
        "path": "2解題/115學測/原始考卷/06-115學測自然參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1k1crd8N2IRkwi2M3MyRPWjPMuQ_vdH51/view?usp=drive_link"
    },
    {
        "name": "06-115學測自然試卷.pdf",
        "type": "file",
        "size": 1918996,
        "path": "2解題/115學測/原始考卷/06-115學測自然試卷.pdf",
        "driveUrl": "https://drive.google.com/file/d/1MH2aORWOZWvUyouwjMohrdgrpQzPnVOz/view?usp=drive_link"
    },
    {
        "name": "06-115學測自然參考答案.pdf",
        "type": "file",
        "size": 97316,
        "path": "2解題/115學測/自然解題/06-115學測自然參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1k1crd8N2IRkwi2M3MyRPWjPMuQ_vdH51/view?usp=drive_link"
    },
    {
        "name": "06-115學測自然試卷.pdf",
        "type": "file",
        "size": 1918996,
        "path": "2解題/115學測/自然解題/06-115學測自然試卷.pdf",
        "driveUrl": "https://drive.google.com/file/d/1MH2aORWOZWvUyouwjMohrdgrpQzPnVOz/view?usp=drive_link"
    },
    {
        "name": "115 學測自然科試題分析＿geminiDR.pdf",
        "type": "file",
        "size": 393381,
        "path": "2解題/115學測/自然解題/115 學測自然科試題分析＿geminiDR.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Thab6325nud4LVmgYnEXuDpnNVZ2ddQU/view?usp=drive_link"
    },
    {
        "name": "115學年度學科能力測驗自然考科內容摘要.pdf",
        "type": "file",
        "size": 541990,
        "path": "2解題/115學測/自然解題/115學年度學科能力測驗自然考科內容摘要.pdf",
        "driveUrl": "https://drive.google.com/file/d/1RQxQsQbABOkVhQifRv0DN7jwmBG9x-bi/view?usp=drive_link"
    },
    {
        "name": "115學年度學科能力測驗自然考科深度分析與趨勢展望＿LM分析整理.pdf",
        "type": "file",
        "size": 481350,
        "path": "2解題/115學測/自然解題/115學年度學科能力測驗自然考科深度分析與趨勢展望＿LM分析整理.pdf",
        "driveUrl": "https://drive.google.com/file/d/1F7EKFL7eZJnpn0q1uP4EzapsSmU9sp3e/view?usp=drive_link"
    },
    {
        "name": "115學測化學科試題分析.pdf",
        "type": "file",
        "size": 1748901,
        "path": "2解題/115學測/自然解題/115學測化學科試題分析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1CeGWKlXLTbLZLk-6D44gAR87HPVi-qn-/view?usp=drive_link"
    },
    {
        "name": "115學測地科試題分析.pdf",
        "type": "file",
        "size": 2019599,
        "path": "2解題/115學測/自然解題/115學測地科試題分析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1PneoC2kQSnHEiAlBlMFBsDDzcb8e8_sc/view?usp=drive_link"
    },
    {
        "name": "115學測地科試題詳解.pdf",
        "type": "file",
        "size": 1582601,
        "path": "2解題/115學測/自然解題/115學測地科試題詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/15pezIsNjZFucyFec8U9AVZ_zzbNtDbkj/view?usp=drive_link"
    },
    {
        "name": "115學測物理科試題分析.pdf",
        "type": "file",
        "size": 1699962,
        "path": "2解題/115學測/自然解題/115學測物理科試題分析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1WDpC-OTqId6zJDht5_QIJISXIV8_NifP/view?usp=drive_link"
    },
    {
        "name": "115學測生物科試題分析.pdf",
        "type": "file",
        "size": 2484039,
        "path": "2解題/115學測/自然解題/115學測生物科試題分析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1JjiEyfxxSkfR5NyplNoAMeEapvrXxx4Z/view?usp=drive_link"
    },
    {
        "name": "115學測自然科化學試題詳解.pdf",
        "type": "file",
        "size": 2850233,
        "path": "2解題/115學測/自然解題/115學測自然科化學試題詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/1nxoY_RvTR7tGSh40kDqsJ9WTw8IeHpit/view?usp=drive_link"
    },
    {
        "name": "115學測自然科物理試題詳解.pdf",
        "type": "file",
        "size": 1750033,
        "path": "2解題/115學測/自然解題/115學測自然科物理試題詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/1lDGGkCw5SV3id_PeI2BXWAKacy_4Ewz_/view?usp=drive_link"
    },
    {
        "name": "115學測自然科生物試題詳解.pdf",
        "type": "file",
        "size": 2590053,
        "path": "2解題/115學測/自然解題/115學測自然科生物試題詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/1NqMkebbTsn7EiZy8lKmn1MOvVElagKzZ/view?usp=drive_link"
    },
    {
        "name": "115學測自然科試題分析（四科）簡報.pdf",
        "type": "file",
        "size": 2561175,
        "path": "2解題/115學測/自然解題/115學測自然科試題分析（四科）簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1e2K9pm5Tg5q_eVnaMYlbHU-zLTWtsP11/view?usp=drive_link"
    },
    {
        "name": "115自然試題資訊圖.png",
        "type": "file",
        "size": 7162981,
        "path": "2解題/115學測/自然解題/115自然試題資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/1NDZOWPczU_DoEOLhpKQbh6i5duO6PTRe/view?usp=drive_link"
    },
    {
        "name": "學測考一年400天.m4a",
        "type": "file",
        "size": 28157150,
        "path": "2解題/115學測/自然解題/學測考一年400天.m4a",
        "driveUrl": "https://drive.google.com/file/d/1SvLbAy4nP3GbIIxiYxM3kok-1qp9Lo-m/view?usp=drive_link"
    },
    {
        "name": "解構「寫不完」的考題.mp4",
        "type": "file",
        "size": 43009431,
        "path": "2解題/115學測/自然解題/解構「寫不完」的考題.mp4",
        "driveUrl": "https://drive.google.com/file/d/1VrTCD9C0Vj3FYc1OZW0OkUYV3whAM49V/view?usp=drive_link"
    },
    {
        "name": "2025_Bio_Olympiad_Illustrated_Notes.pdf",
        "type": "file",
        "size": 4012582,
        "path": "2解題/奧林匹亞/2025_Bio_Olympiad_Illustrated_Notes.pdf",
        "driveUrl": "https://drive.google.com/file/d/1A56rWEFuoOilYm9uAFdWyLsP3iVdPeTT/view?usp=drive_link"
    },
    {
        "name": "2025初賽試題詳解.pdf",
        "type": "file",
        "size": 1085688,
        "path": "2解題/奧林匹亞/2025初賽試題詳解.pdf",
        "driveUrl": "https://drive.google.com/file/d/1e5ZNQlqrdt8emZVaDduCcVlAlvHsCSX0/view?usp=drive_link"
    },
    {
        "name": "Olympiad_Biology_Blueprint.pdf",
        "type": "file",
        "size": 2288452,
        "path": "2解題/奧林匹亞/Olympiad_Biology_Blueprint.pdf",
        "driveUrl": "https://drive.google.com/file/d/1yE-RkiFmQLQTPHUwo2XGU_NU2n7fGNLL/view?usp=drive_link"
    },
    {
        "name": "初試題目資訊.png",
        "type": "file",
        "size": 5426392,
        "path": "2解題/奧林匹亞/初試題目資訊.png",
        "driveUrl": "https://drive.google.com/file/d/19tsV7g378dDGABMXEMziGN0GdEwBtNfu/view?usp=drive_link"
    },
    {
        "name": "解題提示詞.pdf",
        "type": "file",
        "size": 72179,
        "path": "2解題/奧林匹亞/解題提示詞.pdf",
        "driveUrl": "https://drive.google.com/file/d/1KF31fbESNrYfa-B1qYMuhnUaRLjJpoCs/view?usp=drive_link"
    },
    {
        "name": "1141-1高三選修生物期中考試題_選生1細胞能量（學生）.pdf",
        "type": "file",
        "size": 1330172,
        "path": "2解題/高三生物/第一次段考/1141-1高三選修生物期中考試題_選生1細胞能量（學生）.pdf",
        "driveUrl": "https://drive.google.com/file/d/1oKUCFitfo2Yo0hUN-ZIDdiXYek9lgfpt/view?usp=drive_link"
    },
    {
        "name": "1141-1高三選修生物期中考試題_選生1細胞能量（教師）.pdf",
        "type": "file",
        "size": 1312151,
        "path": "2解題/高三生物/第一次段考/1141-1高三選修生物期中考試題_選生1細胞能量（教師）.pdf",
        "driveUrl": "https://drive.google.com/file/d/1AYLscLFhypUNgusSuMg4IoIBTDJZpo9r/view?usp=drive_link"
    },
    {
        "name": "1141-1高三選修生物期中考試題_選生1細胞能量（答案）.pdf",
        "type": "file",
        "size": 148971,
        "path": "2解題/高三生物/第一次段考/1141-1高三選修生物期中考試題_選生1細胞能量（答案）.pdf",
        "driveUrl": "https://drive.google.com/file/d/1HvE4axPB1pPNDhWw98kX77ETi0JaTvWW/view?usp=drive_link"
    },
    {
        "name": "1141高三生物期中考單選題深度解析.pdf",
        "type": "file",
        "size": 17555835,
        "path": "2解題/高三生物/第一次段考/1141高三生物期中考單選題深度解析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Eq0svZ-eBywkZzXShUxnfIlXI2a-oRMf/view?usp=drive_link"
    },
    {
        "name": "1141高三生物第一次段考題目與解答(網頁).html",
        "type": "file",
        "size": 114541,
        "path": "2解題/高三生物/第一次段考/1141高三生物第一次段考題目與解答(網頁).html",
        "driveUrl": "https://drive.google.com/file/d/1fBqBYnko9n3IaRHTSGQ_A78Sb5sd47BG/view?usp=drive_link"
    },
    {
        "name": "1141高三生物第一次段考題目與解答(網頁).pdf",
        "type": "file",
        "size": 32047304,
        "path": "2解題/高三生物/第一次段考/1141高三生物第一次段考題目與解答(網頁).pdf",
        "driveUrl": "https://drive.google.com/file/d/1OWcf5i-iUIM5M0BLIPd7bWjoPgjAQOvb/view?usp=drive_link"
    },
    {
        "name": "1141高三生物第一次段考題目與解答.pdf",
        "type": "file",
        "size": 402208,
        "path": "2解題/高三生物/第一次段考/1141高三生物第一次段考題目與解答.pdf",
        "driveUrl": "https://drive.google.com/file/d/1qXqEk9l2qdzKUD9kIvLcsAI7aMnNt08v/view?usp=drive_link"
    },
    {
        "name": "癌細胞介紹.png",
        "type": "file",
        "size": 6919942,
        "path": "2解題/高三生物/第一次段考/癌細胞介紹.png",
        "driveUrl": "https://drive.google.com/file/d/1z-rdggOXof5VrziWGynOV4Lnaviz5wZp/view?usp=drive_link"
    },
    {
        "name": "考卷核心概念.png",
        "type": "file",
        "size": 6542193,
        "path": "2解題/高三生物/第一次段考/考卷核心概念.png",
        "driveUrl": "https://drive.google.com/file/d/1CDFxsn8BoF0vpizUoyUIQDrxIpFDYgG9/view?usp=drive_link"
    },
    {
        "name": "1141高三第二次期中考生物試題分析.pdf",
        "type": "file",
        "size": 294039,
        "path": "2解題/高三生物/第二次段考/1141高三第二次期中考生物試題分析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Vhrlg9B23zz0t5DWx6f1RNZOjWVATxTz/view?usp=drive_link"
    },
    {
        "name": "1141高三第二次期中考試解題_單選題解析.pdf",
        "type": "file",
        "size": 14503037,
        "path": "2解題/高三生物/第二次段考/1141高三第二次期中考試解題_單選題解析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1ed_Fg_5mSW9Y4rj-IzHaPR8GH0kSzCe5/view?usp=drive_link"
    },
    {
        "name": "1141高三第二次期中考試解題_多選題解析.pdf",
        "type": "file",
        "size": 11244314,
        "path": "2解題/高三生物/第二次段考/1141高三第二次期中考試解題_多選題解析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1hfhyPRERNSxuHfNro-lT0zPZjCO-MC0k/view?usp=drive_link"
    },
    {
        "name": "1141高三第二次期中考試解題_實驗題解析.pdf",
        "type": "file",
        "size": 18258728,
        "path": "2解題/高三生物/第二次段考/1141高三第二次期中考試解題_實驗題解析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1G9-lNb8Z0n2ZQrFjIHhzzIAp06lOXtDz/view?usp=drive_link"
    },
    {
        "name": "1141高三第二次期中考試解題_閱測題解析.pdf",
        "type": "file",
        "size": 14379529,
        "path": "2解題/高三生物/第二次段考/1141高三第二次期中考試解題_閱測題解析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Xu7LsIl0_wz49ZOuAp_liMF2jX0q93SC/view?usp=drive_link"
    },
    {
        "name": "1141高三第二次期中考試題核心概念整理.pdf",
        "type": "file",
        "size": 312218,
        "path": "2解題/高三生物/第二次段考/1141高三第二次期中考試題核心概念整理.pdf",
        "driveUrl": "https://drive.google.com/file/d/1tLrqjnDKs3mOAhfxTCdiXWrI56Sgi74e/view?usp=drive_link"
    },
    {
        "name": "1141高三第二次期中考試題重點1.png",
        "type": "file",
        "size": 6222709,
        "path": "2解題/高三生物/第二次段考/1141高三第二次期中考試題重點1.png",
        "driveUrl": "https://drive.google.com/file/d/1yByObX6VyNNBdfD0VwYntqL420xMBaID/view?usp=drive_link"
    },
    {
        "name": "1141高三第二次期中考試題重點2.png",
        "type": "file",
        "size": 6728273,
        "path": "2解題/高三生物/第二次段考/1141高三第二次期中考試題重點2.png",
        "driveUrl": "https://drive.google.com/file/d/1nmjJ4Aah9AHHX-i5mGBfUPDrNjlZCDty/view?usp=drive_link"
    },
    {
        "name": "1141高二生物考卷核心概念.png",
        "type": "file",
        "size": 6264979,
        "path": "2解題/高二生物/1141高二生物考卷核心概念.png",
        "driveUrl": "https://drive.google.com/file/d/1ubAii0iLrngA1vulRQGV3yQH2V-ZU3iw/view?usp=drive_link"
    },
    {
        "name": "1141高二生物考卷核心概念_英文.png",
        "type": "file",
        "size": 6857133,
        "path": "2解題/高二生物/1141高二生物考卷核心概念_英文.png",
        "driveUrl": "https://drive.google.com/file/d/1D_xSjybrHuAQVZ37eNs5CX53hd8bsUQj/view?usp=drive_link"
    },
    {
        "name": "1141高二生物考試卷分析.pdf",
        "type": "file",
        "size": 270280,
        "path": "2解題/高二生物/1141高二生物考試卷分析.pdf",
        "driveUrl": "https://drive.google.com/file/d/18_jni_E2DHnvjtkoDblF1DkuTEE1kHtv/view?usp=drive_link"
    },
    {
        "name": "1141高二生物考試＿單選題解析.pdf",
        "type": "file",
        "size": 17525852,
        "path": "2解題/高二生物/1141高二生物考試＿單選題解析.pdf",
        "driveUrl": "https://drive.google.com/file/d/11UUXVBP7cCIY0oRipCF8zsqDSWLXsqm3/view?usp=drive_link"
    },
    {
        "name": "1141高二生物考試＿多選題解析.pdf",
        "type": "file",
        "size": 15274877,
        "path": "2解題/高二生物/1141高二生物考試＿多選題解析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1M8cQs1QNOxztZnmCJYsAGusCgSzMFyI3/view?usp=drive_link"
    },
    {
        "name": "1141高二生物考試＿閱讀題解析.pdf",
        "type": "file",
        "size": 13343938,
        "path": "2解題/高二生物/1141高二生物考試＿閱讀題解析.pdf",
        "driveUrl": "https://drive.google.com/file/d/1_6KXtSEU6vokCEdb_iWOmfiykxyO93V6/view?usp=drive_link"
    },
    {
        "name": "以人類科學老師的觀點小論文競賽評分標準.pdf",
        "type": "file",
        "size": 550888,
        "path": "3論文評審/以人類科學老師的觀點小論文競賽評分標準.pdf",
        "driveUrl": "https://drive.google.com/file/d/1C8Ckh6LtSrVP8gTAhbwAq2UQQOr4ROyA/view?usp=drive_link"
    },
    {
        "name": "全國高級中等學校小論文寫作比賽 生物類群 評分標準與扣分原則 (評審專家版).pdf",
        "type": "file",
        "size": 198402,
        "path": "3論文評審/全國高級中等學校小論文寫作比賽 生物類群 評分標準與扣分原則 (評審專家版).pdf",
        "driveUrl": "https://drive.google.com/file/d/1S3yuGDmkvfye-OKVpQfEJYvR2O_FiqLy/view?usp=drive_link"
    },
    {
        "name": "小論文競賽AI設定提示詞（各類群適用）5.pdf",
        "type": "file",
        "size": 4399113,
        "path": "3論文評審/小論文競賽AI設定提示詞（各類群適用）5.pdf",
        "driveUrl": "https://drive.google.com/file/d/1wV50hTQoiqvK5VCd8nUCgtgqMLAt6hii/view?usp=drive_link"
    },
    {
        "name": "小論文競賽AI設定提示詞（生物類）7.pdf",
        "type": "file",
        "size": 533799,
        "path": "3論文評審/小論文競賽AI設定提示詞（生物類）7.pdf",
        "driveUrl": "https://drive.google.com/file/d/1hBYoeryvqFXbpGZjQ78W35JCynn_JMpX/view?usp=drive_link"
    },
    {
        "name": "小論文競賽實施要點.pdf",
        "type": "file",
        "size": 646028,
        "path": "3論文評審/小論文競賽實施要點.pdf",
        "driveUrl": "https://drive.google.com/file/d/1w92xN9NsffbmVlLsitOXUkd42ilSkpo0/view?usp=drive_link"
    },
    {
        "name": "小論文競賽投稿注意事項.pdf",
        "type": "file",
        "size": 9127495,
        "path": "3論文評審/小論文競賽投稿注意事項.pdf",
        "driveUrl": "https://drive.google.com/file/d/1NtctqQ0Gwk0rq7T_c-gE1rl7P3LkK-9W/view?usp=drive_link"
    },
    {
        "name": "小論文競賽評審要點.pdf",
        "type": "file",
        "size": 205939,
        "path": "3論文評審/小論文競賽評審要點.pdf",
        "driveUrl": "https://drive.google.com/file/d/1vPMiRGm94GGHkQfpWgtKx6wEpdXmcuBT/view?usp=drive_link"
    },
    {
        "name": "小論文競賽資料引用格式範例.pdf",
        "type": "file",
        "size": 379785,
        "path": "3論文評審/小論文競賽資料引用格式範例.pdf",
        "driveUrl": "https://drive.google.com/file/d/1HnAwMb5MVG22kNddoiBGTyj-on3hej2j/view?usp=drive_link"
    },
    {
        "name": "標準答案與評分原則.JPG",
        "type": "file",
        "size": 101921,
        "path": "4AI評分評改/AI批改手寫卷/標準答案與評分原則.JPG",
        "driveUrl": "https://drive.google.com/file/d/1EQoLbZafFJixjxiYNpdv8qtanwRqvUj3/view?usp=drive_link"
    },
    {
        "name": "模擬考非選擇題答案批改＿chatGPT.pdf",
        "type": "file",
        "size": 2758039,
        "path": "4AI評分評改/AI批改手寫卷/模擬考非選擇題答案批改＿chatGPT.pdf",
        "driveUrl": "https://drive.google.com/file/d/10GGEUXPA1EwR9DdwObcxtNAbd5itv7R7/view?usp=drive_link"
    },
    {
        "name": "模擬考非選擇題答案批改＿gemini.pdf",
        "type": "file",
        "size": 7515920,
        "path": "4AI評分評改/AI批改手寫卷/模擬考非選擇題答案批改＿gemini.pdf",
        "driveUrl": "https://drive.google.com/file/d/1brzvcHx8pGna_Bbdtcz1YBKE_nUYK8YB/view?usp=drive_link"
    },
    {
        "name": "非選答案示範.png",
        "type": "file",
        "size": 79129,
        "path": "4AI評分評改/AI批改手寫卷/非選答案示範.png",
        "driveUrl": "https://drive.google.com/file/d/1Z536go142w6exk7XS85JYoc6x1uDM_WB/view?usp=drive_link"
    },
    {
        "name": "115學測國文考科(國寫)非選擇題評分原則.pdf",
        "type": "file",
        "size": 111938,
        "path": "4AI評分評改/作文批改/115學測國文考科(國寫)非選擇題評分原則.pdf",
        "driveUrl": "https://drive.google.com/file/d/1aIP8bsQij7ORoeW9fuRmcoezE3wCgThr/view?usp=drive_link"
    },
    {
        "name": "115年國文寫作測驗批改與評分.pdf",
        "type": "file",
        "size": 200703,
        "path": "4AI評分評改/作文批改/115年國文寫作測驗批改與評分.pdf",
        "driveUrl": "https://drive.google.com/file/d/1RvNDRGdjjHPjZvGn5FtJGs_0UxvPF2h-/view?usp=drive_link"
    },
    {
        "name": "原卷1-1.pdf",
        "type": "file",
        "size": 734518,
        "path": "4AI評分評改/作文批改/原卷1-1.pdf",
        "driveUrl": "https://drive.google.com/file/d/1HGc3ZKwC9dpk6nvaM8qWOY2qVRYI4tXM/view?usp=drive_link"
    },
    {
        "name": "原卷1-2.pdf",
        "type": "file",
        "size": 757351,
        "path": "4AI評分評改/作文批改/原卷1-2.pdf",
        "driveUrl": "https://drive.google.com/file/d/1ixsbPcCiB6B2DJTokT8s4nIFZ2avZ8gu/view?usp=drive_link"
    },
    {
        "name": "原卷1-3.pdf",
        "type": "file",
        "size": 722310,
        "path": "4AI評分評改/作文批改/原卷1-3.pdf",
        "driveUrl": "https://drive.google.com/file/d/1smh40CSQTKrpO0mvj1xdwHtqZ2Fgs94l/view?usp=drive_link"
    },
    {
        "name": "原卷1-4.pdf",
        "type": "file",
        "size": 936345,
        "path": "4AI評分評改/作文批改/原卷1-4.pdf",
        "driveUrl": "https://drive.google.com/file/d/1IjpltAyGNf5fCjMRkkj8YyMDGQ2nE91C/view?usp=drive_link"
    },
    {
        "name": "原卷1-5.pdf",
        "type": "file",
        "size": 850903,
        "path": "4AI評分評改/作文批改/原卷1-5.pdf",
        "driveUrl": "https://drive.google.com/file/d/1n3rKzfF-oXSmBnT7LB3vDLSjOb4rOOTj/view?usp=drive_link"
    },
    {
        "name": "原卷1-6.pdf",
        "type": "file",
        "size": 929872,
        "path": "4AI評分評改/作文批改/原卷1-6.pdf",
        "driveUrl": "https://drive.google.com/file/d/109VCoys1LCFPSbeJx9Ps3EgP9Y-FjOn6/view?usp=drive_link"
    },
    {
        "name": "原卷2-1.pdf",
        "type": "file",
        "size": 1145242,
        "path": "4AI評分評改/作文批改/原卷2-1.pdf",
        "driveUrl": "https://drive.google.com/file/d/1qzBXgAJvv2BZohHyODDVJ9HTo5XuJAtU/view?usp=drive_link"
    },
    {
        "name": "原卷2-2.pdf",
        "type": "file",
        "size": 1131327,
        "path": "4AI評分評改/作文批改/原卷2-2.pdf",
        "driveUrl": "https://drive.google.com/file/d/1zQBR53QHjmWr3KQ5BN0kiDUGxm8GrysA/view?usp=drive_link"
    },
    {
        "name": "原卷2-3.pdf",
        "type": "file",
        "size": 1129290,
        "path": "4AI評分評改/作文批改/原卷2-3.pdf",
        "driveUrl": "https://drive.google.com/file/d/1y_v5YWFMCWiSMFLSiMwjgDiizEU422_e/view?usp=drive_link"
    },
    {
        "name": "原卷2-4.pdf",
        "type": "file",
        "size": 1244565,
        "path": "4AI評分評改/作文批改/原卷2-4.pdf",
        "driveUrl": "https://drive.google.com/file/d/1MAsqDE39GrGjFRspPec-XByjPbSzdJGi/view?usp=drive_link"
    },
    {
        "name": "原卷2-5.pdf",
        "type": "file",
        "size": 1214809,
        "path": "4AI評分評改/作文批改/原卷2-5.pdf",
        "driveUrl": "https://drive.google.com/file/d/1weoj7bQABbbDAUJmyaJBHwOxl_TmbvAw/view?usp=drive_link"
    },
    {
        "name": "原卷2-6.pdf",
        "type": "file",
        "size": 1204358,
        "path": "4AI評分評改/作文批改/原卷2-6.pdf",
        "driveUrl": "https://drive.google.com/file/d/1dQrqDF8h1D22k1x-ZbVYMkbuVJF_iq1C/view?usp=drive_link"
    },
    {
        "name": "114E3自然科-題目.pdf",
        "type": "file",
        "size": 2669218,
        "path": "4AI評分評改/114E3自然科-題目.pdf",
        "driveUrl": "https://drive.google.com/file/d/1QSzjPc-D7AXKwoD3rK5Z6_pDy1tQSSQu/view?usp=drive_link"
    },
    {
        "name": "114年E3評分原則-自然科.pdf",
        "type": "file",
        "size": 314428,
        "path": "4AI評分評改/114年E3評分原則-自然科.pdf",
        "driveUrl": "https://drive.google.com/file/d/1bJC1A2J1nDld2KJh2VANKXM3587cpkS8/view?usp=drive_link"
    },
    {
        "name": "114模擬考生物AI評分示範.pdf",
        "type": "file",
        "size": 1694495,
        "path": "4AI評分評改/114模擬考生物AI評分示範.pdf",
        "driveUrl": "https://drive.google.com/file/d/11A-hpCzZBV-3eRehojY7VpY8tzA0WkSM/view?usp=drive_link"
    },
    {
        "name": "Gradescope智能批改助手.pdf",
        "type": "file",
        "size": 4674102,
        "path": "4AI評分評改/Gradescope智能批改助手.pdf",
        "driveUrl": "https://drive.google.com/file/d/1V7I37B2X0MulM5RaP9Olvbr1tAyyXgp8/view?usp=drive_link"
    },
    {
        "name": "考題非選批改評審設定提示詞.pdf",
        "type": "file",
        "size": 189842,
        "path": "4AI評分評改/考題非選批改評審設定提示詞.pdf",
        "driveUrl": "https://drive.google.com/file/d/1ZcGEgV7GwfBl3W391uM1Xlcvk0EhY8vs/view?usp=drive_link"
    },
    {
        "name": "00 AI輔助出修解題理論集合.pdf",
        "type": "file",
        "size": 2255797,
        "path": "5出題修改原則/00 AI輔助出修解題理論集合.pdf",
        "driveUrl": "https://drive.google.com/file/d/1HLhfwpNaIOjpSBoeuMffwCDj-QVVxNcA/view?usp=drive_link"
    },
    {
        "name": "AI輔助出題研究報告.pdf",
        "type": "file",
        "size": 531514,
        "path": "5出題修改原則/AI輔助出題研究報告.pdf",
        "driveUrl": "https://drive.google.com/file/d/1CzlB9Q9tK94YdqDTHlrIQML1dVrCnt8q/view?usp=drive_link"
    },
    {
        "name": "出題規則與細目表.pdf",
        "type": "file",
        "size": 206981,
        "path": "5出題修改原則/出題規則與細目表.pdf",
        "driveUrl": "https://drive.google.com/file/d/1FhD-1r8ILAILIHvO-Pxew85qrw6qoUfG/view?usp=drive_link"
    },
    {
        "name": "台灣新課綱素養試題探討.pdf",
        "type": "file",
        "size": 335853,
        "path": "5出題修改原則/台灣新課綱素養試題探討.pdf",
        "driveUrl": "https://drive.google.com/file/d/1za45wPh-KGPALEEEChGj9Px6Q-jCL6Bl/view?usp=drive_link"
    },
    {
        "name": "基本命題原則＿GPT.pdf",
        "type": "file",
        "size": 416074,
        "path": "5出題修改原則/基本命題原則＿GPT.pdf",
        "driveUrl": "https://drive.google.com/file/d/1viMophVJrZ4ZhIvTxJJirbSAm81sXxwe/view?usp=drive_link"
    },
    {
        "name": "教師命題、修題與解題之原理與實踐指南.pdf",
        "type": "file",
        "size": 415968,
        "path": "5出題修改原則/教師命題、修題與解題之原理與實踐指南.pdf",
        "driveUrl": "https://drive.google.com/file/d/1e0J9F9nr5yn0-ALcorCC6ZolMyrf6V4g/view?usp=drive_link"
    },
    {
        "name": "科學探究素養試題探討.pdf",
        "type": "file",
        "size": 425420,
        "path": "5出題修改原則/科學探究素養試題探討.pdf",
        "driveUrl": "https://drive.google.com/file/d/1SyG7CabZ_n3BjvGgYD1UFhoPR2Z_YYqB/view?usp=drive_link"
    },
    {
        "name": "考卷出題原則與科學理論.pdf",
        "type": "file",
        "size": 406585,
        "path": "5出題修改原則/考卷出題原則與科學理論.pdf",
        "driveUrl": "https://drive.google.com/file/d/1ns327digLhyQ6RpsNKNjaOlIgvYS3Ssh/view?usp=drive_link"
    },
    {
        "name": "01-115學測國綜試卷.pdf",
        "type": "file",
        "size": 986727,
        "path": "6檔案資源/115學測/01-115學測國綜試卷.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Krw2BOW2U6HCa1X-8RBQmJt95gb8g_BC/view?usp=drive_link"
    },
    {
        "name": "01-115學測國語文綜合能力測驗參考答案.pdf",
        "type": "file",
        "size": 99741,
        "path": "6檔案資源/115學測/01-115學測國語文綜合能力測驗參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1OmUa9Q_M_uwa3O5K5RfuDYJMk1CA-e8t/view?usp=drive_link"
    },
    {
        "name": "02-115學測英文參考答案.pdf",
        "type": "file",
        "size": 98866,
        "path": "6檔案資源/115學測/02-115學測英文參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1ItG3HOliBdhyonwYQz7shs6n2_OB-A7Q/view?usp=drive_link"
    },
    {
        "name": "02-115學測英文科.pdf",
        "type": "file",
        "size": 1290907,
        "path": "6檔案資源/115學測/02-115學測英文科.pdf",
        "driveUrl": "https://drive.google.com/file/d/1P6YZaz1HDvGPm9AwbyOjIcUzdVqYB38k/view?usp=drive_link"
    },
    {
        "name": "02-115學測英文試卷.pdf",
        "type": "file",
        "size": 1286541,
        "path": "6檔案資源/115學測/02-115學測英文試卷.pdf",
        "driveUrl": "https://drive.google.com/file/d/1RqbA-_1nx7LHJ2kOFW0Ee8PwZWVQtdBW/view?usp=drive_link"
    },
    {
        "name": "03-115學測數學A參考答案.pdf",
        "type": "file",
        "size": 94228,
        "path": "6檔案資源/115學測/03-115學測數學A參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1ghCzqyflgrDJdrOfTn9AVjFc2lT_8rNu/view?usp=drive_link"
    },
    {
        "name": "03-115學測數學A試卷.pdf",
        "type": "file",
        "size": 343091,
        "path": "6檔案資源/115學測/03-115學測數學A試卷.pdf",
        "driveUrl": "https://drive.google.com/file/d/1NE05YXVezU60T2xp6gXumtnuNhJ07EKG/view?usp=drive_link"
    },
    {
        "name": "04-115學測數學B.pdf",
        "type": "file",
        "size": 457844,
        "path": "6檔案資源/115學測/04-115學測數學B.pdf",
        "driveUrl": "https://drive.google.com/file/d/1nDupfJTdTmAgtAAC6zqItQaye9Mn-ZdM/view?usp=drive_link"
    },
    {
        "name": "04-115學測數學B參考答案.pdf",
        "type": "file",
        "size": 94388,
        "path": "6檔案資源/115學測/04-115學測數學B參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1EKNZ41oAlrOAzGF7wi9pe6SJLnTYI3TE/view?usp=drive_link"
    },
    {
        "name": "05-115學測社會參考答案.pdf",
        "type": "file",
        "size": 93900,
        "path": "6檔案資源/115學測/05-115學測社會參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1GVM9F_phnCbLfITq9cI9gt45xqN9SzIF/view?usp=drive_link"
    },
    {
        "name": "05-115學測社會科.pdf",
        "type": "file",
        "size": 5488749,
        "path": "6檔案資源/115學測/05-115學測社會科.pdf",
        "driveUrl": "https://drive.google.com/file/d/1-mI8tRaYhxZo_B0prHPl4XL-fuIbAmi-/view?usp=drive_link"
    },
    {
        "name": "06-115學測自然參考答案.pdf",
        "type": "file",
        "size": 97316,
        "path": "6檔案資源/115學測/06-115學測自然參考答案.pdf",
        "driveUrl": "https://drive.google.com/file/d/1k1crd8N2IRkwi2M3MyRPWjPMuQ_vdH51/view?usp=drive_link"
    },
    {
        "name": "06-115學測自然試卷.pdf",
        "type": "file",
        "size": 1918996,
        "path": "6檔案資源/115學測/06-115學測自然試卷.pdf",
        "driveUrl": "https://drive.google.com/file/d/1MH2aORWOZWvUyouwjMohrdgrpQzPnVOz/view?usp=drive_link"
    },
    {
        "name": "台灣新課綱素養試題探討.pdf",
        "type": "file",
        "size": 335853,
        "path": "6檔案資源/出題學理/台灣新課綱素養試題探討.pdf",
        "driveUrl": "https://drive.google.com/file/d/1RPyuS7SnGGAFcME32qPITpsfNOhKo28q/view?usp=drive_link"
    },
    {
        "name": "基本命題原則＿GPT.pdf",
        "type": "file",
        "size": 416074,
        "path": "6檔案資源/出題學理/基本命題原則＿GPT.pdf",
        "driveUrl": "https://drive.google.com/file/d/1DFSusTC2hIUEuJsnu71KNEoZkM0G8mXB/view?usp=drive_link"
    },
    {
        "name": "教師命題、修題與解題之原理與實踐指南.pdf",
        "type": "file",
        "size": 415968,
        "path": "6檔案資源/出題學理/教師命題、修題與解題之原理與實踐指南.pdf",
        "driveUrl": "https://drive.google.com/file/d/1gCedZ2qW5bbflQtEft8NXOESphvWtRgP/view?usp=drive_link"
    },
    {
        "name": "考卷出題原則與科學理論.pdf",
        "type": "file",
        "size": 406585,
        "path": "6檔案資源/出題學理/考卷出題原則與科學理論.pdf",
        "driveUrl": "https://drive.google.com/file/d/19zJjznaIIXd4uiR_2m-ABea07aXbjZv5/view?usp=drive_link"
    },
    {
        "name": "AI出題解題系統設定_Claude project.pdf",
        "type": "file",
        "size": 219043,
        "path": "6檔案資源/系統設定/AI出題解題系統設定_Claude project.pdf",
        "driveUrl": "https://drive.google.com/file/d/1GwMK_uTV1ezzY0w5C531c_dVjNIhOYWt/view?usp=drive_link"
    },
    {
        "name": "出題改題：GPTs 系統提示詞.pdf",
        "type": "file",
        "size": 463265,
        "path": "6檔案資源/系統設定/出題改題：GPTs 系統提示詞.pdf",
        "driveUrl": "https://drive.google.com/file/d/1fsl7sTaUeqhe5JQLkhfaV567gC2oYcr1/view?usp=drive_link"
    },
    {
        "name": "教師出題改題notebookLM提示詞.pdf",
        "type": "file",
        "size": 328900,
        "path": "6檔案資源/系統設定/教師出題改題notebookLM提示詞.pdf",
        "driveUrl": "https://drive.google.com/file/d/14CDE23boZt3kcDZeoO-PlQ1X_F5TVrt0/view?usp=drive_link"
    },
    {
        "name": "考試出題改題修題Gemini gem 系統設定.pdf",
        "type": "file",
        "size": 323289,
        "path": "6檔案資源/系統設定/考試出題改題修題Gemini gem 系統設定.pdf",
        "driveUrl": "https://drive.google.com/file/d/1LENw-TWhTe8dvKqOrY8BidoFWxpv92Au/view?usp=drive_link"
    },
    {
        "name": "AI_教師智慧評量＿麗山林獻升.pdf",
        "type": "file",
        "size": 2524715,
        "path": "6檔案資源/AI_教師智慧評量＿麗山林獻升.pdf",
        "driveUrl": "https://drive.google.com/file/d/167vZ4lt2JjQ8m6EZrp0EVzmZPzubaZPh/view?usp=drive_link"
    },
    {
        "name": "AI出題改題解題提示詞工具.html",
        "type": "file",
        "size": 52687,
        "path": "6檔案資源/AI出題改題解題提示詞工具.html",
        "driveUrl": "https://drive.google.com/file/d/1q-8DHhXP8ujjx2EnDcSXOm2J5S3Z0iFv/view?usp=drive_link"
    },
    {
        "name": "AI生物教學課程提示詞.html",
        "type": "file",
        "size": 86001,
        "path": "6檔案資源/AI生物教學課程提示詞.html",
        "driveUrl": "https://drive.google.com/file/d/1w9WQ5f_N5j1T0G_ZqJ0qoFuabSqRcMLt/view?usp=drive_link"
    },
    {
        "name": "AI輔助教師出題解題圖說.png",
        "type": "file",
        "size": 5828700,
        "path": "6檔案資源/AI輔助教師出題解題圖說.png",
        "driveUrl": "https://drive.google.com/file/d/1z65KSm0__lq-skq0HpZL8kgA5HnxNAPl/view?usp=drive_link"
    },
    {
        "name": "AI輔助考卷出改解題研習＿簡報.pdf",
        "type": "file",
        "size": 6011985,
        "path": "6檔案資源/AI輔助考卷出改解題研習＿簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1YyQyZ9Ip7Ojqy3kViVUuZ3TamD-DEs04/view?usp=drive_link"
    },
    {
        "name": "AI輔助考卷出改解題＿內容大綱.pdf",
        "type": "file",
        "size": 339247,
        "path": "6檔案資源/AI輔助考卷出改解題＿內容大綱.pdf",
        "driveUrl": "https://drive.google.com/file/d/1c-Ggqeq-r45ZxXXyL1BgP60jW8z3Z_G1/view?usp=drive_link"
    },
    {
        "name": "AI輔助考卷出改解題研習.pdf",
        "type": "file",
        "size": 6011985,
        "path": "AI輔助考卷出改解題研習/AI輔助考卷出改解題研習.pdf",
        "driveUrl": "https://drive.google.com/file/d/1YyQyZ9Ip7Ojqy3kViVUuZ3TamD-DEs04/view?usp=drive_link"
    },
    {
        "name": "AI輔助考卷出改解題研習.pptx",
        "type": "file",
        "size": 46470751,
        "path": "AI輔助考卷出改解題研習/AI輔助考卷出改解題研習.pptx",
        "driveUrl": "https://drive.google.com/file/d/1Wj0Bm1ivnroGelSCyvbJ75cfVkbuDgdc/view?usp=drive_link"
    },
    {
        "name": "deck_spec.json",
        "type": "file",
        "size": 30878,
        "path": "AI輔助考卷出改解題研習/deck_spec.json",
        "driveUrl": "https://drive.google.com/file/d/1DR5BcTpIIwS7jpTm40iocCl-aJtnPDtp/view?usp=drive_link"
    },
    {
        "name": "outline.md",
        "type": "file",
        "size": 17813,
        "path": "AI輔助考卷出改解題研習/outline.md",
        "driveUrl": "https://drive.google.com/file/d/16BBV3pR8UDDEX6qBmtmc55s6SaetECYJ/view?usp=drive_link"
    },
    {
        "name": "slide_jobs.json",
        "type": "file",
        "size": 65238,
        "path": "AI輔助考卷出改解題研習/slide_jobs.json",
        "driveUrl": "https://drive.google.com/file/d/11aPNipu1lD-ICN6hp8fnaxQoezgkiiNd/view?usp=drive_link"
    },
    {
        "name": "slide_run_state.json",
        "type": "file",
        "size": 551,
        "path": "AI輔助考卷出改解題研習/slide_run_state.json"
    },
    {
        "name": "speech.md",
        "type": "file",
        "size": 16032,
        "path": "AI輔助考卷出改解題研習/speech.md",
        "driveUrl": "https://drive.google.com/file/d/15Rb4W0od2xiJvH__VrEXNnJYzMfK530_/view?usp=drive_link"
    },
    {
        "name": "walkthrough.md",
        "type": "file",
        "size": 2982,
        "path": "AI輔助考卷出改解題研習/walkthrough.md",
        "driveUrl": "https://drive.google.com/file/d/1yZ3bYSD5jMdoJDeLQemuNlvrzdRzhMrA/view?usp=drive_link"
    },
    {
        "name": "研習教學網頁.html",
        "type": "file",
        "size": 41655,
        "path": "AI輔助考卷出改解題研習/研習教學網頁.html"
    },
    {
        "name": "AI_進駐課堂：你的新助教？.mp4",
        "type": "file",
        "size": 49837072,
        "path": "LM工作室/影音/AI_進駐課堂：你的新助教？.mp4",
        "driveUrl": "https://drive.google.com/file/d/1z2NVhOD66DJ2JKoR9ZsTd3N9UviyBsRF/view?usp=drive_link"
    },
    {
        "name": "AI輔助教育：您的評量新夥伴.mp4",
        "type": "file",
        "size": 43004648,
        "path": "LM工作室/影音/AI輔助教育：您的評量新夥伴.mp4",
        "driveUrl": "https://drive.google.com/file/d/15Q6uY9FG3u8cGI2myf7EtbMBXXS7PLct/view?usp=drive_link"
    },
    {
        "name": "用_AI_改變教與學_考試評量寧靜革命.m4a",
        "type": "file",
        "size": 36882704,
        "path": "LM工作室/影音/用_AI_改變教與學_考試評量寧靜革命.m4a",
        "driveUrl": "https://drive.google.com/file/d/13WesU1JFmVVF7sZf-MnqazUK2lQwNNzN/view?usp=drive_link"
    },
    {
        "name": "AI_教師智慧評量＿簡介.pdf",
        "type": "file",
        "size": 2524715,
        "path": "LM工作室/AI_教師智慧評量＿簡介.pdf",
        "driveUrl": "https://drive.google.com/file/d/1YtM9liQohT1EO94NJa30rEqPufZsviah/view?usp=drive_link"
    },
    {
        "name": "AI助教時代教學評量工作流_LM簡報.pdf",
        "type": "file",
        "size": 1990839,
        "path": "LM工作室/AI助教時代教學評量工作流_LM簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/16gZadu-yt5-IMtM6elm5fdOkU7RUVbJz/view?usp=drive_link"
    },
    {
        "name": "AI輔助出改解題＿教學簡報.pdf",
        "type": "file",
        "size": 3935530,
        "path": "LM工作室/AI輔助出改解題＿教學簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1s7zB7a13yyG96aGmuMihR0hTbvrRBZRd/view?usp=drive_link"
    },
    {
        "name": "AI輔助出改解題＿筆記簡報.pdf",
        "type": "file",
        "size": 4281199,
        "path": "LM工作室/AI輔助出改解題＿筆記簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1M5pKYP9YqAb4U_Jx4l4rDW4VB3za4Nkn/view?usp=drive_link"
    },
    {
        "name": "AI輔助教師出修解題＿資訊圖.png",
        "type": "file",
        "size": 5544665,
        "path": "LM工作室/AI輔助教師出修解題＿資訊圖.png",
        "driveUrl": "https://drive.google.com/file/d/13h9iVBZtGXnRfuBx06We-GxVuI7n9LPg/view?usp=drive_link"
    },
    {
        "name": "AI輔助教師出題_LMPPT.pdf",
        "type": "file",
        "size": 15746024,
        "path": "LM工作室/AI輔助教師出題_LMPPT.pdf",
        "driveUrl": "https://drive.google.com/file/d/1s1pEq16MV1JMaL4dD-sUH5wGDD_wbrlu/view?usp=drive_link"
    },
    {
        "name": "AI輔助教師出題改題解題PPT.pdf",
        "type": "file",
        "size": 10169169,
        "path": "LM工作室/AI輔助教師出題改題解題PPT.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Sk72FbzmkjmdKWEzezRHJtOROzfMNZos/view?usp=drive_link"
    },
    {
        "name": "AI輔助教師出題解題圖說2.png",
        "type": "file",
        "size": 5828700,
        "path": "LM工作室/AI輔助教師出題解題圖說2.png",
        "driveUrl": "https://drive.google.com/file/d/1IS04x0DAtLBAH_vw3dT-QmW9f93Nyzlv/view?usp=drive_link"
    },
    {
        "name": "AI輔助考卷出改解題＿內容大綱.pdf",
        "type": "file",
        "size": 339247,
        "path": "LM工作室/AI輔助考卷出改解題＿內容大綱.pdf",
        "driveUrl": "https://drive.google.com/file/d/1RC1a7SulKRVeX0jDaOX-V0xiy41JGasD/view?usp=drive_link"
    },
    {
        "name": "AI_出題改題解題.pdf",
        "type": "file",
        "size": 16748766,
        "path": "研習簡介/AI_出題改題解題.pdf",
        "driveUrl": "https://drive.google.com/file/d/1usYU5Maz5yf-Q4ZC1NFqooGWVEnoqjRs/view?usp=drive_link"
    },
    {
        "name": "AI助教時代教學評量工作流.pdf",
        "type": "file",
        "size": 17536182,
        "path": "研習簡介/AI助教時代教學評量工作流.pdf",
        "driveUrl": "https://drive.google.com/file/d/1Zsrv0rwoWhZkmmAE1xGTb43LhN9ipVIm/view?usp=drive_link"
    },
    {
        "name": "AI輔助教師出題解題圖說1.png",
        "type": "file",
        "size": 5723316,
        "path": "研習簡介/AI輔助教師出題解題圖說1.png",
        "driveUrl": "https://drive.google.com/file/d/18jJayqO9DjK0D1Ww2Uc2D6olGvwF3Lr7/view?usp=drive_link"
    },
    {
        "name": "AI輔助教師出題解題圖說3.png",
        "type": "file",
        "size": 6644977,
        "path": "研習簡介/AI輔助教師出題解題圖說3.png",
        "driveUrl": "https://drive.google.com/file/d/1u5CtFmH4LF5v-cy5WkVF2e0XWNi4PGVG/view?usp=drive_link"
    },
    {
        "name": "教育新紀元_AI衝擊與策略藍圖.pdf",
        "type": "file",
        "size": 13607652,
        "path": "研習簡介/教育新紀元_AI衝擊與策略藍圖.pdf",
        "driveUrl": "https://drive.google.com/file/d/1KE7to7egfcf6zwxi6E1ece3TdU1zrnCC/view?usp=drive_link"
    },
    {
        "name": "AI出題改題解題提示詞工具.html",
        "type": "file",
        "size": 52687,
        "path": "AI出題改題解題提示詞工具.html",
        "driveUrl": "https://drive.google.com/file/d/1HQiLcYHzHh7AFJgPxge7J3nEHfvPRW2H/view?usp=drive_link"
    },
    {
        "name": "AI生物教學課程提示詞.html",
        "type": "file",
        "size": 86001,
        "path": "AI生物教學課程提示詞.html",
        "driveUrl": "https://drive.google.com/file/d/1w9WQ5f_N5j1T0G_ZqJ0qoFuabSqRcMLt/view?usp=drive_link"
    },
    {
        "name": "AI輔助考卷出改解題研習＿簡報.pdf",
        "type": "file",
        "size": 6011985,
        "path": "AI輔助考卷出改解題研習＿簡報.pdf",
        "driveUrl": "https://drive.google.com/file/d/1YyQyZ9Ip7Ojqy3kViVUuZ3TamD-DEs04/view?usp=drive_link"
    }
]; // Pre-loaded flat list of files for local execution
let currentModuleKey = 'intro'; // 'intro', 'module-0' to 'module-5', or 'search'
let currentFileTypeFilter = 'all'; // 'all', 'pdf', 'media', 'other'
let searchQuery = '';

// ==========================================================================
// HELPER FUNCTIONS
// ==========================================================================

// Format byte size to readable string
function formatBytes(bytes) {
    if (bytes === 0 || !bytes) return 'N/A';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Flatten tree representation into a single flat array of files
function flattenFileTree(tree, parentPath = '') {
    let list = [];
    tree.forEach(node => {
        if (node.type === 'file') {
            list.push(node);
        } else if (node.type === 'directory' && node.children) {
            list = list.concat(flattenFileTree(node.children, node.path));
        }
    });
    return list;
}

// Categorize file into broad filters: pdf, media, other
function getFileCategory(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    if (ext === 'pdf') {
        return 'pdf';
    } else if (['mp4', 'm4a', 'pptx', 'ppt', 'png', 'jpg', 'jpeg'].includes(ext)) {
        return 'media';
    } else {
        return 'other';
    }
}

// Determine FontAwesome class and style based on file extension
function getFileIconInfo(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    switch (ext) {
        case 'pdf':
            return { icon: 'fa-file-pdf', cssClass: 'type-pdf', name: 'PDF 講義' };
        case 'docx':
        case 'doc':
            return { icon: 'fa-file-word', cssClass: 'type-doc', name: 'Word 檔' };
        case 'pptx':
        case 'ppt':
            return { icon: 'fa-file-powerpoint', cssClass: 'type-media', name: '簡報檔' };
        case 'zip':
        case 'rar':
        case '7z':
            return { icon: 'fa-file-zipper', cssClass: 'type-zip', name: '壓縮包' };
        case 'mp4':
        case 'avi':
        case 'mov':
            return { icon: 'fa-file-video', cssClass: 'type-media', name: '影片檔' };
        case 'm4a':
        case 'mp3':
        case 'wav':
            return { icon: 'fa-file-audio', cssClass: 'type-media', name: '音訊檔' };
        case 'html':
        case 'htm':
            return { icon: 'fa-file-code', cssClass: 'type-web', name: '互動網頁' };
        case 'png':
        case 'jpg':
        case 'jpeg':
            return { icon: 'fa-file-image', cssClass: 'type-media', name: '圖片檔' };
        default:
            return { icon: 'fa-file-lines', cssClass: 'type-other', name: '實作檔案' };
    }
}

// ==========================================================================
// RENDER LOGIC
// ==========================================================================

// Dynamic rendering of files under active module
function renderModuleFiles() {
    const grid = document.getElementById('module-files-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const activeMod = moduleData[currentModuleKey];
    if (!activeMod) return;

    // Filter files belonging to this module path
    let filtered = allFiles.filter(file => file.path.startsWith(activeMod.pathPrefix));

    // Apply secondary file category filter (PDF/Media/Other)
    if (currentFileTypeFilter !== 'all') {
        filtered = filtered.filter(file => getFileCategory(file.name) === currentFileTypeFilter);
    }

    document.getElementById('file-display-count').textContent = `共 ${filtered.length} 個檔案`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="info-banner" style="grid-column: 1 / -1; justify-content: center; width: 100%;">
                <div class="info-banner-icon"><i class="fa-solid fa-folder-open"></i></div>
                <div class="info-banner-text">此分類下目前沒有符合條件的檔案。</div>
            </div>
        `;
        return;
    }

    filtered.forEach(file => {
        const iconInfo = getFileIconInfo(file.name);
        // Clean display name by getting the last portion of filename
        const displayName = file.name;
        
        const card = document.createElement('div');
        card.className = `file-card`;
        
        card.innerHTML = `
            <div class="file-card-top">
                <div class="file-icon-wrap ${iconInfo.cssClass}">
                    <i class="fa-solid ${iconInfo.icon}"></i>
                </div>
                <div class="file-info-wrap">
                    <h4 class="file-title" title="${displayName}">${displayName}</h4>
                    <div class="file-meta-row">
                        <span class="file-badge-type ${iconInfo.cssClass}">${iconInfo.name}</span>
                    </div>
                </div>
            </div>
            <div class="file-card-bottom">
                <div class="file-card-meta">
                    <span class="file-size">${formatBytes(file.size)}</span>
                </div>
                <div class="file-actions">
                    ${file.driveUrl ? `
                    <a href="${file.driveUrl}" target="_blank" class="btn-drive" title="前往 Google Drive 雲端檢視與下載">
                        <i class="fa-solid fa-cloud-arrow-down"></i> 雲端下載
                    </a>
                    ` : `
                    <button class="btn-drive" onclick="handleDriveDownload('${file.name.replace(/'/g, "\\'")}')" title="複製檔名並前往雲端資料夾搜尋下載">
                        <i class="fa-solid fa-cloud-arrow-down"></i> 雲端下載
                    </button>
                    `}
                    <a href="${file.path}" download class="btn-local" title="直接下載本地資料夾中的檔案">
                        <i class="fa-solid fa-download"></i> 本地
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render search results
function renderSearchResults() {
    const grid = document.getElementById('search-files-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const q = searchQuery.toLowerCase().trim();
    
    // Filter all files matching name
    const matches = allFiles.filter(file => file.name.toLowerCase().includes(q));

    document.getElementById('search-results-count').textContent = `共找到 ${matches.length} 個相符的檔案`;
    document.getElementById('search-query-text').innerHTML = `搜尋關鍵字：<strong style="color: var(--accent-blue);">"${searchQuery}"</strong>`;

    if (matches.length === 0) {
        grid.innerHTML = `
            <div class="info-banner" style="grid-column: 1 / -1; justify-content: center; width: 100%;">
                <div class="info-banner-icon"><i class="fa-solid fa-face-frown"></i></div>
                <div class="info-banner-text">找不到任何檔名含有 "${searchQuery}" 的教學檔案。請嘗試其他關鍵字。</div>
            </div>
        `;
        return;
    }

    matches.forEach(file => {
        const iconInfo = getFileIconInfo(file.name);
        
        // Find which module path it belongs to, to display badge
        let parentModuleText = "其他資源";
        for (const [key, value] of Object.entries(moduleData)) {
            if (file.path.startsWith(value.pathPrefix)) {
                parentModuleText = `${value.num} ${value.badge}`;
                break;
            }
        }
        if (file.path.includes("LM工作室")) {
            parentModuleText = "LM工作室 資源";
        } else if (file.path.includes("研習簡介")) {
            parentModuleText = "研習簡介 資源";
        } else if (file.path.includes("AI輔助考卷出改解題研習")) {
            parentModuleText = "研習簡報與備註";
        }

        const card = document.createElement('div');
        card.className = `file-card`;
        
        card.innerHTML = `
            <div class="file-card-top">
                <div class="file-icon-wrap ${iconInfo.cssClass}">
                    <i class="fa-solid ${iconInfo.icon}"></i>
                </div>
                <div class="file-info-wrap">
                    <h4 class="file-title" title="${file.name}">${file.name}</h4>
                    <div class="file-meta-row">
                        <span class="file-badge-type ${iconInfo.cssClass}">${iconInfo.name}</span>
                        <span style="color: var(--text-muted); font-size: 0.72rem;">| ${parentModuleText}</span>
                    </div>
                </div>
            </div>
            <div class="file-card-bottom">
                <div class="file-card-meta">
                    <span class="file-size">${formatBytes(file.size)}</span>
                </div>
                <div class="file-actions">
                    ${file.driveUrl ? `
                    <a href="${file.driveUrl}" target="_blank" class="btn-drive" title="前往 Google Drive 雲端檢視與下載">
                        <i class="fa-solid fa-cloud-arrow-down"></i> 雲端下載
                    </a>
                    ` : `
                    <button class="btn-drive" onclick="handleDriveDownload('${file.name.replace(/'/g, "\\'")}')" title="複製檔名並前往雲端資料夾搜尋下載">
                        <i class="fa-solid fa-cloud-arrow-down"></i> 雲端下載
                    </button>
                    `}
                    <a href="${file.path}" download class="btn-local" title="直接下載本地資料夾中的檔案">
                        <i class="fa-solid fa-download"></i> 本地
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Navigate to specific section/page
function navigateTo(targetKey) {
    currentModuleKey = targetKey;
    currentFileTypeFilter = 'all'; // reset file filter on navigate

    // Update active nav link
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-target') === targetKey) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Hide all pages, show target
    document.querySelectorAll('.content-page').forEach(page => {
        page.classList.remove('active');
    });

    if (targetKey === 'intro') {
        document.getElementById('page-intro').classList.add('active');
    } else if (targetKey === 'search') {
        document.getElementById('page-search').classList.add('active');
        renderSearchResults();
    } else {
        // Module page
        const mod = moduleData[targetKey];
        if (mod) {
            document.getElementById('module-display-num').textContent = mod.num;
            document.getElementById('module-display-badge').textContent = mod.badge;
            document.getElementById('module-display-title').textContent = mod.title;
            document.getElementById('module-display-desc').textContent = mod.desc;

            // Handle online interactive tools showcase within the module
            const toolShowcase = document.getElementById('module-tool-showcase');
            const toolsList = document.getElementById('module-tools-list');
            if (mod.tools && mod.tools.length > 0) {
                toolShowcase.style.display = 'block';
                toolsList.innerHTML = '';
                mod.tools.forEach(tool => {
                    const card = document.createElement('div');
                    card.className = 'tool-card purple-glow';
                    card.innerHTML = `
                        <div class="tool-icon"><i class="fa-solid fa-sliders"></i></div>
                        <div class="tool-body">
                            <h4>${tool.name}</h4>
                            <p>${tool.desc}</p>
                            <a href="${tool.url}" target="_blank" class="tool-link">
                                開啟工具 <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    `;
                    toolsList.appendChild(card);
                });
            } else {
                toolShowcase.style.display = 'none';
            }

            // Reset active filter button styling
            document.querySelectorAll('.file-filters .filter-btn').forEach(btn => {
                if (btn.getAttribute('data-type') === 'all') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            document.getElementById('page-module').classList.add('active');
            renderModuleFiles();
        }
    }

    // Scroll back to top on page switch
    document.querySelector('.scroll-container').scrollTop = 0;
    
    // Close sidebar on mobile after clicking
    document.querySelector('.sidebar').classList.remove('open');
}

// ==========================================================================
// EVENT LISTENERS & INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Nav click binding
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');
            // Clear search when switching tabs manually
            if (target !== 'search') {
                const searchInput = document.getElementById('file-search');
                searchInput.value = '';
                document.getElementById('clear-search').style.display = 'none';
                searchQuery = '';
            }
            navigateTo(target);
        });
    });

    // 2. File Category filter binding
    document.querySelectorAll('.file-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.file-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFileTypeFilter = btn.getAttribute('data-type');
            renderModuleFiles();
        });
    });

    // 3. Instant Search Input binding
    const searchInput = document.getElementById('file-search');
    const clearSearchBtn = document.getElementById('clear-search');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        searchQuery = query;

        if (query.length > 0) {
            clearSearchBtn.style.display = 'block';
            navigateTo('search');
        } else {
            clearSearchBtn.style.display = 'none';
            navigateTo('intro');
        }
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        searchQuery = '';
        navigateTo('intro');
    });

    // 4. Mobile sidebar toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.sidebar');

    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar on tapping outside (main content) on mobile
    document.querySelector('.main-content').addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') && !e.target.closest('.sidebar') && !e.target.closest('#mobile-toggle')) {
            sidebar.classList.remove('open');
        }
    });

    // 5. Light/Dark Theme switch logic
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });

    // 6. Direct Initialization (No fetch to bypass CORS on local file:// protocol)
document.addEventListener('DOMContentLoaded', () => {
    // If the URL has a hash matching a module, navigate to it directly
    const hash = window.location.hash.substring(1);
    if (hash && (hash === 'intro' || moduleData[hash])) {
        navigateTo(hash);
    } else {
        navigateTo('intro');
    }
    console.log(`已靜態載入 ${allFiles.length} 個實作教材檔案，順利避開 CORS 限制。`);
});

}); // close outer DOMContentLoaded

// ==========================================================================
// GOOGLE DRIVE DOWNLOAD & TOAST NOTIFICATION LOGIC
// ==========================================================================
const googleDriveLink = "https://drive.google.com/drive/folders/1tesyMhAUjFThW4bvDOeYQFuE6hKwhait?usp=drive_link";

function handleDriveDownload(filename) {
    // 1. Find if file exists in allFiles and has driveUrl
    const file = allFiles.find(f => f.name === filename);
    if (file && file.driveUrl) {
        showToast("正在前往雲端檔案", `即將在新分頁開啟「${filename}」的雲端連結...`);
        setTimeout(() => {
            window.open(file.driveUrl, '_blank');
        }, 800);
        return;
    }

    // 2. Fallback if no direct link
    navigator.clipboard.writeText(filename)
        .then(() => {
            showToast("已複製檔名", `"${filename}" 已複製到您的剪貼簿！<br>即將開啟雲端硬碟，在搜尋框貼上 (Ctrl/Cmd + V) 即可快速搜尋下載。`);
        })
        .catch(err => {
            console.warn("剪貼簿寫入失敗，採取直接跳轉:", err);
            showToast("即將開啟雲端硬碟", `正在前往 Google Drive 下載資源資料夾...`);
        });

    setTimeout(() => {
        window.open(googleDriveLink, '_blank');
    }, 1200);
}

function showToast(title, message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="toast-content">
            <h5>${title}</h5>
            <p>${message}</p>
        </div>
    `;

    container.appendChild(toast);

    // Auto remove after 4.5 seconds (matching CSS animation)
    setTimeout(() => {
        toast.remove();
    }, 4500);
}