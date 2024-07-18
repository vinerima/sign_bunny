const SPACE_BETWEEN = 13;

const NEWLINE = "\u000a";

const SIGN_TOP = "\u00a0\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u000a\u007c\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u007c";

const SIGN_LEFT_BORDER = "\u007c\u00a0"

const SIGN_RIGHT_BORDER = "\u00a0\u007c"

const SIGN_BOTTOM = "\u007c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u007c";

const BUNNY = "\u0028\u005c\u005f\u005f\u002f\u0029\u007c\u007c\u00a0\u000a\u0028\u2022\u3145\u2022\u0029\u007c\u007c\u00a0\u000a\u002f\u00a0\u3000\u00a0\u3065";

 const  splitStringIntoChunks= (inputString: string, chunkSize: number = SPACE_BETWEEN): string[] => {
    
    const chunks: string[] = [];
    let currentChunk: string = "";
    const words = inputString.split(" ");

    words.forEach(word => {
        if (currentChunk.length + word.length + 1 <= chunkSize) {
            // +1 berücksichtigt das Leerzeichen zwischen den Wörtern
            if (currentChunk.length > 0) {
                currentChunk += "\u00a0";
            }
            currentChunk += word;
        } else {
            if (currentChunk.length > 0) {
                // Chunk auffüllen und zur Liste hinzufügen
                while (currentChunk.length < chunkSize) {
                    currentChunk += "\u00a0";
                }
                chunks.push(currentChunk);
                currentChunk = "";
            }
            if (word.length > chunkSize) {
                // Wenn das Wort länger als chunkSize ist, direkt hinzufügen (wird abgeschnitten)
                let index = 0;
                while (index < word.length) {
                    let part = word.substring(index, index + chunkSize);
                    while (part.length < chunkSize) {
                        part += "\u00a0";
                    }
                    chunks.push(part);
                    index += chunkSize;
                }
            } else {
                currentChunk = word;
            }
        }
    });

    // Füge den letzten Chunk hinzu, falls noch vorhanden
    if (currentChunk.length > 0) {
        while (currentChunk.length < chunkSize) {
            currentChunk += "\u00a0";
        }
        chunks.push(currentChunk);
    }

    return chunks;
}

export const buildBunny = (text: string) => {
    const chunks: string[] = splitStringIntoChunks(text);

    let bunny = SIGN_TOP + NEWLINE;

    chunks.forEach((chunk: string, index) => {
        bunny += (SIGN_LEFT_BORDER + chunk + SIGN_RIGHT_BORDER + NEWLINE);
    });

    bunny += SIGN_BOTTOM + NEWLINE + BUNNY;

    return bunny;
}