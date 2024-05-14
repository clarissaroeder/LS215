function parseVersion(string) {
  let version = string.split('.').map(char => parseInt(char));

  return version;
}

function isValidVersion(version) {
  if (!version || version.match(/[^0-9.]|^\.|\.$|\.\.+/)) {
    return false;
  } else {
    return true;
  }
}

function compareVersions(version1, version2) {
  if (!isValidVersion(version1) || !isValidVersion(version2)) {
    return null;
  }
  
  parts1 = parseVersion(version1);
  parts2 = parseVersion(version2);

  let maxLength = Math.max(parts1.length, parts2.length);

  for (let i = 0; i < maxLength; i++) {
    let value1 = parts1[i] || 0;
    let value2 = parts2[i] || 0;

    if (value1 > value2) {
      return 1;
    } else if (value1 < value2) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1