import fs from 'node:fs'
import download from 'download-git-repo'
import ora from 'ora'
const spinner = ora('正在下载模板...')

export const checkPath = (path) => {
  return fs.existsSync(path)
}

export const downloadTemplate = (branch, project) => {
  spinner.start()
  const gitUrl = `direct:git@github.com:h1456796723/hz-admin.git#${branch}`
  return new Promise((resolve, reject) => {
    download(gitUrl, project, { clone: true }, err => {
      if (err) {
        reject(err)
        console.log(err, 'error')
      }
      resolve()
      spinner.succeed('下载成功')
    })
  })
}