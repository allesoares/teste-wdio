# Automação Android com Appium

Neste exercício, automatizei o login demonstrativo do [WDIO Demo App 2.2.0](https://github.com/webdriverio/native-demo-app/releases/tag/v2.2.0) em um emulador Android. Usei Appium com WebdriverIO e Mocha, separando as ações da tela das validações dos testes.

## Cenários

- Login válido: conferir `Success`, a mensagem `You are logged in!` e o fechamento do alerta.
- E-mail inválido: conferir `Please enter a valid email address` abaixo do campo e a ausência de alerta de sucesso.

O aplicativo demonstra o comportamento da tela de login, sem autenticação real. Os seletores e as ações estão em [login.screen.js](test/screenobjects/login.screen.js), e as verificações em [login.e2e.js](test/specs/login.e2e.js).

## Como executar

Tenha Node.js, JDK com `JAVA_HOME` e Android SDK configurados. Appium e UiAutomator2 são dependências do projeto. A configuração usa o emulador `nightwatch-android`, com Android 11; ajuste [wdio.conf.js](wdio.conf.js) se o seu ambiente for diferente. O Appium Inspector pode ser usado para inspecionar os elementos.

Baixe o APK 2.2.0 e coloque `android.wdio.native.app.v2.2.0.apk` na pasta `app/`. No PowerShell, na raiz do projeto:

```powershell
npm ci
$env:ANDROID_HOME = 'D:\Android\Sdk'
$env:ANDROID_AVD_HOME = 'D:\Android\avd'
npm test
```

Os caminhos acima são os usados no meu ambiente; ajuste-os ao seu SDK e emulador. O serviço do WebdriverIO inicia o Appium. O APK, as dependências e os logs ficam fora do Git.

## Evidência de execução

Trecho do reporter Spec de `npm test`, executado em 17/11/2026 no emulador `nightwatch-android` (Android 11), com o APK 2.2.0:

```text
Login no WDIO Demo App
   ✓ deve exibir confirmação ao entrar com e-mail e senha válidos
   ✓ deve exibir erro abaixo do campo ao informar e-mail inválido

2 passing (21.4s)
Spec Files: 1 passed, 1 total (100% completed) in 00:00:50
```

## Contexto

Exercício desenvolvido por Alexandre Soares durante o curso da EBAC, com a aplicação e os exemplos fornecidos nas aulas.

[Voltar ao portfólio](https://github.com/allesoares/qa-portfolio)
