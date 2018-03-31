const { readFileSync } = require('fs');
const { resolve } = require('path');
const tempDir = require('temp-dir');
const { saveFile, readFile, isFile } = require('./utils');

let fileContent = '';

describe('utils tests', () => {
  beforeAll(() => {
    fileContent = readFileSync('./src/utils.js', 'utf8');
  });

  it('should read file content', async () => {
    expect.assertions(2);
    const content = await readFile('./src/utils.js', 'utf8');
    expect(typeof content).toBe('string');
    expect(content).toEqual(fileContent);
    return content;
  });

  it('should save file with content', async () => {
    expect.assertions(2);

    const content = 'hello world';
    const path = resolve(tempDir, 'bablyfill.txt');
    const result = await saveFile(path, content);
    // console.log('path', path);
    expect(isFile(path)).toBeTruthy();

    const c = await readFile(path, 'utf8');
    expect(c).toEqual(content);

    return result;
  });
});
