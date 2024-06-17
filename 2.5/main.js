const fs = require('fs');
const path = require('path');

function displayDirectoryContents(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('Помилка читання каталогу:', err);
      return;
    }

    console.log('Вміст каталогу:', dirPath);
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Помилка отримання інформації про файл:', err);
          return;
        }
        const isDirectory = stats.isDirectory();
        const prefix = isDirectory ? '[D]' : '[F]';
        console.log(`${prefix} ${file}`);
      });
    });
  });
}

function changeDirectory(newPath) {
  try {
    process.chdir(newPath);
    console.log(`Поточна директорія: ${process.cwd()}`);
  } catch (err) {
    console.error('Неправильний шлях. Спробуйте ще раз.');
  }
}

function createFile(fileName) {
  fs.writeFile(fileName, '', err => {
    if (err) {
      console.error('Помилка створення файлу:', err);
    } else {
      console.log(`Створено файл: ${fileName}`);
    }
  });
}

function createDirectory(dirName) {
  fs.mkdir(dirName, err => {
    if (err) {
      console.error('Помилка створення каталогу:', err);
    } else {
      console.log(`Створено каталог: ${dirName}`);
    }
  });
}

function viewFile(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Помилка читання файлу:', err);
    } else {
      console.log(`Вміст файлу ${fileName}:\n${data}`);
    }
  });
}

function editFile(fileName) {
  const content = `${fs.readFileSync(fileName, 'utf8')}\n${prompt('Введіть вміст для додавання до файлу:')}`;
  fs.writeFile(fileName, content, err => {
    if (err) {
      console.error('Помилка запису файлу:', err);
    } else {
      console.log(`Файл ${fileName} відредаговано.`);
    }
  });
}

function renameFile(oldName, newName) {
  fs.rename(oldName, newName, err => {
    if (err) {
      console.error('Помилка перейменування файлу:', err);
    } else {
      console.log(`Файл ${oldName} перейменовано на ${newName}.`);
    }
  });
}

function deleteFile(fileName) {
  fs.unlink(fileName, err => {
    if (err) {
      console.error('Помилка видалення файлу:', err);
    } else {
      console.log(`Файл ${fileName} видалено.`);
    }
  });
}

function fileInfo(fileName) {
  fs.stat(fileName, (err, stats) => {
    if (err) {
      console.error('Помилка отримання інформації про файл:', err);
    } else {
      console.log(`Інформація про файл ${fileName}:`);
      console.log(`Розмір: ${stats.size} байт`);
      console.log(`Власник: ${stats.uid}`);
      console.log(`Права доступу: ${stats.mode}`);
    }
  });
}

function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const showMenu = () => {
    console.log('\nФайловий менеджер');
    console.log('1. Перегляд вмісту каталогу');
    console.log('2. Перехід до каталогу');
    console.log('3. Створити файл');
    console.log('4. Створити каталог');
    console.log('5. Переглянути вміст файлу');
    console.log('6. Редагувати файл');
    console.log('7. Перейменувати файл');
    console.log('8. Видалити файл');
    console.log('9. Інформація про файл');
    console.log('0. Вихід');

    readline.question('Виберіть опцію: ', choice => {
      switch (choice) {
        case '1':
          displayDirectoryContents(process.cwd());
          showMenu();
          break;
        case '2':
          readline.question('Введіть шлях: ', path => {
            changeDirectory(path);
            showMenu();
          });
          break;
        case '3':
          readline.question('Введіть назву файлу: ', fileName => {
            createFile(fileName);
            showMenu();
          });
          break;
        case '4':
          readline.question('Введіть назву каталогу: ', dirName => {
            createDirectory(dirName);
            showMenu();
          });
          break;
        case '5':
          readline.question('Введіть назву файлу: ', fileName => {
            viewFile(fileName);
            showMenu();
          });
          break;
        case '6':
          readline.question('Введіть назву файлу: ', fileName => {
            editFile(fileName);
            showMenu();
          });
          break;
        case '7':
          readline.question('Введіть поточну назву файлу: ', oldName => {
            readline.question('Введіть нову назву файлу: ', newName => {
              renameFile(oldName, newName);
              showMenu();
            });
          });
          break;
        case '8':
          readline.question('Введіть назву файлу: ', fileName => {
            deleteFile(fileName);
            showMenu();
          });
          break;
        case '9':
          readline.question('Введіть назву файлу: ', fileName => {
            fileInfo(fileName);
            showMenu();
          });
          break;
        case '0':
          readline.close();
          break;
        default:
          console.log('Невірний вибір. Спробуйте ще раз.');
          showMenu();
      }
    });
  };

  showMenu();
}

main();