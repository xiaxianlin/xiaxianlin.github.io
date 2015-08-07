# -*- coding: utf-8 -*-
# 函数式变成
import time
import functools
# 高阶函数
def add(x,y,f):
    return f(x)+f(y)

# 闭包
# 希望一次返回3个函数，分别计算1x1,2x2,3x3:
def count():
    fs = []
    for i in range(1, 4):
        def f():
            return i*i
        fs.append(f)
    return fs

#装饰函数
def new_fn(f):
    def fn(x):
        print 'call ' + f.__name__ + '()'
        return f(x)
    return fn

@new_fn
def f1(x):
    return x*2

def f2(x):
    return x*x

def f3(x):
    return x*x*x


print time.time()

def log(prefix):
    def log_decorator(f):
        @functools.wraps(f)
        def wrapper(*args, **kw):
            print '[%s] call %s()...' % (prefix, f.__name__)
            return f(*args, **kw)
        return wrapper
    return log_decorator

@log('Test')
def test():
    pass
print test.__name__