# Python's New Security Features: SHA-3, BLAKE2 and SHAKE

#### Titles?
* "Exploring the New Hashing Methods in Python 3.11: SHA-3, BLAKE2, and SHAKE"
* "Secure Hashing with Python 3.11: An Introduction to SHA-3, BLAKE2, and SHAKE"
* "Python 3.11's hashlib Module: A Deep Dive into SHA-3, BLAKE2, and SHAKE"
* "Upgrading Your Hashing Game with Python 3.11's SHA-3, BLAKE2, and SHAKE"
* "Python 3.11 Brings New Security Features: A Look at SHA-3, BLAKE2, and SHAKE in hashlib"

<hr/>

### intro paragraph

This article was prompted by an article from Real Python that discusses pickling python objects and the possible security risks.

### the body

The latest versions of Python 3.8+ introduced new hashing methods to the hashlib module, including SHA-3, BLAKE2, and SHAKE. These algorithms provide developers with more options for secure hashing and message digest generation.

SHA-3 is the latest member of the Secure Hash Algorithm family of standards, released by NIST. It is considered to be more secure than SHA-2, due to its resistance to length extension attacks. This makes it more difficult to attack a message that produces the same hash as another message, making it more secure for verifying the integrity of data.

Why is that important?  pickle encoding...

BLAKE2 is an independent hash function based on the same design principles as SHA-3. It is considered to be secure and efficient, with some implementations being faster than SHA-3 on certain platforms.

SHAKE is a family of hash functions that are part of the SHA-3 standard. They are extendable-output functions (XOFs), which means that they can produce output of arbitrary length. This makes them useful for applications that require a variable-length output, such as key derivation or data compression.

In Python 3.11, these new hashing methods are available through the hashlib module. The constructors for these algorithms are always present in the module and include sha3_224(), sha3_256(), sha3_384(), sha3_512(), shake_128(), shake_256(), blake2b(), and blake2s().

### sidebar

The Secure Hash Algorithm-3 (SHA-3) family of functions as documented in [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf) published August 2015, outline the latest generation of cryptographic hash functions called SHA3-224, through SHA3-512 plus two extedable output functions (XOFs) SHAKE128 and SHAKE256.  BLAKE2...


## Using SHA-3

Here's an example of how to use these new hashing methods:

```
import hashlib
message = b"Good day, planet earth!"
hash_object = hashlib.sha3_256()
hash_object.update(message)
hashed = hash_object.hexdigest()
print(f'{hashed=}, length: {len(hashed}')

# Using BLAKE2
message = b"Hello, San Francisco Bay Area!"
hash_object = hashlib.blake2s()
hash_object.update(message)
print(hash_object.hexdigest())

# Using SHAKE
message = b"Howdy friend!"
hash_object = hashlib.shake_256()
hash_object.update(message)
print(hash_object.hexdigest(4))
```

These new hashing methods provide developers with more options for secure hashing and message digest generation in Python 3.11. Whether you need a fixed-length output or a variable-length output, there is now a suitable algorithm available in the hashlib module.

Source: Conversation with Bing, 8/31/2023
(1) hashlib — Secure hashes and message digests - Python. https://docs.python.org/3/library/hashlib.html.
(2) pysha3 · PyPI. https://pypi.org/project/pysha3/.
(3) undefined. https://github.com/gvanas/KeccakCodePackage.

--- shake use cases ---
SHAKE is an Extendable-Output Function (XOF) that is part of the SHA-3 family of hash functions. It supports variable-length outputs, making it useful for applications that require a variable-length output, such as key derivation or data compression⁵. SHAKE can also be used as a Key Derivation Function (KDF), a Pseudo-Random Number Generator (PRNG), or a stream cipher⁵. Additionally, SHAKE can be used in the Cryptographic Message Syntax (CMS) as a one-way hash function with the RSA Probabilistic Signature Scheme (RSASSA-PSS) and Elliptic Curve Digital Signature Algorithm (ECDSA)². The flexibility and security of SHAKE make it a versatile tool for various cryptographic applications.

Source: Conversation with Bing, 8/31/2023
(1) SHAKE, cSHAKE and some more bit ordering - Cryptologie. https://cryptologie.net/article/388/shake-cshake-and-some-more-bit-ordering/.
(2) RFC 8702 - Use of the SHAKE One-Way Hash Functions in the Cryptographic .... https://datatracker.ietf.org/doc/html/rfc8702.
(3) Hash Functions | CSRC. https://csrc.nist.gov/projects/hash-functions.
(4) SHAKE - Crypto++ Wiki. https://cryptopp.com/wiki/SHAKE.
(5) Applications of Hashing - GeeksforGeeks. https://www.geeksforgeeks.org/applications-of-hashing/.

Properties
Assignees

Add assignees…
Status

In Progress
Convert to issue
Copy link in project
Archive
Delete from project
@darrylwest's publications
View 1
Filter by keyword or by field
Todo
0
 (0)
This item hasn't been started
In Progress
2
 (2)
This is actively being worked on
decoding the art of time estimation: A programmer's playbook.
python's new (ish) hashlib algorithms
Done
0

 (0)
This has been completed

### Practical Uses

* pickle encoding
* rpc communications
* any sensitive message

