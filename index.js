        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('.sw.js', {
                scope: '/'
            }).then(() => {
            location.reload();
            })
        }
