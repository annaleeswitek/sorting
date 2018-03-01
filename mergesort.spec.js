describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
});

//single items

describe('Merge Sort', function(){
  it('handles a single item array', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });
});

//two items
describe('Merge Sort', function(){
  it('handles two item array', function(){
    expect( mergeSort([2,1]) ).toEqual( [1,2] );
  });
});

//six itmes

describe('Merge Sort', function(){
  it('handles multiple item array', function(){
    expect( mergeSort([6,1,4,3,5,2]) ).toEqual( [1,2,3,4,5,6] );
  });
});

// reverse order array

describe('Merge Sort', function(){
  it('handles multiple item array', function(){
    expect( mergeSort([10,9,8,7,6,5,4,3,2,1]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
  });
});

// small and big numbers

describe('Merge Sort', function(){
  it('handles positive and negative numbers', function(){
    expect( mergeSort([-50, 50, 100, -1, -100, 1]) ).toEqual( [-100, -50, -1, 1, 50, 100] );
  });
});
