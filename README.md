## Usage

1. Download zip and place it inside your app folder.
```javascript
"dependencies": {
    "nativescript-epub-reader":"file:nativescript-epub-reader"
}
```


2. Add this to App_Resources Android app.gradle
```javascript
android {
    defaultConfig {
        multiDexEnabled true
    }

    compileOptions {
        sourceCompatibility = 1.8
        targetCompatibility = 1.8
    }
}
```