/**
 * Created by tu on 5/8/17.
 */

let diamond = (N , H) => {
     if (N < 1 || H < 1 || H % 2 === 0) {
                return 0;
            }
            let h = Math.floor(H / 2) + 1
            let width = H - 1
            for (let i = 0; i < H; i++) {
                let count = '';
                if (i < h) {
                    for (let j = 0; j < N * H - N + 1; j++) {
                        let j2 = j % width;
                        if ((j2 === h - 1 - i) || (j2 === h - 1 + i)) {
                            count += "*";
                        } else {
                            count += ' ';
                        }
                    }
                }
                else {
                    for (let j = 0; j < N * H - N + 1; j++) {
                        let j2 = j % width;
                        let tem = i - h + 1;
                        if ((j2 === tem) || (j2 === width - tem)) {
                            count += '*';
                        }
                        else {
                            count += ' ';
                        }
                    }
                }
                console.log(count);

            }

        }
diamond(3,3)