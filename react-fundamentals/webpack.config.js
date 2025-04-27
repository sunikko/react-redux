const HtmlWebpackPlugin = require('html-webpack-plugin'); // html 변환 프로그램
const path = require('path'); // 경로를 쉽게 설정하기 위해서

module.exports = {
    mode: 'development', //개발중 아니면 최종 파일
    entry: './src/app.js', // 입력
    output: { //출력
        path: path.resolve(__dirname, 'dist'), // 변환된 파일이 저장될 경로
        filename: 'bundle.js', // 변환된 파일
    },
    module: { //소프트웨러 변환과정 - 프로그램들에게 입력정보 넘겨줘
        rules: [
            {
                test: /\.js$/, // 변환할 파일의 확장자
                exclude: /node_modules/, // 변환하지 않을 파일
                use: {
                    loader: 'babel-loader', // 변환 프로그램
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // 변환할 프로그램
                    },
                },
            },
        ],
    },
    plugins: [ // 변환된거를 - 마즈막 변환 프로그램에 넣어서 출력값 가공
        new HtmlWebpackPlugin({
            template: './index.html', // 변환할 파일
            title: 'My React App', // 변환된 파일의 제목})
        }),
    ],
}