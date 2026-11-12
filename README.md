# Módulo 26 — Automação mobile

Exercício de automação Android com WebdriverIO, Appium e Mocha no [WDIO Demo App](https://github.com/webdriverio/native-demo-app/releases/tag/v2.2.0).

O teste acessa Login, informa e-mail e senha e valida o título `Success` e a mensagem `You are logged in!`. Trata-se do login demonstrativo do app, sem autenticação real. Os seletores e as ações ficam em `test/screenobjects/login.screen.js`; as asserções, em `test/specs/login.e2e.js`.

Pré-requisitos: Node.js, JDK com `JAVA_HOME`, Android Studio/SDK, Appium Inspector e emulador `nightwatch-android` com Android 11. Appium e UiAutomator2 são dependências do projeto.

Coloque `android.wdio.native.app.v2.2.0.apk` em `app/` e execute no PowerShell, na pasta do projeto:

```powershell
npm ci
$env:ANDROID_HOME = 'D:\Android\Sdk'
$env:ANDROID_AVD_HOME = 'D:\Android\avd'
npm test
```

Ajuste os caminhos ao seu ambiente. O serviço do WebdriverIO inicia o Appium. O APK, as dependências e os logs são ignorados pelo Git; mantenha o `package-lock.json` versionado.
