const envCi = require('env-ci');

const {name, service, isCi, branch, commit, tag, build, buildUrl, job, jobUrl, isPr, pr, prBranch, slug, root} = envCi();

if (isCI) {
  console.log(`Building repo ${slug} on ${name} service`);

  if (isPr) {
    console.log(`Building Pull Request #${pr} originating from branch ${prBranch} and targeting branch ${branch}`);
  } else {
    console.log(`Building branch ${branch}`);
  }

  if (service === 'travis') {
    // Do something specific to Travis CI
  }
}
