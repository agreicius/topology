var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "meta_frontmatter-2",
  "level": "1",
  "url": "meta_frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets and functions",
  "body": " Sets and functions    We gather here some notions about sets and functions.    Sets   sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .      The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.    With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .      Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .      Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection    set union     set intersection   sets complement  sets difference      set difference     set complement    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      With the help of these set operations, we can now describe some common sets used in mathematics.   sets empty set     the empty set   real numbers    real numbers   integers    integers     positive integers   rational numbers    rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .  The set of all positive integers is denoted .    The power set of a set is the set of all subsets of . We will make use of this notion in our very first definition ( ).   power set    power set of   Power set   Given a set , its power set  is defined as the set of all subsets of .     Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .    Lastly, we define the cartesian product of sets, which is a formal description of an ordered collection of objects.   Cartesian product finite      Cartesian product   Cartesian product (finite)   An -tuple (or sequence ) of the sets is an ordered list such that for all . We define two -tuples , and to be equal, denoted , if for all . We call the length of the sequence , and we call its -th entry for all .  The (Cartesian) product of the sets , denoted or , is the set of all -tuples: , .  Given a set , its -ary Cartesian product  is defined as .      We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.      Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.    The notion of a Cartesian product can be generalized to an infinite list of sets , and indeed to any collection indexed by a set .   tuple arbitrary    -tuple   I-tuple   Let and be sets. An -tuple with entries (or coordinates) in is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .     Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples with coordinates in whose -th coordinate is an element of for all .  In the special case where for all , we denote as .      Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function       Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .    As with sets and tuples, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .    Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.       Cardinality and countability   Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.    Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.       "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion (subsets).",
  "body": " Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": "  The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.   "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "",
  "body": "  Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .   "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection    set union     set intersection   sets complement  sets difference      set difference     set complement    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .     "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " sets empty set     the empty set   real numbers    real numbers   integers    integers     positive integers   rational numbers    rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .  The set of all positive integers is denoted .   "
},
{
  "id": "d_power_set",
  "level": "2",
  "url": "s_sets_functions.html#d_power_set",
  "type": "Definition",
  "number": "0.1.10",
  "title": "Power set.",
  "body": " power set    power set of   Power set   Given a set , its power set  is defined as the set of all subsets of .   "
},
{
  "id": "eg_power_set",
  "level": "2",
  "url": "s_sets_functions.html#eg_power_set",
  "type": "Example",
  "number": "0.1.11",
  "title": "Power set.",
  "body": " Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .   "
},
{
  "id": "d_cartesian_product",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product",
  "type": "Definition",
  "number": "0.1.12",
  "title": "Cartesian product (finite).",
  "body": " Cartesian product finite      Cartesian product   Cartesian product (finite)   An -tuple (or sequence ) of the sets is an ordered list such that for all . We define two -tuples , and to be equal, denoted , if for all . We call the length of the sequence , and we call its -th entry for all .  The (Cartesian) product of the sets , denoted or , is the set of all -tuples: , .  Given a set , its -ary Cartesian product  is defined as .   "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_sets_functions.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.1.13",
  "title": "",
  "body": "  We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.   "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.1.14",
  "title": "",
  "body": "  Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.   "
},
{
  "id": "d_Ituple",
  "level": "2",
  "url": "s_sets_functions.html#d_Ituple",
  "type": "Definition",
  "number": "0.1.15",
  "title": "I-tuple.",
  "body": " tuple arbitrary    -tuple   I-tuple   Let and be sets. An -tuple with entries (or coordinates) in is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .   "
},
{
  "id": "d_cartesian_product_arbitrary",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product_arbitrary",
  "type": "Definition",
  "number": "0.1.16",
  "title": "Cartesian product (arbitrary).",
  "body": " Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples with coordinates in whose -th coordinate is an element of for all .  In the special case where for all , we denote as .   "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_sets_functions.html#d_function",
  "type": "Definition",
  "number": "0.1.17",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "ss_functions-3",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-3",
  "type": "Example",
  "number": "0.1.18",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "ss_functions-4",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-4",
  "type": "Example",
  "number": "0.1.19",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_sets_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.1.20",
  "title": "",
  "body": "  Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.1.21",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_sets_functions.html#d_image",
  "type": "Definition",
  "number": "0.1.22",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_preimage_of_set",
  "level": "2",
  "url": "s_sets_functions.html#d_preimage_of_set",
  "type": "Definition",
  "number": "0.1.23",
  "title": "Preimage of set.",
  "body": " Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_sets_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.1.24",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "ss_functions-11",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-11",
  "type": "Example",
  "number": "0.1.25",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_sets_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.1.26",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_sets_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.1.27",
  "title": "Identity and inverse functions.",
  "body": " function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .  "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_sets_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.1.28",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_sets_functions.html#d_cardinality",
  "type": "Definition",
  "number": "0.1.29",
  "title": "Cardinality.",
  "body": " Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.    Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.     "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.2",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.         A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:       Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.      Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.    Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .       Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.     Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.     Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.     The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.2.2",
  "title": "",
  "body": "  A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:    "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.2.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": "  Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.2.5",
  "title": "",
  "body": "  Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .     "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.2.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.   "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.2.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.2.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.2.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.2.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.3",
  "title": "Proof techniques",
  "body": " Proof techniques  Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.   Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)    The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )      Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)   Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).    It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.    The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.  Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .      Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.       Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .  Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  By , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .    By The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .   Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      mathematical induction  Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    mathematical induction weak induction  Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.     Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          mathematical induction strong induction  Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.3.1",
  "title": "",
  "body": "  The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )   "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.3.2",
  "title": "",
  "body": "  It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.3.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.3.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.3.5",
  "title": "",
  "body": "  Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.   "
},
{
  "id": "sss_chain_equalities-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-4",
  "type": "Warning",
  "number": "0.3.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-3-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-5-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.3.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.   "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.3.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.3.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.3.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_top_spaces",
  "level": "1",
  "url": "s_top_spaces.html",
  "type": "Section",
  "number": "1.1",
  "title": "Topological spaces",
  "body": " Topological spaces  The real numbers come equipped with a notion of nearness or closeness furnished by the absolute value function: namely, we define the distance between real numbers as . From this simple bit of structure springs all the fundamental concepts of real analysis: Cauchy sequences, limits, continuous functions, etc.  Topology can be seen as a vast generalization of this notion that abstracts away from the absolute value function, relying instead on the more abstract idea of open sets . Indeed, the notion of openness is introduced already in real analysis: a set is open if for all there is an such that if , then . Intuitively, you can think of this property as stating that has a certain roomy or generous nature: if , and is sufficiently close to , then has room for too. Come on in!  We view the the three conditions of as an attempt at axiomatizing this notion of openness (or roominess). This is the starting point of topology. The generality of this approach is part of topology's great power. We can define a notion of open sets on any set whatsoever: , we can choose a collection of subsets (called a topology ) that satisfies the axioms of . Furthermore, for a given set there are typically many distinct ways of making this choice; your topology on can be tailor-made to suit your particular needs. Beyond this generality and flexibility, the other key to topology's effectiveness is its ability to transport to any topological space the concepts of continuity, limits, connectedness, and compactness familiar to us from real analysis. Once a set is given the structure of a topological space, these notions can be used as powerful tools for investigating its properties. It is for this reason that topology plays an important role in essentially all mathematical fields: analysis, geometry, algebraic geometry, number theory, etc.   Topological space   A topological space is a pair , where is a set, and is a collection of subsets of satisfying the following axioms:   Trivial sets   and     Closed under arbitrary unions  Given any collection of elements , we have     Closed under finite intersections  If , then .   In this case we call a topology on , and an element is called an open set of . Although technically speaking a topological space is a pair , we often omit mention of the topology if there is no risk of confusion.     Finite intersection of open sets  Let be a topological space. Axiom (3) of says that the intersection of any two open sets of is again open. It follows easily by induction that the intersection of any finite list of open sets is open. In other words: .    Standard topology on  Let and define to be the collection of subsets satisfying the following property: for all there is an such that . The collection is a topology, called the standard topology on .   We treat each axiom of in turn.   The empty set satisfies the defining property of trivially. Thus . For any , we have . Thus .    Assume for all , and let . We have . This shows satisfies the defining property of , and hence .    Assume , and let . Since and is open, we have for some ; similarly, we have have for some . Letting , we have . Thus , as desired.        Trivial and discrete topology  Let be a set.   The collection is a topology on , called the trivial topology . This is the topology on whose only open sets are the empty set and itself.    The collection is a topology on , called the discrete topology . This is the topology on for which every subset of is an open set.         Let . By definition the given contains and , and thus axiom (1) is satisfied. Since any union or intersection involving and is equal to either or , it is clear that is closed under arbitrary unions and finite intersections. Thus axioms (2)-(3) are satisfied.    Let . By definition, is the set of all subsets of . In particular, it contains and , and thus axioms (1) is satisfied. Furthermore, since any union or intersection of subsets of is again a subset of , we see that axioms (2)-(3) are satisfied.        Some small topological spaces   For each set describe all subsets that satisfy the axioms of , and hence make a topological space.   Empty set       Singleton       Doubleton             When , we have . Since by axiom (1) a topology on must contain both and , we see the only option is . We showed that is always a topology on in . Thus is the unique choice of topology for . (Note: in this case the trivial and discrete topologies are equal.)    When , we have . Since by axiom (1) a topology on must contain both and , we see the only option is , which again is none other than the discrete topology. We conclude that is the unique topology on . (Note: again in this case the trival and discrete topologies are equal.)    When , we have . By axiom (1) a topology must contain and . It follows that there are exactly four possibilities for based on whether the sets and are elements of : i.e., the only possibilities are . These are the four subsets of that satisfy axiom (1). It is now straightforward to show that each of these choices also satisfies axioms (2) and (3). Thus there are exactly 4 distinct topologies we can define on .        Cofinite topology  Let be a set. A subset is cofinite in if is finite. The collection of subsets is a topology, called the cofinite topology . In this topology a subset is open if and only if it is either empty or cofinite.   We treat each axiom separately.   We must show . That is specified explicitly in the definition of . Next since is finite, the set is cofinite in , and hence an element of .    Let be any collection of elements of : , for all we have or is cofinite in . Let . If for all , then . Otherwise there is an such that is nonempty, hence cofinite. We have . Since is finite, it follows that is finite. It follows that is cofinite, and hence an element of as desired.    Let , and let . We have . Since is either finite or equal to all of for , it is clear that is either finite or equal to . It follows that is either cofinite or empty, and hence an element of .        Comparable topologies  coarser topology  finer topology  comparable topologies   Two topologies on the set are comparable if or , and incomparable otherwise. If , we say that is coarser than , and that is finer than . When we say that is strictly coarser than and is strictly finer than .     Comparing trivial, discrete, cofinite topologies   Let be a set, and let be the trivial, discrete, and cofinite topologies on , respectively. Compare these topologies.    First observe that in general the trivial topology on is coarser than any other topology, since by definition a topology must contain and . Similarly the discrete topology is finer than any other topology, since by definition any topology is a subset of . Thus we always have . The question naturally arises, whether and\/or when these inclusions are strict. We consider a number of cases.   Case:  In this case or (a singleton), in which case it is easy to see that . (Note: when , we have .)    Case: finite, . Since is finite, it follows that all subsets of are cofinite, and hence that . Since , we have . It follows that in this case we have .    Case: infinite  Let be any finite nonempty subset of . Since is infinite and , it follows that must be infinite, and hence that is not cofinite. We conclude that and . Thus in this case. Next, fix in any element and let . It is clear (a) that is cofinite, and (b) that is not equal to or . Thus and , proving that . We conclude that in this case.     "
},
{
  "id": "d_top",
  "level": "2",
  "url": "s_top_spaces.html#d_top",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Topological space.",
  "body": " Topological space   A topological space is a pair , where is a set, and is a collection of subsets of satisfying the following axioms:   Trivial sets   and     Closed under arbitrary unions  Given any collection of elements , we have     Closed under finite intersections  If , then .   In this case we call a topology on , and an element is called an open set of . Although technically speaking a topological space is a pair , we often omit mention of the topology if there is no risk of confusion.   "
},
{
  "id": "rm_def_top",
  "level": "2",
  "url": "s_top_spaces.html#rm_def_top",
  "type": "Remark",
  "number": "1.1.2",
  "title": "Finite intersection of open sets.",
  "body": " Finite intersection of open sets  Let be a topological space. Axiom (3) of says that the intersection of any two open sets of is again open. It follows easily by induction that the intersection of any finite list of open sets is open. In other words: .  "
},
{
  "id": "top_eq_standard_R",
  "level": "2",
  "url": "s_top_spaces.html#top_eq_standard_R",
  "type": "Topological specimen",
  "number": "1",
  "title": "Standard topology on <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Standard topology on  Let and define to be the collection of subsets satisfying the following property: for all there is an such that . The collection is a topology, called the standard topology on .   We treat each axiom of in turn.   The empty set satisfies the defining property of trivially. Thus . For any , we have . Thus .    Assume for all , and let . We have . This shows satisfies the defining property of , and hence .    Assume , and let . Since and is open, we have for some ; similarly, we have have for some . Letting , we have . Thus , as desired.      "
},
{
  "id": "top_eg_trivial_discrete",
  "level": "2",
  "url": "s_top_spaces.html#top_eg_trivial_discrete",
  "type": "Topological specimen",
  "number": "2",
  "title": "Trivial and discrete topology.",
  "body": " Trivial and discrete topology  Let be a set.   The collection is a topology on , called the trivial topology . This is the topology on whose only open sets are the empty set and itself.    The collection is a topology on , called the discrete topology . This is the topology on for which every subset of is an open set.         Let . By definition the given contains and , and thus axiom (1) is satisfied. Since any union or intersection involving and is equal to either or , it is clear that is closed under arbitrary unions and finite intersections. Thus axioms (2)-(3) are satisfied.    Let . By definition, is the set of all subsets of . In particular, it contains and , and thus axioms (1) is satisfied. Furthermore, since any union or intersection of subsets of is again a subset of , we see that axioms (2)-(3) are satisfied.      "
},
{
  "id": "s_top_spaces-9",
  "level": "2",
  "url": "s_top_spaces.html#s_top_spaces-9",
  "type": "Example",
  "number": "1.1.3",
  "title": "Some small topological spaces.",
  "body": " Some small topological spaces   For each set describe all subsets that satisfy the axioms of , and hence make a topological space.   Empty set       Singleton       Doubleton             When , we have . Since by axiom (1) a topology on must contain both and , we see the only option is . We showed that is always a topology on in . Thus is the unique choice of topology for . (Note: in this case the trivial and discrete topologies are equal.)    When , we have . Since by axiom (1) a topology on must contain both and , we see the only option is , which again is none other than the discrete topology. We conclude that is the unique topology on . (Note: again in this case the trival and discrete topologies are equal.)    When , we have . By axiom (1) a topology must contain and . It follows that there are exactly four possibilities for based on whether the sets and are elements of : i.e., the only possibilities are . These are the four subsets of that satisfy axiom (1). It is now straightforward to show that each of these choices also satisfies axioms (2) and (3). Thus there are exactly 4 distinct topologies we can define on .      "
},
{
  "id": "top_eg_cofinite",
  "level": "2",
  "url": "s_top_spaces.html#top_eg_cofinite",
  "type": "Topological specimen",
  "number": "3",
  "title": "Cofinite topology.",
  "body": " Cofinite topology  Let be a set. A subset is cofinite in if is finite. The collection of subsets is a topology, called the cofinite topology . In this topology a subset is open if and only if it is either empty or cofinite.   We treat each axiom separately.   We must show . That is specified explicitly in the definition of . Next since is finite, the set is cofinite in , and hence an element of .    Let be any collection of elements of : , for all we have or is cofinite in . Let . If for all , then . Otherwise there is an such that is nonempty, hence cofinite. We have . Since is finite, it follows that is finite. It follows that is cofinite, and hence an element of as desired.    Let , and let . We have . Since is either finite or equal to all of for , it is clear that is either finite or equal to . It follows that is either cofinite or empty, and hence an element of .      "
},
{
  "id": "d_comparable_topologies",
  "level": "2",
  "url": "s_top_spaces.html#d_comparable_topologies",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Comparable topologies.",
  "body": " Comparable topologies  coarser topology  finer topology  comparable topologies   Two topologies on the set are comparable if or , and incomparable otherwise. If , we say that is coarser than , and that is finer than . When we say that is strictly coarser than and is strictly finer than .   "
},
{
  "id": "s_top_spaces-12",
  "level": "2",
  "url": "s_top_spaces.html#s_top_spaces-12",
  "type": "Example",
  "number": "1.1.5",
  "title": "Comparing trivial, discrete, cofinite topologies.",
  "body": " Comparing trivial, discrete, cofinite topologies   Let be a set, and let be the trivial, discrete, and cofinite topologies on , respectively. Compare these topologies.    First observe that in general the trivial topology on is coarser than any other topology, since by definition a topology must contain and . Similarly the discrete topology is finer than any other topology, since by definition any topology is a subset of . Thus we always have . The question naturally arises, whether and\/or when these inclusions are strict. We consider a number of cases.   Case:  In this case or (a singleton), in which case it is easy to see that . (Note: when , we have .)    Case: finite, . Since is finite, it follows that all subsets of are cofinite, and hence that . Since , we have . It follows that in this case we have .    Case: infinite  Let be any finite nonempty subset of . Since is infinite and , it follows that must be infinite, and hence that is not cofinite. We conclude that and . Thus in this case. Next, fix in any element and let . It is clear (a) that is cofinite, and (b) that is not equal to or . Thus and , proving that . We conclude that in this case.    "
},
{
  "id": "s_bases_top",
  "level": "1",
  "url": "s_bases_top.html",
  "type": "Section",
  "number": "1.2",
  "title": "Topological basis",
  "body": " Topological basis   When defining a topology for a set it is often convenient to specify instead a more manageable subset of that we can use to generate the entire topology using arbitrary unions and\/or finite intersections (our open set operators). A topological basis is a particularly nice example of this ( ) as the open sets of the topology it generates can be expressed as (arbitrary) unions of the basis elements. Bases will also provide a convenient way of comparing different topologies and (later on) determining whether relevant topological properties are satisfied by a given space.    Topological basis  Let be a set. A topological basis on is a collection of subsets of satisfying the following axioms:   Covers  For each there is a set such that .    Intersections covered by basis elements  If , then for all there is a such that .   When the context is clear, we usually shorten topological basis to basis .    Equivalent alternative to axiom (2)   Axiom (2) in is equivalent to saying that is equal to a union of elements of . In other words, we could replace (2) with the equivalent statement . This is a consequence of the more general fact expressed in .     Covering principle   Let be a collection of subsets of , and let . The following statements are equivalent.     for some sets . (In other words, is a union of elements of .)    For all there exists a set such that .       Implication:  Suppose for some sets . Given any we have for some . Since , we are done.    Implication:  By assumption, for all we can find a set such that . It follows that , showing that is a union of elements of .      Some bases for   Show that the given collections are topological bases of .                     It is clear that each collection of interval types covers in the sense of axiom (1). As for axiom (2), for each , , note that intersection of these types of intervals are either empty, or another interval of the same type. This is a result of the fact that , where the interval described on the right is understood to be the empty set if .     Topology generated by basis   Let be a topological basis of the set .   The set is a topology on .    We have .       Note: it is somewhat easier to show that is a topology using the description of in statement (1), and then to show that the description in statement (2) also holds. (This is how Munkres does it, and how I did it in class.) I've decided to go the hard way here as an alternative proof that puts us through some useful set theory calisthenics.  First we show that as defined in (2) is a topology. We treat each axiom separately.    The empty set is the empty union of elements of ; thus . The covering axiom for bases implies that for all there is a such that . It follows that is a union of elements of , and thus that .    In plain English, a union of unions of elements of is a union of elements of . More rigorously, assume we have a collection of . By definition, for each we have , where for each . Thus , where is the set of all pairs of the form for and . Thus is a union of basis elements, and hence an element of .    It is enough to show that . (See .) Assume , , where for all . We have . Now by axiom (2') for bases (see ), each is a union of basis elements, and hence is an element . We have already shown that is closed under arbitrary unions. Thus is an element of .    This shows that , as defined in statement (2) of the theorem, is a topology. Statement (1) now follows from the general claim made in .     Topology generated by basis   Let be a topological basis of the set . The topology is called the topology generated by the basis . Similarly, we call a basis for .     Comparing topologies via basis   Let and be topologies on and assume that is generated by the basis . We have .    Observe first that basis elements are open in the topology , essentially by definition: , we have . The forward implication follows easily, since and implies .  Now consider the reverse implication . Assume . Given an open set we have for some by . Since for all (by assumption), and since is closed under arbitrary unions, we conclude . This proves , as desired.     A basis for the standard topology on   Show that the standard topology on  is the topology generated by the basis in .    Let be the topology generated by and let be the standard topology on  . Since every open interval is open in each element of is an element of . By , we have . Next, take any open set ; then by definition for all there exists such that . It follows that by . This proves , and thus that , as desired.     Multiple bases for the standard real topology   Show that the bases from both generate the standard topology on .    Let be the topology generated by , . We must show that and . Clearly any is an element of , and hence an element of . It follows from that . Next, take any . Since the rational numbers are dense in , for any we can find satisfying . From it follows that for all and hence that by .    As it turns out, the basis of generates a nonstandard topology of . Accordingly, we give this basis (and its corresponding topology) an official name.   Lower limit topology  The collection is a topological basis of called the lower limit basis , and the topology it generates is called the lower limit topology on . We denote the topological space as .    Lower limit is finer than standard   Show that the lower limit topology on is strictly finer than the standard one.    Let be the Euclidean and lower limit topologies, respectively. According to , to show we must show that for any basis element and any , there is a basis element satisfying . Since , we have , and thus we have , as desired.  To show is strictly finer than it suffices to find a basis element that is not an element of . I claim . Indeed, consider . Any open set containing must contain negative numbers, and hence does not satisfy . It follows that is not an element of .     -topology  Let , and define . The collection is a basis in . The topology it generates is called the -topology on . We denote the topological space as .   We show that is a basis, treating each axiom separately.   Since by definition contains all finite open intervals, it clearly covers .    We claim that in fact given , their intersection is either empty or another element of . Axiom (2) follows directly from this claim.  Why is the claim true? An element of is either of the form or , where is an open interval. There are then three different cases describing intersections of two elements, as shown below. Here denote finite open intervals. . As we have already remarked, is either empty or a finite open interval . The claim now follows easily.        Comparing standard, lower limit, and -topology     Show that the -topology is strictly finer than the standard topology on .    Show that the lower limit topology and -topology are incomparable.      Let be the Euclidean, lower limit, and -topologies, respectively.    By definition, the basis for the -topology contains all finite open intervals. It follows from that . Next, using an argument similar to the one in , we show that the basis element is not open in the standard topology. Indeed, consider the element . For any the open interval containing must contain an element of the form for some positive integer . Since , it follows that . We conclude that is not open in the standard topology.    This is left as an exercise.       Basis criterion   Let be a topology on the set . A subset is a basis of if and only if for all and there is an element such that .    We prove both implications of the given if and only if statement separately.   Case:  Assume is generated by . According to the description of in , for all and there is an element such that .    Case:  Assume for that for all and there is an element such that . Taking we see in particular that for all there is a such that . Thus satisfies axiom (1) for a basis. Next, let and take . Since are open, so is . Our assumption now implies that there is a such that . Thus axiom (2) of holds, and we condlude is a basis.      Bases for discrete topology   Let be a set, and let be the discrete topology on . Show the following:    is a basis for .    If is a basis for , then . In other words, is the minimal basis of the discrete topology.       This is left as an exercise.     Order topology  Let be a set equipped with a total ordering : , a binary relation satisfying the following four axioms:   Reflexive  For all , we have .    Transitive  For all , if and , then .    Antisymmetric  For all , if and , then .    Comparability  For all , we have or .   Given the total ordering on , we define the relation as if and . A smallest element of is an element satisfying for all ; a largest element of is an element satisfying for all . Lastly, given elements we define the following subsets of : . An set of the form is called an open interval and a set of the form is called a closed interval ; sets of the form or are called half-open intervals .  With this notation in place, we define to be the collection of all subsets satisfying one of the following properties:    for some .     for some , and some smallest element .     for some and some largest element .   The collection is a topological basis and the topology it generates is called the order topology of with respect to the total ordering .   The proof is left as an exercise.    "
},
{
  "id": "d_basis",
  "level": "2",
  "url": "s_bases_top.html#d_basis",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Topological basis.",
  "body": " Topological basis  Let be a set. A topological basis on is a collection of subsets of satisfying the following axioms:   Covers  For each there is a set such that .    Intersections covered by basis elements  If , then for all there is a such that .   When the context is clear, we usually shorten topological basis to basis .  "
},
{
  "id": "rm_alt_axiom2",
  "level": "2",
  "url": "s_bases_top.html#rm_alt_axiom2",
  "type": "Remark",
  "number": "1.2.2",
  "title": "Equivalent alternative to axiom (2).",
  "body": " Equivalent alternative to axiom (2)   Axiom (2) in is equivalent to saying that is equal to a union of elements of . In other words, we could replace (2) with the equivalent statement . This is a consequence of the more general fact expressed in .   "
},
{
  "id": "lemma_covering_principle",
  "level": "2",
  "url": "s_bases_top.html#lemma_covering_principle",
  "type": "Lemma",
  "number": "1.2.3",
  "title": "Covering principle.",
  "body": " Covering principle   Let be a collection of subsets of , and let . The following statements are equivalent.     for some sets . (In other words, is a union of elements of .)    For all there exists a set such that .       Implication:  Suppose for some sets . Given any we have for some . Since , we are done.    Implication:  By assumption, for all we can find a set such that . It follows that , showing that is a union of elements of .    "
},
{
  "id": "eg_basis_R",
  "level": "2",
  "url": "s_bases_top.html#eg_basis_R",
  "type": "Example",
  "number": "1.2.4",
  "title": "Some bases for <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Some bases for   Show that the given collections are topological bases of .                     It is clear that each collection of interval types covers in the sense of axiom (1). As for axiom (2), for each , , note that intersection of these types of intervals are either empty, or another interval of the same type. This is a result of the fact that , where the interval described on the right is understood to be the empty set if .   "
},
{
  "id": "th_basis_generated",
  "level": "2",
  "url": "s_bases_top.html#th_basis_generated",
  "type": "Theorem",
  "number": "1.2.5",
  "title": "Topology generated by basis.",
  "body": " Topology generated by basis   Let be a topological basis of the set .   The set is a topology on .    We have .       Note: it is somewhat easier to show that is a topology using the description of in statement (1), and then to show that the description in statement (2) also holds. (This is how Munkres does it, and how I did it in class.) I've decided to go the hard way here as an alternative proof that puts us through some useful set theory calisthenics.  First we show that as defined in (2) is a topology. We treat each axiom separately.    The empty set is the empty union of elements of ; thus . The covering axiom for bases implies that for all there is a such that . It follows that is a union of elements of , and thus that .    In plain English, a union of unions of elements of is a union of elements of . More rigorously, assume we have a collection of . By definition, for each we have , where for each . Thus , where is the set of all pairs of the form for and . Thus is a union of basis elements, and hence an element of .    It is enough to show that . (See .) Assume , , where for all . We have . Now by axiom (2') for bases (see ), each is a union of basis elements, and hence is an element . We have already shown that is closed under arbitrary unions. Thus is an element of .    This shows that , as defined in statement (2) of the theorem, is a topology. Statement (1) now follows from the general claim made in .   "
},
{
  "id": "d_basis_generated",
  "level": "2",
  "url": "s_bases_top.html#d_basis_generated",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Topology generated by basis.",
  "body": " Topology generated by basis   Let be a topological basis of the set . The topology is called the topology generated by the basis . Similarly, we call a basis for .   "
},
{
  "id": "th_compare_basis",
  "level": "2",
  "url": "s_bases_top.html#th_compare_basis",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "Comparing topologies via basis.",
  "body": " Comparing topologies via basis   Let and be topologies on and assume that is generated by the basis . We have .    Observe first that basis elements are open in the topology , essentially by definition: , we have . The forward implication follows easily, since and implies .  Now consider the reverse implication . Assume . Given an open set we have for some by . Since for all (by assumption), and since is closed under arbitrary unions, we conclude . This proves , as desired.   "
},
{
  "id": "eg_basis_standard_R",
  "level": "2",
  "url": "s_bases_top.html#eg_basis_standard_R",
  "type": "Example",
  "number": "1.2.8",
  "title": "A basis for the standard topology on <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " A basis for the standard topology on   Show that the standard topology on  is the topology generated by the basis in .    Let be the topology generated by and let be the standard topology on  . Since every open interval is open in each element of is an element of . By , we have . Next, take any open set ; then by definition for all there exists such that . It follows that by . This proves , and thus that , as desired.   "
},
{
  "id": "eg_multiple_bases_standard_R",
  "level": "2",
  "url": "s_bases_top.html#eg_multiple_bases_standard_R",
  "type": "Example",
  "number": "1.2.9",
  "title": "Multiple bases for the standard real topology.",
  "body": " Multiple bases for the standard real topology   Show that the bases from both generate the standard topology on .    Let be the topology generated by , . We must show that and . Clearly any is an element of , and hence an element of . It follows from that . Next, take any . Since the rational numbers are dense in , for any we can find satisfying . From it follows that for all and hence that by .   "
},
{
  "id": "top_eg_lower_limit",
  "level": "2",
  "url": "s_bases_top.html#top_eg_lower_limit",
  "type": "Topological specimen",
  "number": "4",
  "title": "Lower limit topology.",
  "body": " Lower limit topology  The collection is a topological basis of called the lower limit basis , and the topology it generates is called the lower limit topology on . We denote the topological space as .  "
},
{
  "id": "eg_lower_limit_finer",
  "level": "2",
  "url": "s_bases_top.html#eg_lower_limit_finer",
  "type": "Example",
  "number": "1.2.10",
  "title": "Lower limit is finer than standard.",
  "body": " Lower limit is finer than standard   Show that the lower limit topology on is strictly finer than the standard one.    Let be the Euclidean and lower limit topologies, respectively. According to , to show we must show that for any basis element and any , there is a basis element satisfying . Since , we have , and thus we have , as desired.  To show is strictly finer than it suffices to find a basis element that is not an element of . I claim . Indeed, consider . Any open set containing must contain negative numbers, and hence does not satisfy . It follows that is not an element of .   "
},
{
  "id": "top_eq_K_top",
  "level": "2",
  "url": "s_bases_top.html#top_eq_K_top",
  "type": "Topological specimen",
  "number": "5",
  "title": "<span class=\"process-math\">\\(K\\)<\/span>-topology.",
  "body": " -topology  Let , and define . The collection is a basis in . The topology it generates is called the -topology on . We denote the topological space as .   We show that is a basis, treating each axiom separately.   Since by definition contains all finite open intervals, it clearly covers .    We claim that in fact given , their intersection is either empty or another element of . Axiom (2) follows directly from this claim.  Why is the claim true? An element of is either of the form or , where is an open interval. There are then three different cases describing intersections of two elements, as shown below. Here denote finite open intervals. . As we have already remarked, is either empty or a finite open interval . The claim now follows easily.      "
},
{
  "id": "eg_Ktop_lower_stand",
  "level": "2",
  "url": "s_bases_top.html#eg_Ktop_lower_stand",
  "type": "Example",
  "number": "1.2.11",
  "title": "Comparing standard, lower limit, and <span class=\"process-math\">\\(K\\)<\/span>-topology.",
  "body": " Comparing standard, lower limit, and -topology     Show that the -topology is strictly finer than the standard topology on .    Show that the lower limit topology and -topology are incomparable.      Let be the Euclidean, lower limit, and -topologies, respectively.    By definition, the basis for the -topology contains all finite open intervals. It follows from that . Next, using an argument similar to the one in , we show that the basis element is not open in the standard topology. Indeed, consider the element . For any the open interval containing must contain an element of the form for some positive integer . Since , it follows that . We conclude that is not open in the standard topology.    This is left as an exercise.     "
},
{
  "id": "th_basis_criterion",
  "level": "2",
  "url": "s_bases_top.html#th_basis_criterion",
  "type": "Theorem",
  "number": "1.2.12",
  "title": "Basis criterion.",
  "body": " Basis criterion   Let be a topology on the set . A subset is a basis of if and only if for all and there is an element such that .    We prove both implications of the given if and only if statement separately.   Case:  Assume is generated by . According to the description of in , for all and there is an element such that .    Case:  Assume for that for all and there is an element such that . Taking we see in particular that for all there is a such that . Thus satisfies axiom (1) for a basis. Next, let and take . Since are open, so is . Our assumption now implies that there is a such that . Thus axiom (2) of holds, and we condlude is a basis.    "
},
{
  "id": "eg_basis_discrete",
  "level": "2",
  "url": "s_bases_top.html#eg_basis_discrete",
  "type": "Example",
  "number": "1.2.13",
  "title": "Bases for discrete topology.",
  "body": " Bases for discrete topology   Let be a set, and let be the discrete topology on . Show the following:    is a basis for .    If is a basis for , then . In other words, is the minimal basis of the discrete topology.       This is left as an exercise.   "
},
{
  "id": "top_eg_order_topology",
  "level": "2",
  "url": "s_bases_top.html#top_eg_order_topology",
  "type": "Topological specimen",
  "number": "6",
  "title": "Order topology.",
  "body": " Order topology  Let be a set equipped with a total ordering : , a binary relation satisfying the following four axioms:   Reflexive  For all , we have .    Transitive  For all , if and , then .    Antisymmetric  For all , if and , then .    Comparability  For all , we have or .   Given the total ordering on , we define the relation as if and . A smallest element of is an element satisfying for all ; a largest element of is an element satisfying for all . Lastly, given elements we define the following subsets of : . An set of the form is called an open interval and a set of the form is called a closed interval ; sets of the form or are called half-open intervals .  With this notation in place, we define to be the collection of all subsets satisfying one of the following properties:    for some .     for some , and some smallest element .     for some and some largest element .   The collection is a topological basis and the topology it generates is called the order topology of with respect to the total ordering .   The proof is left as an exercise.   "
},
{
  "id": "s_metric1",
  "level": "1",
  "url": "s_metric1.html",
  "type": "Section",
  "number": "1.3",
  "title": "Metric spaces",
  "body": " Metric spaces   In this section we introduce a special family of topological spaces: metric spaces . These types of spaces are pervasive throughout mathematics and are conceptually very familiar or intuitive. Indeed, historically metric spaces were the main inspiration to axiomatic topology; and the metric balls defined in were the inspiration for the notion of a topological basis. Lastly, the defining structure of metric space, a metric  , gives us a quantitative grip on the topology, whereas generally in topology we must rely on the qualitative description of open sets given by the axioms.    Metric space   A metric space is a pair , where is a set and is a function satisfying the following axioms:   Positivity   , and if and only if , for all .    Symmetry   for all .    Triangle inequality   for all .   The function is called a metric or a distance function on , and for any we call the distance between  and .     metric Euclidean  metric box  metric taxicab  Euclidean, box, and taxicab metrics   Let , where is a positive integer. Let .   Euclidean metric  The function defined as is a metric, called the Euclidean metric . The metric space is called Euclidean -space . The norm of , denoted , is defined as .    Box metric  The function defined as is a metric, called the box metric (or square metric ).    Taxicab metric  The function defined as is a metric, called the taxicab metric .          It is easiest to prove that the Euclidean metric is indeed a metric by first expressing it in terms of the dot product as and then using well-known properties of the dot product, including the Cauchy-Schwarz inequality.    Let be the box metric. It is clear that for all . Furthermore, we have . This proves positivity. The symmetry follows easily from the fact that . As for the triangle inequality, for all we have , where the leftmost inequality is the triangle inequality for the absolute value, and the rightmost inequality follows from the definition of . Since the inequality holds for all , we conclude that .    This is a homework exercise.        Metric balls   Let be a metric space. Given and the -metric ball of radius centered at is the subset defined as . In other words, is the set of all elements of lying within a distance of of . We call the radius of . More generally, we call a subset a -metric ball if for some and . When it is clear what the underlying metric is, we will omit and speak simply of metric balls.     Metric balls for Euclidean and box metrics   Describe the metric balls for the Euclidean and box metrics on for .    For the two metrics are just , the same one we used to define the standard topology on . Epsilon balls here are just intervals of the form .  For the Euclidean distance defined is the standard distance between two points in or . The set of points satisfying is thus the circle of radius centered at for , and the sphere of radius centered at for . It follows that an -ball is the interior of the this circle or sphere, respectively.  True to its name, an -ball around is the open -cube . (Note that the product here is the Cartesian product of these intervals. (See .)) Indeed, we have .     Metric balls   Let be a metric ball in the metric space . If , there is a such that . In other words, for all elements of a metric ball , we can find a metric ball centered at contained in .    Since , we have and hence . We claim that . Indeed, we have . It follows that , proving .     Metric spaces  Let be a metric space. The set of all metric balls is a topological basis, giving the structure of a topological space. We say the topology generated by the topology is induced by the metric .  With respect to this topology we have .   We must prove (1) that is a basis, and (2) that the description of openness in is correct. (The descriptions in and follow directly from .)    For all , we have , proving the first axiom of . Next, let be two metric balls. Given , there are such that for . Setting , we have . This proves the second axiom.    Using the description of the topology generated by a basis articulated by , we have .       Comparing metric topologies   Let be two metrics on the set , and let be the topologies they induce. We let and denote - and -metric balls of radius centered at , respectively.  We have if and only if for every and , there exists a such that . In other words if and only if for every , every -metric ball centered at contains a -metric ball centered at .    We show both implications separately.   Implication:  If , then any -metric ball is open in . Since -metric balls generate and since , it follows from that there is a such that .    Implication:  Assume the condition described by holds. Take an open set . By there is an such that . By the condition, there is a such that . It follows again by that .      Equivalence of Euclidean, box, and taxicab metrics   Let . Show that the Euclidean, box, and taxicab metrics all induce the same topology on .    We adjust our notation to accommodate for different metrics at play simultaneously. Let , , be the three metrics in question, and let , , be their respective topologies. We will denote -balls with respect to each as , , .  We will show and , from whence it follows that .   Case:  For any nonnegative numbers we have . From this it follows that for any and any we have , showing that within any Euclidean metric ball centered at we can find a box metric ball centered at , and vice versa. Now given any element in a Euclidean metric ball , there is a Euclidean metric ball centered at contained in by . By there is box metric ball centered at satisfying . Using our covering principle , we conclude that any Euclidean metric ball is covered by box metric balls, and thus . A very similar argument, using the other inclusion of , shows that .    Case:  For any nonnegative we have , from whence it follows that for any and we have . An argument exactly like the one from the previous case now shows .       Given a set the function defined as is a metric on , called the trivial metric .    The proof that is a metric is left as an exercise.     Trivial metric   Determine the topology induced on a set by the trivial metric.    This example is left as an exercise.     -adic metric   Let be the set of integers. Let be the set of prime integers. The fundamental theorem of arithmetic states that any nonzero integer can be factored in unique was as a product of primes in the form , where is a nonnegative integer, and for all but finitely many primes . We call the valuation of at the prime ; it tells us the highest power of dividing .  Now fix a prime integer . For we define its -adic norm  as . The function defined as is a metric on , called the -adic metric. Integers are close to one another with respect to this metric if their difference is highly divisible by .    We content ourselves with a proof sketch in order to avoid getting into the weeds of elementary number theory. The positivity and symmetry axioms follow readily from simple properties of divisibility. For the triangle inequality it is enough to prove that the -adic norm satisfies the triangle inequality on : , for all we have since then for any we have . Lastly, the inequality follows from the stronger claim , which itself follows from divisibility properties.    "
},
{
  "id": "d_metric_space",
  "level": "2",
  "url": "s_metric1.html#d_metric_space",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Metric space.",
  "body": " Metric space   A metric space is a pair , where is a set and is a function satisfying the following axioms:   Positivity   , and if and only if , for all .    Symmetry   for all .    Triangle inequality   for all .   The function is called a metric or a distance function on , and for any we call the distance between  and .   "
},
{
  "id": "d_Euclidean_box_metric",
  "level": "2",
  "url": "s_metric1.html#d_Euclidean_box_metric",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Euclidean, box, and taxicab metrics.",
  "body": " metric Euclidean  metric box  metric taxicab  Euclidean, box, and taxicab metrics   Let , where is a positive integer. Let .   Euclidean metric  The function defined as is a metric, called the Euclidean metric . The metric space is called Euclidean -space . The norm of , denoted , is defined as .    Box metric  The function defined as is a metric, called the box metric (or square metric ).    Taxicab metric  The function defined as is a metric, called the taxicab metric .          It is easiest to prove that the Euclidean metric is indeed a metric by first expressing it in terms of the dot product as and then using well-known properties of the dot product, including the Cauchy-Schwarz inequality.    Let be the box metric. It is clear that for all . Furthermore, we have . This proves positivity. The symmetry follows easily from the fact that . As for the triangle inequality, for all we have , where the leftmost inequality is the triangle inequality for the absolute value, and the rightmost inequality follows from the definition of . Since the inequality holds for all , we conclude that .    This is a homework exercise.      "
},
{
  "id": "d_epsilon_balls",
  "level": "2",
  "url": "s_metric1.html#d_epsilon_balls",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Metric balls.",
  "body": " Metric balls   Let be a metric space. Given and the -metric ball of radius centered at is the subset defined as . In other words, is the set of all elements of lying within a distance of of . We call the radius of . More generally, we call a subset a -metric ball if for some and . When it is clear what the underlying metric is, we will omit and speak simply of metric balls.   "
},
{
  "id": "s_metric1-6",
  "level": "2",
  "url": "s_metric1.html#s_metric1-6",
  "type": "Example",
  "number": "1.3.4",
  "title": "Metric balls for Euclidean and box metrics.",
  "body": " Metric balls for Euclidean and box metrics   Describe the metric balls for the Euclidean and box metrics on for .    For the two metrics are just , the same one we used to define the standard topology on . Epsilon balls here are just intervals of the form .  For the Euclidean distance defined is the standard distance between two points in or . The set of points satisfying is thus the circle of radius centered at for , and the sphere of radius centered at for . It follows that an -ball is the interior of the this circle or sphere, respectively.  True to its name, an -ball around is the open -cube . (Note that the product here is the Cartesian product of these intervals. (See .)) Indeed, we have .   "
},
{
  "id": "lemma_metric",
  "level": "2",
  "url": "s_metric1.html#lemma_metric",
  "type": "Lemma",
  "number": "1.3.5",
  "title": "Metric balls.",
  "body": " Metric balls   Let be a metric ball in the metric space . If , there is a such that . In other words, for all elements of a metric ball , we can find a metric ball centered at contained in .    Since , we have and hence . We claim that . Indeed, we have . It follows that , proving .   "
},
{
  "id": "top_eg_metric_spaces",
  "level": "2",
  "url": "s_metric1.html#top_eg_metric_spaces",
  "type": "Topological specimen",
  "number": "7",
  "title": "Metric spaces.",
  "body": " Metric spaces  Let be a metric space. The set of all metric balls is a topological basis, giving the structure of a topological space. We say the topology generated by the topology is induced by the metric .  With respect to this topology we have .   We must prove (1) that is a basis, and (2) that the description of openness in is correct. (The descriptions in and follow directly from .)    For all , we have , proving the first axiom of . Next, let be two metric balls. Given , there are such that for . Setting , we have . This proves the second axiom.    Using the description of the topology generated by a basis articulated by , we have .     "
},
{
  "id": "th_compare_metrics",
  "level": "2",
  "url": "s_metric1.html#th_compare_metrics",
  "type": "Theorem",
  "number": "1.3.6",
  "title": "Comparing metric topologies.",
  "body": " Comparing metric topologies   Let be two metrics on the set , and let be the topologies they induce. We let and denote - and -metric balls of radius centered at , respectively.  We have if and only if for every and , there exists a such that . In other words if and only if for every , every -metric ball centered at contains a -metric ball centered at .    We show both implications separately.   Implication:  If , then any -metric ball is open in . Since -metric balls generate and since , it follows from that there is a such that .    Implication:  Assume the condition described by holds. Take an open set . By there is an such that . By the condition, there is a such that . It follows again by that .    "
},
{
  "id": "eg_euc_box_taxi_equivalence",
  "level": "2",
  "url": "s_metric1.html#eg_euc_box_taxi_equivalence",
  "type": "Example",
  "number": "1.3.7",
  "title": "Equivalence of Euclidean, box, and taxicab metrics.",
  "body": " Equivalence of Euclidean, box, and taxicab metrics   Let . Show that the Euclidean, box, and taxicab metrics all induce the same topology on .    We adjust our notation to accommodate for different metrics at play simultaneously. Let , , be the three metrics in question, and let , , be their respective topologies. We will denote -balls with respect to each as , , .  We will show and , from whence it follows that .   Case:  For any nonnegative numbers we have . From this it follows that for any and any we have , showing that within any Euclidean metric ball centered at we can find a box metric ball centered at , and vice versa. Now given any element in a Euclidean metric ball , there is a Euclidean metric ball centered at contained in by . By there is box metric ball centered at satisfying . Using our covering principle , we conclude that any Euclidean metric ball is covered by box metric balls, and thus . A very similar argument, using the other inclusion of , shows that .    Case:  For any nonnegative we have , from whence it follows that for any and we have . An argument exactly like the one from the previous case now shows .    "
},
{
  "id": "d_trivial_metric",
  "level": "2",
  "url": "s_metric1.html#d_trivial_metric",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "  Given a set the function defined as is a metric on , called the trivial metric .    The proof that is a metric is left as an exercise.   "
},
{
  "id": "s_metric1-12",
  "level": "2",
  "url": "s_metric1.html#s_metric1-12",
  "type": "Example",
  "number": "1.3.9",
  "title": "Trivial metric.",
  "body": " Trivial metric   Determine the topology induced on a set by the trivial metric.    This example is left as an exercise.   "
},
{
  "id": "d_padic_metric",
  "level": "2",
  "url": "s_metric1.html#d_padic_metric",
  "type": "Definition",
  "number": "1.3.10",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-adic metric.",
  "body": " -adic metric   Let be the set of integers. Let be the set of prime integers. The fundamental theorem of arithmetic states that any nonzero integer can be factored in unique was as a product of primes in the form , where is a nonnegative integer, and for all but finitely many primes . We call the valuation of at the prime ; it tells us the highest power of dividing .  Now fix a prime integer . For we define its -adic norm  as . The function defined as is a metric on , called the -adic metric. Integers are close to one another with respect to this metric if their difference is highly divisible by .    We content ourselves with a proof sketch in order to avoid getting into the weeds of elementary number theory. The positivity and symmetry axioms follow readily from simple properties of divisibility. For the triangle inequality it is enough to prove that the -adic norm satisfies the triangle inequality on : , for all we have since then for any we have . Lastly, the inequality follows from the stronger claim , which itself follows from divisibility properties.   "
},
{
  "id": "s_closed_closure_interior",
  "level": "1",
  "url": "s_closed_closure_interior.html",
  "type": "Section",
  "number": "1.4",
  "title": "Closed sets, closure, and interior",
  "body": " Closed sets, closure, and interior   Closed sets   Let be a topological space. A subset is closed if its complement is open. Equivalently, a subset is closed if and only if for some open set .     Property of closed sets   Let be a topological space.   Trivial sets  Both and are closed sets.    Finite union  If and are closed, then is closed.    Arbitrary intersection  If is a collection of closed sets, then is closed.       Statement (1) follows from the observation that , and .  Assume is closed for ; then by De Morgan's law , which is open since is open for and finite intersections of open sets are open. This proves (2).  Lastly, assume is closed for all . By De Morgan's law we have , which is open since is open and arbitrary unions of open sets are open.     Closed sets determine topology  In general, given a set the set complement operation is defines a bijection , that is self-inverse: , we have for all subsets . It follows from the that the closed sets of are in bijective correspondence with the open sets, and thus that a topology on is uniquely determined by specifying any collection of sets satisfying (1)-(3) from . In other words, a topology is determined by specifying either its open sets or its closed sets.    Closed sets axioms   Let be a set. A collection of subsets is said to satisfy the closed sets axioms if the following properties hold.   Trivial sets   and .    Finite union  If , then .    Arbitrary intersection  Given any collection of elements , we have .        Closed sets axioms   Given a set and collection satisfying the closed sets axioms , the set is a topology on whose closed sets are precisely the elements of .    The proof, which is essentially an application of De Morgan's laws, is left to the reader.     Closed in trivial and discrete topologies     If has the trivial topology, then the only open sets of are . Hence the only closed sets are and .    If has the discrete topology, then every subset of is open. It follows that any subset of is closed, since its complement is open. We conclude that al subsets of are both open and closed in the discrete topology.       Closed in the cofinite topology   Let be a set endowed with the cofinite topology. An set is open in if and only if (a) or (b) is finite. It follows that a set is closed if and only if (a) or (b) for a cofinite set if and only if (a) or (b) is finite.     Basis description of closed sets   Let be a topological space with basis . A set is closed if and only if for all , there is a basis element satisfying .    By definition a set is closed if and only if its complement is open. Using , we see that is open if and only if for all there is a basis element satisfying .     Closed sets in Euclidean metric topology   Let with the Euclidean metric topology. Decide whether the given subset is open and whether it is closed.                   The set is not open: any open ball containing the point contains points with negative -coordinate. Hence there is no open ball containing that is contained in .  The set is closed. If , then either or . Let . Every element of has either a negative -coordinate or a negative -coordinate. Hence . This proves is closed, using .    Again, the set is not open, as witnessed by .  The set is also not open. Take . Any open ball containing contains points with positive -coordinate. Thus there is no open ball containing and contained in . We conclude that is not closed, using .        Interior and closure of a set   Let be a subset of the topological space .   Interior  The interior  of is the union of all open subsets contained in : , .    Closure  The closure  is the ntersection of all closed sets containing : , .        Equivalent notions of interior and closure   Let be a subset of the topological space . Let be a basis for the topology of .    is the unique largest open set contained in . In other words, is the unique set satisfying the following property: if is open and , then .     is the unique smallest closed set containing . In other words, is the unique set satisfying the following property: if is closed and , then .    We have .    We have .       Statements (1)-(2): properties of open (resp. closed) sets imply that is open and is closed. Furthermore, by definition of (resp. ) along with simple properties of union\/intersection it follows that if is open and , then ; and if is closed containing , then .  The first equivalence in (3) follows from the definition of as a union. The second equivalence follows from the fact that any is covered by basis elements.  We prove (4) as a chain of equivalences. Call the three statements (i), (ii), (iii).  Assume . If is an open set satisfying , then is a closed set containing , and hence contains . It follows that any open set containing intersects nontrivially. This proves (i) (ii).  Clearly (ii) implies (iii), since any basis element is an open set.  Assume (iii). If is a closed set containing , then is an open set satisfying . It follows from (iii) that , and hence that for all closed sets containing . It follows that , the intersection of these sets.     Using smallest\/largest characterization of interior\/closure  Statements (1)-(2) of provide a potentially useful indirect way of computing the interior or closure of a set .   Interior  Find an open set contained in and show that for any other open set we have . It follows that .    Closure  Find a closed set containing and show that for any other closed set containing we have . It follows that .       Interior and closure of  Let and let . Compute the interior and closure of with respect to (a) the standard topology on and (b) the -topology on .     First consider with the standard topology. The interior of is empty in this case: , . To see this, note that given any and any open interval containing , we can choose an such that ; by design all elements of lie outside . Thus , and .  Next. I claim . To see this, note first that is closed: it is easy to see that for any we can find an such that . By (2) of we have . Since furthermore and since itself is not closed, it follows that .    Now consider the -topology on . We still have . Indeed, fix any , and take any basis element containing . We have or for some open interval . In either case, the same argument as above shows that contains a basis element , all of whose elements lie outside of . This shows , and hence .  Next, I claim that is closed in the -topology, from whence it follows that . (Use (2) from .) To prove the claim, we must show, using that for any there is a basis element (in the -topology) containing and contained in . There are two cases: and . If , we can find an open interval such that and . Since open intervals are basis elements in the -topology, we are done in this case. Next, assume . In this case the basis element satisfies . Having exhausted the cases, we conclude is closed, and hence .       Interior and closure in cofinite topology   Let be a set endowed with the cofinite topology. For describe and . Use cases.    If is finite, then the cofinite topology is equal to the discrete topology. In this case for any subset .  Now assume is infinite. If , then , since such an is both open and closed. Assume . Recall that nonempty open sets of are precisely the cofinite ones, and that the closed sets that precisely the finite ones (or else itself). Thus we have . Note, for the equalities above we use the fact that if is infinite (i.e., not finite), then it is not contained in any finite set; and if is not cofinite, then it does not contain any cofinite set.    "
},
{
  "id": "d_closed_set",
  "level": "2",
  "url": "s_closed_closure_interior.html#d_closed_set",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Closed sets.",
  "body": " Closed sets   Let be a topological space. A subset is closed if its complement is open. Equivalently, a subset is closed if and only if for some open set .   "
},
{
  "id": "th_closed_props",
  "level": "2",
  "url": "s_closed_closure_interior.html#th_closed_props",
  "type": "Theorem",
  "number": "1.4.2",
  "title": "Property of closed sets.",
  "body": " Property of closed sets   Let be a topological space.   Trivial sets  Both and are closed sets.    Finite union  If and are closed, then is closed.    Arbitrary intersection  If is a collection of closed sets, then is closed.       Statement (1) follows from the observation that , and .  Assume is closed for ; then by De Morgan's law , which is open since is open for and finite intersections of open sets are open. This proves (2).  Lastly, assume is closed for all . By De Morgan's law we have , which is open since is open and arbitrary unions of open sets are open.   "
},
{
  "id": "rm_equiv_open_closed",
  "level": "2",
  "url": "s_closed_closure_interior.html#rm_equiv_open_closed",
  "type": "Remark",
  "number": "1.4.3",
  "title": "Closed sets determine topology.",
  "body": " Closed sets determine topology  In general, given a set the set complement operation is defines a bijection , that is self-inverse: , we have for all subsets . It follows from the that the closed sets of are in bijective correspondence with the open sets, and thus that a topology on is uniquely determined by specifying any collection of sets satisfying (1)-(3) from . In other words, a topology is determined by specifying either its open sets or its closed sets.  "
},
{
  "id": "d_closed_axioms",
  "level": "2",
  "url": "s_closed_closure_interior.html#d_closed_axioms",
  "type": "Definition",
  "number": "1.4.4",
  "title": "Closed sets axioms.",
  "body": " Closed sets axioms   Let be a set. A collection of subsets is said to satisfy the closed sets axioms if the following properties hold.   Trivial sets   and .    Finite union  If , then .    Arbitrary intersection  Given any collection of elements , we have .      "
},
{
  "id": "th_closed_axioms",
  "level": "2",
  "url": "s_closed_closure_interior.html#th_closed_axioms",
  "type": "Theorem",
  "number": "1.4.5",
  "title": "Closed sets axioms.",
  "body": " Closed sets axioms   Given a set and collection satisfying the closed sets axioms , the set is a topology on whose closed sets are precisely the elements of .    The proof, which is essentially an application of De Morgan's laws, is left to the reader.   "
},
{
  "id": "eg_closed_trivial_discrete",
  "level": "2",
  "url": "s_closed_closure_interior.html#eg_closed_trivial_discrete",
  "type": "Example",
  "number": "1.4.6",
  "title": "Closed in trivial and discrete topologies.",
  "body": " Closed in trivial and discrete topologies     If has the trivial topology, then the only open sets of are . Hence the only closed sets are and .    If has the discrete topology, then every subset of is open. It follows that any subset of is closed, since its complement is open. We conclude that al subsets of are both open and closed in the discrete topology.     "
},
{
  "id": "eg_closed_cofinite",
  "level": "2",
  "url": "s_closed_closure_interior.html#eg_closed_cofinite",
  "type": "Example",
  "number": "1.4.7",
  "title": "Closed in the cofinite topology.",
  "body": " Closed in the cofinite topology   Let be a set endowed with the cofinite topology. An set is open in if and only if (a) or (b) is finite. It follows that a set is closed if and only if (a) or (b) for a cofinite set if and only if (a) or (b) is finite.   "
},
{
  "id": "lemma_basis_closed",
  "level": "2",
  "url": "s_closed_closure_interior.html#lemma_basis_closed",
  "type": "Lemma",
  "number": "1.4.8",
  "title": "Basis description of closed sets.",
  "body": " Basis description of closed sets   Let be a topological space with basis . A set is closed if and only if for all , there is a basis element satisfying .    By definition a set is closed if and only if its complement is open. Using , we see that is open if and only if for all there is a basis element satisfying .   "
},
{
  "id": "s_closed_closure_interior-10",
  "level": "2",
  "url": "s_closed_closure_interior.html#s_closed_closure_interior-10",
  "type": "Example",
  "number": "1.4.9",
  "title": "Closed sets in Euclidean metric topology.",
  "body": " Closed sets in Euclidean metric topology   Let with the Euclidean metric topology. Decide whether the given subset is open and whether it is closed.                   The set is not open: any open ball containing the point contains points with negative -coordinate. Hence there is no open ball containing that is contained in .  The set is closed. If , then either or . Let . Every element of has either a negative -coordinate or a negative -coordinate. Hence . This proves is closed, using .    Again, the set is not open, as witnessed by .  The set is also not open. Take . Any open ball containing contains points with positive -coordinate. Thus there is no open ball containing and contained in . We conclude that is not closed, using .      "
},
{
  "id": "d_interior_closure",
  "level": "2",
  "url": "s_closed_closure_interior.html#d_interior_closure",
  "type": "Definition",
  "number": "1.4.10",
  "title": "Interior and closure of a set.",
  "body": " Interior and closure of a set   Let be a subset of the topological space .   Interior  The interior  of is the union of all open subsets contained in : , .    Closure  The closure  is the ntersection of all closed sets containing : , .      "
},
{
  "id": "th_equivalent_interior_closure",
  "level": "2",
  "url": "s_closed_closure_interior.html#th_equivalent_interior_closure",
  "type": "Theorem",
  "number": "1.4.11",
  "title": "Equivalent notions of interior and closure.",
  "body": " Equivalent notions of interior and closure   Let be a subset of the topological space . Let be a basis for the topology of .    is the unique largest open set contained in . In other words, is the unique set satisfying the following property: if is open and , then .     is the unique smallest closed set containing . In other words, is the unique set satisfying the following property: if is closed and , then .    We have .    We have .       Statements (1)-(2): properties of open (resp. closed) sets imply that is open and is closed. Furthermore, by definition of (resp. ) along with simple properties of union\/intersection it follows that if is open and , then ; and if is closed containing , then .  The first equivalence in (3) follows from the definition of as a union. The second equivalence follows from the fact that any is covered by basis elements.  We prove (4) as a chain of equivalences. Call the three statements (i), (ii), (iii).  Assume . If is an open set satisfying , then is a closed set containing , and hence contains . It follows that any open set containing intersects nontrivially. This proves (i) (ii).  Clearly (ii) implies (iii), since any basis element is an open set.  Assume (iii). If is a closed set containing , then is an open set satisfying . It follows from (iii) that , and hence that for all closed sets containing . It follows that , the intersection of these sets.   "
},
{
  "id": "rm_",
  "level": "2",
  "url": "s_closed_closure_interior.html#rm_",
  "type": "Remark",
  "number": "1.4.12",
  "title": "Using smallest\/largest characterization of interior\/closure.",
  "body": " Using smallest\/largest characterization of interior\/closure  Statements (1)-(2) of provide a potentially useful indirect way of computing the interior or closure of a set .   Interior  Find an open set contained in and show that for any other open set we have . It follows that .    Closure  Find a closed set containing and show that for any other closed set containing we have . It follows that .     "
},
{
  "id": "eg_closure_interior_K",
  "level": "2",
  "url": "s_closed_closure_interior.html#eg_closure_interior_K",
  "type": "Example",
  "number": "1.4.13",
  "title": "Interior and closure of <span class=\"process-math\">\\(K\\)<\/span>.",
  "body": " Interior and closure of  Let and let . Compute the interior and closure of with respect to (a) the standard topology on and (b) the -topology on .     First consider with the standard topology. The interior of is empty in this case: , . To see this, note that given any and any open interval containing , we can choose an such that ; by design all elements of lie outside . Thus , and .  Next. I claim . To see this, note first that is closed: it is easy to see that for any we can find an such that . By (2) of we have . Since furthermore and since itself is not closed, it follows that .    Now consider the -topology on . We still have . Indeed, fix any , and take any basis element containing . We have or for some open interval . In either case, the same argument as above shows that contains a basis element , all of whose elements lie outside of . This shows , and hence .  Next, I claim that is closed in the -topology, from whence it follows that . (Use (2) from .) To prove the claim, we must show, using that for any there is a basis element (in the -topology) containing and contained in . There are two cases: and . If , we can find an open interval such that and . Since open intervals are basis elements in the -topology, we are done in this case. Next, assume . In this case the basis element satisfies . Having exhausted the cases, we conclude is closed, and hence .     "
},
{
  "id": "s_closed_closure_interior-15",
  "level": "2",
  "url": "s_closed_closure_interior.html#s_closed_closure_interior-15",
  "type": "Example",
  "number": "1.4.14",
  "title": "Interior and closure in cofinite topology.",
  "body": " Interior and closure in cofinite topology   Let be a set endowed with the cofinite topology. For describe and . Use cases.    If is finite, then the cofinite topology is equal to the discrete topology. In this case for any subset .  Now assume is infinite. If , then , since such an is both open and closed. Assume . Recall that nonempty open sets of are precisely the cofinite ones, and that the closed sets that precisely the finite ones (or else itself). Thus we have . Note, for the equalities above we use the fact that if is infinite (i.e., not finite), then it is not contained in any finite set; and if is not cofinite, then it does not contain any cofinite set.   "
},
{
  "id": "s_limitpoints_hausdorff",
  "level": "1",
  "url": "s_limitpoints_hausdorff.html",
  "type": "Section",
  "number": "1.5",
  "title": "Limit points and the Hausdorff property",
  "body": " Limit points and the Hausdorff property   Neighborhood of element or set   Let be a topological space. An open neighborhood of an element is an open set that contains ; an open neighborhood of a subset is an open set such that .  More generally, a (not necessarily open) neighborhood of a point or subset is a subset whose interior contains or : equivalently, contains an open set containing or .     Limit point of a set   Let be a subset of the topological space . An element is a limit point of if any open neighborhood of intersects in a point distinct from : for any open neighborhood of , we have .     Limit points in   Let with the standard topology. Determine the set of all limit points for the following sets.                             We have $L=[0,1]$ in this case. For any and any metric ball , it is clear that $B_\\epsilon(x)$ contains infinitely many elements of $[0,1]$. Thus $[0,1]\\subseteq L$. Furthermore, since $[0,1]$ is closed, for any $x\\notin [0,1]$ there is an open set $U$ containing $x$ such that $U\\cap [0,1]=\\emptyset$. Thus $L\\subseteq [0,1]$.    We have in this. Indeed it is easy to see that for any $x\\in \\R$ we can find an open ball such that or .    It is easy to see that $L=\\{0\\}$ in this case.    In this case we have : for any and any open ball , there are infinitely many elements of .        Limit points and closure   Let be a subset of the topological space , and let be the set of all limit points of . We have .    We will show that and .  Inclusion \\overline{A}\\subseteq A\\cup A'  Assume and . Since , for any open containing , there is any element . Since , we must have . Thus and we see that .    Inclusion \\overline{A}\\supseteq A\\cup A'  If , then for all open sets containing , we have . Thus .       Closed, closure, limit points   Let be a subset of the topological space . The following are equivalent.    is closed.     contains all of its limit points.     .       Throughout we let be the set of limit points of .   Implication:  If is closed, then by we have . It follows that , as desired.    Implication:  If , then again by we have .    Implication:  The implication is obvious since is closed.      Hausdorff property   A topological space is Hausdorff if for any two distinct elements ( , ) there are open neighborhoods of and , respectively, that are disjoint ( , ).     Hausdorff properties   Let be a Hausdorff space.   All singletons are closed.    All finite subsets of are closed.          Fix any . For any , there exist disjoint open sets containing and , respectively. In particular, we have . It follows that . and thus that . Thus is closed.    This follows easily since a finite union of closed sets is closed.        The -axiom   A topological space is (or is a -space , or satisfies the -axiom ) if all finite subsets of are closed.     as separation axiom  The is called a separation axiom , or Trennungsaxiom in German: hence the T . To see more explicitly why this is called a separation axiom, note that (a) is equivalent to the property that any singleton is closed, and (b) this in turn is equivalent to saying for any two elements there is an open neighborhood of that does not contain ; we think of this as separating and .  We will say more about separation axioms later. For now, I'll mention that the Hausdorff property is itself a separation axiom, called the -axiom.    Hausdorff versus   Let be a topological space.   If is Hausdorff, then is     It is not the case that if is , then must be Hausdorff.   Using logical shorthand, we have       This follows immediately from .    We provide a counterexample to the claim that implies Hausdorff. Let be any infinite set endowed with the cofinite topology. The closed sets of are precisely the finite sets and itself, as we saw in . Thus is . On the other hand, is not Hausdorff. Indeed take any two distinct elements . Let and be any pair of open neighborhoods of and , respectively. We will show that . If either of the open neighborhoods is equal to itself, the claim is obvious. Otherwise is a finite set that does not contain and is a finite set that does not contain . Since is infinite, , and hence , as desired.       Metric spaces are Hausdorff      Show that any metric space is Hausdorff.    Show that any infinite set endowed with the cofinite topology is not a metric space.          Let be a metric space. Given any , we have . The open balls are disjoint open neighrborhoods of and , respectively.    Let be an infinite set with the cofinite topology. We will show that is not Hausdorff and hence not a metric space. In fact, we will show that any two nonempty open sets in intersect nontrivially. Indeed, given nonempty open sets , we have by definition , for finite sets . Their intersection is the open set Since is infinite and the are finite, we have , and thus .       The Zariski topology on is an important example of a non-Hausdorff topology. This topology plays an important role in algebraic geometry.   Zariski topology on  Let , and let be the set of polynomials in the unknowns with real coefficients. For any define . In other words, is the set of points in that are simultaneous zeros for all polynomials . The set defines a topology on called the Zariski topology . As you will show in homework (for ), this topology is but not Hausdorff.   Proved in homework for . The general proof is not much different.     Convergent sequence   Let be a topological space. A sequence of elements of  converges to the element , denoted , if for any open neighborhood of , there is a positive integer such that for all . We say is a convergent sequence in this case, and call the limit of the sequence.     Limits in the cofinite topology   Let endowed with the cofinite topology. Show that the sequence converges to all elements . In particular, the limit of a convergent sequence need not be unique!    Let and let be any open set containing . We have for some , . Since this list is finite, we can pick such that if , then for any , and hence that , as desired.  Note: the same argument shows that any sequence containing infinitely many distinct elements is convergent, and in fact converges to all elements of .     Unique limits in Hausdorff spaces   If is Hausdorff, then any sequence has at most one limit.    Assume and let . Let be disjoint open sets containing , respectively. By convergence, there is an such that if , then . It follows that for all and hence that does not converge to .     Limit points in -spaces   Let be a subset of the -space . An element is a limit point of if and only if every open neighborhood of intersects in infinitely many points.    The reverse implication is obvious.  For the forward implication we will show the contrapositive. To this end, suppose there is an open neighborhood of such that is finite. Since finite sets are closed in , given any subset , we have is open. Taking , we see that is open, contains , and satisfies . It follows that is not a limit of point of , as desired.    "
},
{
  "id": "d_neighborhood",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#d_neighborhood",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Neighborhood of element or set.",
  "body": " Neighborhood of element or set   Let be a topological space. An open neighborhood of an element is an open set that contains ; an open neighborhood of a subset is an open set such that .  More generally, a (not necessarily open) neighborhood of a point or subset is a subset whose interior contains or : equivalently, contains an open set containing or .   "
},
{
  "id": "d_limit_point",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#d_limit_point",
  "type": "Definition",
  "number": "1.5.2",
  "title": "Limit point of a set.",
  "body": " Limit point of a set   Let be a subset of the topological space . An element is a limit point of if any open neighborhood of intersects in a point distinct from : for any open neighborhood of , we have .   "
},
{
  "id": "eg_limit_points",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#eg_limit_points",
  "type": "Example",
  "number": "1.5.3",
  "title": "Limit points in <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Limit points in   Let with the standard topology. Determine the set of all limit points for the following sets.                             We have $L=[0,1]$ in this case. For any and any metric ball , it is clear that $B_\\epsilon(x)$ contains infinitely many elements of $[0,1]$. Thus $[0,1]\\subseteq L$. Furthermore, since $[0,1]$ is closed, for any $x\\notin [0,1]$ there is an open set $U$ containing $x$ such that $U\\cap [0,1]=\\emptyset$. Thus $L\\subseteq [0,1]$.    We have in this. Indeed it is easy to see that for any $x\\in \\R$ we can find an open ball such that or .    It is easy to see that $L=\\{0\\}$ in this case.    In this case we have : for any and any open ball , there are infinitely many elements of .      "
},
{
  "id": "th_limits_points_closure",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#th_limits_points_closure",
  "type": "Theorem",
  "number": "1.5.4",
  "title": "Limit points and closure.",
  "body": " Limit points and closure   Let be a subset of the topological space , and let be the set of all limit points of . We have .    We will show that and .  Inclusion \\overline{A}\\subseteq A\\cup A'  Assume and . Since , for any open containing , there is any element . Since , we must have . Thus and we see that .    Inclusion \\overline{A}\\supseteq A\\cup A'  If , then for all open sets containing , we have . Thus .     "
},
{
  "id": "cor_closed",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#cor_closed",
  "type": "Corollary",
  "number": "1.5.5",
  "title": "Closed, closure, limit points.",
  "body": " Closed, closure, limit points   Let be a subset of the topological space . The following are equivalent.    is closed.     contains all of its limit points.     .       Throughout we let be the set of limit points of .   Implication:  If is closed, then by we have . It follows that , as desired.    Implication:  If , then again by we have .    Implication:  The implication is obvious since is closed.    "
},
{
  "id": "d_Hausdorff",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#d_Hausdorff",
  "type": "Definition",
  "number": "1.5.6",
  "title": "Hausdorff property.",
  "body": " Hausdorff property   A topological space is Hausdorff if for any two distinct elements ( , ) there are open neighborhoods of and , respectively, that are disjoint ( , ).   "
},
{
  "id": "th_Hausdorff_props",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#th_Hausdorff_props",
  "type": "Theorem",
  "number": "1.5.7",
  "title": "Hausdorff properties.",
  "body": " Hausdorff properties   Let be a Hausdorff space.   All singletons are closed.    All finite subsets of are closed.          Fix any . For any , there exist disjoint open sets containing and , respectively. In particular, we have . It follows that . and thus that . Thus is closed.    This follows easily since a finite union of closed sets is closed.      "
},
{
  "id": "d_T1",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#d_T1",
  "type": "Definition",
  "number": "1.5.8",
  "title": "The <span class=\"process-math\">\\(T_1\\)<\/span>-axiom.",
  "body": " The -axiom   A topological space is (or is a -space , or satisfies the -axiom ) if all finite subsets of are closed.   "
},
{
  "id": "rm_T1",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#rm_T1",
  "type": "Remark",
  "number": "1.5.9",
  "title": "<span class=\"process-math\">\\(T_1\\)<\/span> as separation axiom.",
  "body": " as separation axiom  The is called a separation axiom , or Trennungsaxiom in German: hence the T . To see more explicitly why this is called a separation axiom, note that (a) is equivalent to the property that any singleton is closed, and (b) this in turn is equivalent to saying for any two elements there is an open neighborhood of that does not contain ; we think of this as separating and .  We will say more about separation axioms later. For now, I'll mention that the Hausdorff property is itself a separation axiom, called the -axiom.  "
},
{
  "id": "cor_Hausdorff_T1",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#cor_Hausdorff_T1",
  "type": "Corollary",
  "number": "1.5.10",
  "title": "Hausdorff versus <span class=\"process-math\">\\(T_1\\)<\/span>.",
  "body": " Hausdorff versus   Let be a topological space.   If is Hausdorff, then is     It is not the case that if is , then must be Hausdorff.   Using logical shorthand, we have       This follows immediately from .    We provide a counterexample to the claim that implies Hausdorff. Let be any infinite set endowed with the cofinite topology. The closed sets of are precisely the finite sets and itself, as we saw in . Thus is . On the other hand, is not Hausdorff. Indeed take any two distinct elements . Let and be any pair of open neighborhoods of and , respectively. We will show that . If either of the open neighborhoods is equal to itself, the claim is obvious. Otherwise is a finite set that does not contain and is a finite set that does not contain . Since is infinite, , and hence , as desired.     "
},
{
  "id": "eg_metric_implies_Hausdorff",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#eg_metric_implies_Hausdorff",
  "type": "Example",
  "number": "1.5.11",
  "title": "Metric spaces are Hausdorff.",
  "body": " Metric spaces are Hausdorff      Show that any metric space is Hausdorff.    Show that any infinite set endowed with the cofinite topology is not a metric space.          Let be a metric space. Given any , we have . The open balls are disjoint open neighrborhoods of and , respectively.    Let be an infinite set with the cofinite topology. We will show that is not Hausdorff and hence not a metric space. In fact, we will show that any two nonempty open sets in intersect nontrivially. Indeed, given nonempty open sets , we have by definition , for finite sets . Their intersection is the open set Since is infinite and the are finite, we have , and thus .      "
},
{
  "id": "s_limitpoints_hausdorff-14",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#s_limitpoints_hausdorff-14",
  "type": "Topological specimen",
  "number": "8",
  "title": "Zariski topology on <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Zariski topology on  Let , and let be the set of polynomials in the unknowns with real coefficients. For any define . In other words, is the set of points in that are simultaneous zeros for all polynomials . The set defines a topology on called the Zariski topology . As you will show in homework (for ), this topology is but not Hausdorff.   Proved in homework for . The general proof is not much different.   "
},
{
  "id": "d_convergent_sequence",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#d_convergent_sequence",
  "type": "Definition",
  "number": "1.5.12",
  "title": "Convergent sequence.",
  "body": " Convergent sequence   Let be a topological space. A sequence of elements of  converges to the element , denoted , if for any open neighborhood of , there is a positive integer such that for all . We say is a convergent sequence in this case, and call the limit of the sequence.   "
},
{
  "id": "eg_cofinite_convergent_sequence",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#eg_cofinite_convergent_sequence",
  "type": "Example",
  "number": "1.5.13",
  "title": "Limits in the cofinite topology.",
  "body": " Limits in the cofinite topology   Let endowed with the cofinite topology. Show that the sequence converges to all elements . In particular, the limit of a convergent sequence need not be unique!    Let and let be any open set containing . We have for some , . Since this list is finite, we can pick such that if , then for any , and hence that , as desired.  Note: the same argument shows that any sequence containing infinitely many distinct elements is convergent, and in fact converges to all elements of .   "
},
{
  "id": "th_Hausdorff_unique_limits",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#th_Hausdorff_unique_limits",
  "type": "Theorem",
  "number": "1.5.14",
  "title": "Unique limits in Hausdorff spaces.",
  "body": " Unique limits in Hausdorff spaces   If is Hausdorff, then any sequence has at most one limit.    Assume and let . Let be disjoint open sets containing , respectively. By convergence, there is an such that if , then . It follows that for all and hence that does not converge to .   "
},
{
  "id": "th_T1_limitpoints",
  "level": "2",
  "url": "s_limitpoints_hausdorff.html#th_T1_limitpoints",
  "type": "Theorem",
  "number": "1.5.15",
  "title": "Limit points in <span class=\"process-math\">\\(T_1\\)<\/span>-spaces.",
  "body": " Limit points in -spaces   Let be a subset of the -space . An element is a limit point of if and only if every open neighborhood of intersects in infinitely many points.    The reverse implication is obvious.  For the forward implication we will show the contrapositive. To this end, suppose there is an open neighborhood of such that is finite. Since finite sets are closed in , given any subset , we have is open. Taking , we see that is open, contains , and satisfies . It follows that is not a limit of point of , as desired.   "
},
{
  "id": "s_subspace_finite_products",
  "level": "1",
  "url": "s_subspace_finite_products.html",
  "type": "Section",
  "number": "1.6",
  "title": "Subspaces and finite products",
  "body": " Subspaces and finite products    Subspaces and product spaces are constructions that allow us to build new topological spaces from existing ones.    Subspaces   Subspace  Given a topological space and a subset the set defined as defines a topology on called the subspace topology . We call , together with the topology , a subspace of .   We show that the collection is a topology on .  Axiom (1). Since , we have and .  Axiom (2). Let be a collection of elements of . By definition we have for open sets . It follows that , since is open in .  Axiom (3). Given elements , we have .     Subspace properties   Let be a subspace of .    If is a basis of , then the set is a basis for .     is closed in if and only if for some that is closed in .    If is (resp. Hausdorff, resp. metrizable), then is (resp., Hausdorff, resp. metrizable).         Axiom 1. For any we have for some , and thus .  Axiom 2. Given two elements , and , there is a basis element satisfying . It follows that and .    Let . We have .    Assume is . Given , the set is closed in . From the previous result it follows that is closed in . Thus is .  Assume is Hausdorff. Given there are disjoint open (in ) neighborhoods of , respectively. The sets are then open disjoint neighborhoods of in the subspace topology of .        Open\/closed depends on topology   Let be a subspace of . Prove:     Consider as a subspace of with the standard topology. The set it self is both open and closed in the subspace , but is neither open nor closed in .     Openness\/closedness transitivity   Let be a subspace of .    If is open in and is open in , then is open in .    If is closed in and is closed in , then is closed in         If is open in , then for some open set of . Since is open in , we have is open in .    The proof is obtained from the previous argument by replacing all instances of open with closed , using (2) of .        Finite product spaces   Finite products  Let be topological spaces, and let . The collection is a basis on . The topology generated by is the product topology on , and is called the product of the spaces .   We show that is a basis.  Axiom 1. Given , we have .  Let and . Given , we have for all , and hence .     Product basis not a topology necessarily   Consider the product topology on , where each copy of is equipped with the standard topology.   Describe the open sets of qualitatively. Give an example demonstrating that the product basis is not a topology in this case.    Show that is equal to the the Euclidean topology.       Firstly, as we will show in more generality in , the set forms a basis for the product topology on . Graphically, these basis elements are just open rectangles in the plane.    An open set in the product topology on is anything that can be written as a union of open rectangles, by the remark made above. To see that the product basis is not in general a topology, consider , where and . We claim that not only is not a product of open sets, it is in fact not the product of any sets. Indeed, if for two sets , then we would have to have , in which case . This is a contradiction since .    Using the remark above, it is enough to show that open circles (basis elements in the standard topology) can be written as unions of open rectangles (basis elements in the product topology) and vice versa. This is clear.       "
},
{
  "id": "top_eg_subspace",
  "level": "2",
  "url": "s_subspace_finite_products.html#top_eg_subspace",
  "type": "Topological specimen",
  "number": "9",
  "title": "Subspace.",
  "body": " Subspace  Given a topological space and a subset the set defined as defines a topology on called the subspace topology . We call , together with the topology , a subspace of .   We show that the collection is a topology on .  Axiom (1). Since , we have and .  Axiom (2). Let be a collection of elements of . By definition we have for open sets . It follows that , since is open in .  Axiom (3). Given elements , we have .   "
},
{
  "id": "th_subspace_props",
  "level": "2",
  "url": "s_subspace_finite_products.html#th_subspace_props",
  "type": "Theorem",
  "number": "1.6.1",
  "title": "Subspace properties.",
  "body": " Subspace properties   Let be a subspace of .    If is a basis of , then the set is a basis for .     is closed in if and only if for some that is closed in .    If is (resp. Hausdorff, resp. metrizable), then is (resp., Hausdorff, resp. metrizable).         Axiom 1. For any we have for some , and thus .  Axiom 2. Given two elements , and , there is a basis element satisfying . It follows that and .    Let . We have .    Assume is . Given , the set is closed in . From the previous result it follows that is closed in . Thus is .  Assume is Hausdorff. Given there are disjoint open (in ) neighborhoods of , respectively. The sets are then open disjoint neighborhoods of in the subspace topology of .      "
},
{
  "id": "eg_relative_openness",
  "level": "2",
  "url": "s_subspace_finite_products.html#eg_relative_openness",
  "type": "Example",
  "number": "1.6.2",
  "title": "Open\/closed depends on topology.",
  "body": " Open\/closed depends on topology   Let be a subspace of . Prove:     Consider as a subspace of with the standard topology. The set it self is both open and closed in the subspace , but is neither open nor closed in .   "
},
{
  "id": "th_transitivity_open_closed",
  "level": "2",
  "url": "s_subspace_finite_products.html#th_transitivity_open_closed",
  "type": "Theorem",
  "number": "1.6.3",
  "title": "Openness\/closedness transitivity.",
  "body": " Openness\/closedness transitivity   Let be a subspace of .    If is open in and is open in , then is open in .    If is closed in and is closed in , then is closed in         If is open in , then for some open set of . Since is open in , we have is open in .    The proof is obtained from the previous argument by replacing all instances of open with closed , using (2) of .     "
},
{
  "id": "top_eg_finite_product",
  "level": "2",
  "url": "s_subspace_finite_products.html#top_eg_finite_product",
  "type": "Topological specimen",
  "number": "10",
  "title": "Finite products.",
  "body": " Finite products  Let be topological spaces, and let . The collection is a basis on . The topology generated by is the product topology on , and is called the product of the spaces .   We show that is a basis.  Axiom 1. Given , we have .  Let and . Given , we have for all , and hence .   "
},
{
  "id": "eg_product_basis_not_topology",
  "level": "2",
  "url": "s_subspace_finite_products.html#eg_product_basis_not_topology",
  "type": "Example",
  "number": "1.6.4",
  "title": "Product basis not a topology necessarily.",
  "body": " Product basis not a topology necessarily   Consider the product topology on , where each copy of is equipped with the standard topology.   Describe the open sets of qualitatively. Give an example demonstrating that the product basis is not a topology in this case.    Show that is equal to the the Euclidean topology.       Firstly, as we will show in more generality in , the set forms a basis for the product topology on . Graphically, these basis elements are just open rectangles in the plane.    An open set in the product topology on is anything that can be written as a union of open rectangles, by the remark made above. To see that the product basis is not in general a topology, consider , where and . We claim that not only is not a product of open sets, it is in fact not the product of any sets. Indeed, if for two sets , then we would have to have , in which case . This is a contradiction since .    Using the remark above, it is enough to show that open circles (basis elements in the standard topology) can be written as unions of open rectangles (basis elements in the product topology) and vice versa. This is clear.     "
},
{
  "id": "s_product2",
  "level": "1",
  "url": "s_product2.html",
  "type": "Section",
  "number": "1.7",
  "title": "Arbitrary products",
  "body": " Arbitrary products   We now endeavor to give a topological structure to an arbitrary product of topological spaces. (See and for the definitions of arbitrary tuples and Cartesian products of sets.) As we will see, we can extend the finite product topology to this more general setting in two very different ways.    Product space (arbitrary)  Let be a collection of topological spaces. We define two distinct topologies on the the product .   Box topology  The box topology on is the topology generated by the basis .    Product topology  The product topology on is the topology generated by the basis .   We have ; when the index set is finite, we have .   To see that both collections are indeed bases, observe that for any we have , which is an element of in both cases; and that in both cases if we have , , then , is also an element of .     Product coarser than box   It is clear from the definition that we always have , and hence the product topology is coarser than (contained in) the box topology.    Following Munkres, given a set and the special index set , we write for as a shorthand.   Infinite binary sequences   Let .   Compare the box and product topologies on , where is given the discrete topology.    Compare the box and product topologies on , where is given the trivial topology.       As observed in , the product topology is always contained in the box topology. Let's see whether the inclusion is strict in either case.    Assume has the discrete topology. Since is open in , the set is open in the box topology. To see that it is not open in the product topology, take and let contains . By definition, we have for some , where is an open subset of . Since , we have . Since for all , the element , from which it follows that . We conclude that is not a union of basis elements of the product topology, and hence is not open in the product topology.  It is easy to see that is discrete in the box topology. The argument above shows that is not discrete in the product topology, since the singleton is not open.    Now equip with the trivial topology. Since the only open subsets of are and it follows that a basis element in either topology is either empty (if for any  ) or equal to (if for all ). Since the bases of the two topologies are equal, the topologies are equal. Furthermore, since the only basis elements are and , the topology on is just the trivial one: , we have .       Properties of product spaces   Let be a collection of topological spaces, and let be the box and product topologies on .    Let be a basis for for all . The set is a basis for .  Similarly, the collection of all subsets of of the form , where for all indices in a finite set and for all , is a basis for .    Given subspaces for all , let . The box (resp., product) topology on is equal to the box (resp., product) subspace topology on .    If is Hausdorff (resp., ) for all , then is Hausdorff (resp., ) with respect to both the box and product topologies.    Given subsets for all , we have , where the closure on the right can be taken either with respect to box or product topology on .        We prove each basis axiom separately (for both the box and product basis).  Axiom 1. Given , we can find basis elements containing . We have . Axiom 2. This axiom follows readily from the set theoretic fact that . I'll leave the details to you.    It helps to formulate this result in plain English: we wish to show that the subspace topology of the (box) product topology is equal to the (box) product topology of the subspace topologies.  Fix a choice of topology , let be the corresponding basis as defined in , and let denote the corresponding subspace topology on . Recall ( ) that is a basis for the subspace topology . Thus  , where the last equality follows from the set theory identity . Now observe that when the set in is precisely the basis for the box product topology on the subspaces as described in ; and similarly, when the set in is the basis for the product topology on the subspaces .  Going back to our plan English formulation, we have shown that the subspace topology of the (box) product topology and the (box) product topology of the subspace topologies share a common basis ( ). It follows that the topologies themselves are equal.    Assume is Hausdorff for all . If and are distinct, then we have for some . Since is Hausdorff, there are disjoint open neighborhoods of in . The sets , are disjoint open basis elements for both topologies containing , respectively. Thus is Hausdorff. The proof for the statement is similar.    We prove the equality by showing . . If , there is an index such that , and thus an open set such that . The set is open in both topologies (box and product), contains , and is disjoint with . We conclude that in both topologies.   . If there is an open basis element in the topology (box or product) containing that is disjoint with . It follows that we must have for some and open , and thus that . We conclude that .      "
},
{
  "id": "top_eg_arbitrary_product",
  "level": "2",
  "url": "s_product2.html#top_eg_arbitrary_product",
  "type": "Topological specimen",
  "number": "11",
  "title": "Product space (arbitrary).",
  "body": " Product space (arbitrary)  Let be a collection of topological spaces. We define two distinct topologies on the the product .   Box topology  The box topology on is the topology generated by the basis .    Product topology  The product topology on is the topology generated by the basis .   We have ; when the index set is finite, we have .   To see that both collections are indeed bases, observe that for any we have , which is an element of in both cases; and that in both cases if we have , , then , is also an element of .   "
},
{
  "id": "rm_box_product",
  "level": "2",
  "url": "s_product2.html#rm_box_product",
  "type": "Remark",
  "number": "1.7.1",
  "title": "Product coarser than box.",
  "body": " Product coarser than box   It is clear from the definition that we always have , and hence the product topology is coarser than (contained in) the box topology.   "
},
{
  "id": "s_product2-5",
  "level": "2",
  "url": "s_product2.html#s_product2-5",
  "type": "Notation",
  "number": "1.7.2",
  "title": "",
  "body": "Following Munkres, given a set and the special index set , we write for as a shorthand. "
},
{
  "id": "eg_product_binary",
  "level": "2",
  "url": "s_product2.html#eg_product_binary",
  "type": "Example",
  "number": "1.7.3",
  "title": "Infinite binary sequences.",
  "body": " Infinite binary sequences   Let .   Compare the box and product topologies on , where is given the discrete topology.    Compare the box and product topologies on , where is given the trivial topology.       As observed in , the product topology is always contained in the box topology. Let's see whether the inclusion is strict in either case.    Assume has the discrete topology. Since is open in , the set is open in the box topology. To see that it is not open in the product topology, take and let contains . By definition, we have for some , where is an open subset of . Since , we have . Since for all , the element , from which it follows that . We conclude that is not a union of basis elements of the product topology, and hence is not open in the product topology.  It is easy to see that is discrete in the box topology. The argument above shows that is not discrete in the product topology, since the singleton is not open.    Now equip with the trivial topology. Since the only open subsets of are and it follows that a basis element in either topology is either empty (if for any  ) or equal to (if for all ). Since the bases of the two topologies are equal, the topologies are equal. Furthermore, since the only basis elements are and , the topology on is just the trivial one: , we have .     "
},
{
  "id": "th_product_props",
  "level": "2",
  "url": "s_product2.html#th_product_props",
  "type": "Theorem",
  "number": "1.7.4",
  "title": "Properties of product spaces.",
  "body": " Properties of product spaces   Let be a collection of topological spaces, and let be the box and product topologies on .    Let be a basis for for all . The set is a basis for .  Similarly, the collection of all subsets of of the form , where for all indices in a finite set and for all , is a basis for .    Given subspaces for all , let . The box (resp., product) topology on is equal to the box (resp., product) subspace topology on .    If is Hausdorff (resp., ) for all , then is Hausdorff (resp., ) with respect to both the box and product topologies.    Given subsets for all , we have , where the closure on the right can be taken either with respect to box or product topology on .        We prove each basis axiom separately (for both the box and product basis).  Axiom 1. Given , we can find basis elements containing . We have . Axiom 2. This axiom follows readily from the set theoretic fact that . I'll leave the details to you.    It helps to formulate this result in plain English: we wish to show that the subspace topology of the (box) product topology is equal to the (box) product topology of the subspace topologies.  Fix a choice of topology , let be the corresponding basis as defined in , and let denote the corresponding subspace topology on . Recall ( ) that is a basis for the subspace topology . Thus  , where the last equality follows from the set theory identity . Now observe that when the set in is precisely the basis for the box product topology on the subspaces as described in ; and similarly, when the set in is the basis for the product topology on the subspaces .  Going back to our plan English formulation, we have shown that the subspace topology of the (box) product topology and the (box) product topology of the subspace topologies share a common basis ( ). It follows that the topologies themselves are equal.    Assume is Hausdorff for all . If and are distinct, then we have for some . Since is Hausdorff, there are disjoint open neighborhoods of in . The sets , are disjoint open basis elements for both topologies containing , respectively. Thus is Hausdorff. The proof for the statement is similar.    We prove the equality by showing . . If , there is an index such that , and thus an open set such that . The set is open in both topologies (box and product), contains , and is disjoint with . We conclude that in both topologies.   . If there is an open basis element in the topology (box or product) containing that is disjoint with . It follows that we must have for some and open , and thus that . We conclude that .     "
},
{
  "id": "s_prods_convergence_metric",
  "level": "1",
  "url": "s_prods_convergence_metric.html",
  "type": "Section",
  "number": "1.8",
  "title": "Convergence in product spaces",
  "body": " Convergence in product spaces   The relative virtues of the product and box topologies begin to come to light as we look at issues of convergence and metrics in product spaces. In particular, we see in the context of the spaces and that different topologies on these product sets give rise to different and valuable notions of function convergence for real-valued functions.    Pointwise convergence   Let be a collection of topological spaces, let , and let be a sequence of elements of : , using tuple notation, for each we have , where . The sequence  converges pointwise to an element if for all we have : , .     Pointwise convergence   Observe that the definition of pointwise convergence makes no reference to any topology on . Below we investigate how it relates to convergence in the box and product topologies.     Sequences in and   Our understanding of tuples in product spaces as functions pays real dividends when investigating convergence of sequences in these spaces.  For example, if a tuple in is just a function , the graph of which in the real plane is easily visualized: namely, a discrete collection of plotted points for .  Similarly, a tuple in is just a function , which is easily visualized via a graph.  In both cases, sequences of tuples are easily visualized as sequences of functions (via their graphs). Furthermore, for the sequence to converge pointwise pointwise at a given index ( for , and for ) is simply for the sequence of values to converge.     Pointwise convergence and product topology   Let be a collection of topologies, let be their product, and let be a sequence of elements of .    If in the box or product topology, then converges to pointwise.    In the product topology we have .         Suppose in either topology. Fix and let be any open set containing . The set is an open neighborhood of in both topologies. By convergence there is an such that for all . It follows that for all . This proves that for all .    Suppose the sequence converges to pointwise. To show in the product topology it is enough to show that for any base open set of the form there is an such that if , then . Since converges to pointwise, for each , there is an such that if , then . Setting , it follows that if then for . Since for all we conclude that for all , as desired.        Convergent sequences in   Let , where is equipped with the standard topology, and let be the sequence defined as for all .    Visualize the sequence in the real plane.    Decide whether the sequence converges pointwise. If so, what does it converge to?    Decide whether the sequence converges in the product topology, and whether it converges in the box topology.      It is relatively easy to see that the sequence converges pointwise to . Since with the standard topology is Hausdorff, it follows that this pointwise limit is unique. By , also converges in the product topology to . We claim does not converge at all in the box topology. First observe, that the only candidate for the limit of this convergence is , using (1) of . Now consider the open set . We have , and yet not only is it not the case that the sequence eventually lies in , in fact we have for all .     Standard bounded metric   Let be a metric space. The function defines a metrix on , called the standard bounded metric corresponding to . The two metrics induce the same topology on     See Munkres for a proof that is a metric, and that and induce the same topology.     Uniform topology  Let for some set , where is equipped with the standard topology. Let for all . The function is a metric called the uniform metric on . The uniform topology is the topology induced by .   See Munkres for a proof that is a metric.      Let for some set , where is equipped with the standard topology, and let be the product, uniform, and box topologies on . We have . When is infinite these inclusions are all strict.    Take any open set in the product topology and any lying in . There is an open neighborhood of lying in of the form , where we may further assume for all . Letting , I claim we have . Indeed, for any , we have This proves that   For the next inclusion, take any open set in the uniform topology. For any we can find such that . Let , which is open in the box topology. Given any , we have . It follows that in the uniform metric we have , showing that . This proves .  The fact that both inclusions are strict when is infinite is left as a homework exercise.     Product topology on   Let , where is equipped with the standard topology, and let for all . The function is a metric on that induces the product topology.    See Munkres. The proof that the product topology is equal to the topology induced by this metric is quite illustrative, and will be a useful model for some of your homework exercises.     When is the product topology on metrizable?    shows that the product topology on is metrizable. It turns out that when is uncountable, this is no longer true. (As we will see later.) In particular, the product topology on is not a metric topology. The product topology on is valuable to us, since it is the natural setting to study pointwise convergence of functions ( ). Consider this an argument for studying topologies beyond metric topologies.     "
},
{
  "id": "d_pointwise_convergence",
  "level": "2",
  "url": "s_prods_convergence_metric.html#d_pointwise_convergence",
  "type": "Definition",
  "number": "1.8.1",
  "title": "Pointwise convergence.",
  "body": " Pointwise convergence   Let be a collection of topological spaces, let , and let be a sequence of elements of : , using tuple notation, for each we have , where . The sequence  converges pointwise to an element if for all we have : , .   "
},
{
  "id": "rm_pointwise_convergence",
  "level": "2",
  "url": "s_prods_convergence_metric.html#rm_pointwise_convergence",
  "type": "Remark",
  "number": "1.8.2",
  "title": "Pointwise convergence.",
  "body": " Pointwise convergence   Observe that the definition of pointwise convergence makes no reference to any topology on . Below we investigate how it relates to convergence in the box and product topologies.   "
},
{
  "id": "s_prods_convergence_metric-5",
  "level": "2",
  "url": "s_prods_convergence_metric.html#s_prods_convergence_metric-5",
  "type": "Example",
  "number": "1.8.3",
  "title": "Sequences in <span class=\"process-math\">\\(\\R^\\omega\\)<\/span> and <span class=\"process-math\">\\(\\R^\\R\\)<\/span>.",
  "body": " Sequences in and   Our understanding of tuples in product spaces as functions pays real dividends when investigating convergence of sequences in these spaces.  For example, if a tuple in is just a function , the graph of which in the real plane is easily visualized: namely, a discrete collection of plotted points for .  Similarly, a tuple in is just a function , which is easily visualized via a graph.  In both cases, sequences of tuples are easily visualized as sequences of functions (via their graphs). Furthermore, for the sequence to converge pointwise pointwise at a given index ( for , and for ) is simply for the sequence of values to converge.   "
},
{
  "id": "th_pointwise_convergence",
  "level": "2",
  "url": "s_prods_convergence_metric.html#th_pointwise_convergence",
  "type": "Theorem",
  "number": "1.8.4",
  "title": "Pointwise convergence and product topology.",
  "body": " Pointwise convergence and product topology   Let be a collection of topologies, let be their product, and let be a sequence of elements of .    If in the box or product topology, then converges to pointwise.    In the product topology we have .         Suppose in either topology. Fix and let be any open set containing . The set is an open neighborhood of in both topologies. By convergence there is an such that for all . It follows that for all . This proves that for all .    Suppose the sequence converges to pointwise. To show in the product topology it is enough to show that for any base open set of the form there is an such that if , then . Since converges to pointwise, for each , there is an such that if , then . Setting , it follows that if then for . Since for all we conclude that for all , as desired.      "
},
{
  "id": "s_prods_convergence_metric-7",
  "level": "2",
  "url": "s_prods_convergence_metric.html#s_prods_convergence_metric-7",
  "type": "Example",
  "number": "1.8.5",
  "title": "Convergent sequences in <span class=\"process-math\">\\(\\R^\\omega\\)<\/span>.",
  "body": " Convergent sequences in   Let , where is equipped with the standard topology, and let be the sequence defined as for all .    Visualize the sequence in the real plane.    Decide whether the sequence converges pointwise. If so, what does it converge to?    Decide whether the sequence converges in the product topology, and whether it converges in the box topology.      It is relatively easy to see that the sequence converges pointwise to . Since with the standard topology is Hausdorff, it follows that this pointwise limit is unique. By , also converges in the product topology to . We claim does not converge at all in the box topology. First observe, that the only candidate for the limit of this convergence is , using (1) of . Now consider the open set . We have , and yet not only is it not the case that the sequence eventually lies in , in fact we have for all .   "
},
{
  "id": "d_standard_bounded_metric",
  "level": "2",
  "url": "s_prods_convergence_metric.html#d_standard_bounded_metric",
  "type": "Definition",
  "number": "1.8.6",
  "title": "Standard bounded metric.",
  "body": " Standard bounded metric   Let be a metric space. The function defines a metrix on , called the standard bounded metric corresponding to . The two metrics induce the same topology on     See Munkres for a proof that is a metric, and that and induce the same topology.   "
},
{
  "id": "top_eg_uniform_topology",
  "level": "2",
  "url": "s_prods_convergence_metric.html#top_eg_uniform_topology",
  "type": "Topological specimen",
  "number": "12",
  "title": "Uniform topology.",
  "body": " Uniform topology  Let for some set , where is equipped with the standard topology. Let for all . The function is a metric called the uniform metric on . The uniform topology is the topology induced by .   See Munkres for a proof that is a metric.   "
},
{
  "id": "th_product_uniform_box",
  "level": "2",
  "url": "s_prods_convergence_metric.html#th_product_uniform_box",
  "type": "Theorem",
  "number": "1.8.7",
  "title": "",
  "body": "  Let for some set , where is equipped with the standard topology, and let be the product, uniform, and box topologies on . We have . When is infinite these inclusions are all strict.    Take any open set in the product topology and any lying in . There is an open neighborhood of lying in of the form , where we may further assume for all . Letting , I claim we have . Indeed, for any , we have This proves that   For the next inclusion, take any open set in the uniform topology. For any we can find such that . Let , which is open in the box topology. Given any , we have . It follows that in the uniform metric we have , showing that . This proves .  The fact that both inclusions are strict when is infinite is left as a homework exercise.   "
},
{
  "id": "th_prod_metric",
  "level": "2",
  "url": "s_prods_convergence_metric.html#th_prod_metric",
  "type": "Theorem",
  "number": "1.8.8",
  "title": "Product topology on <span class=\"process-math\">\\(\\R^\\omega\\)<\/span>.",
  "body": " Product topology on   Let , where is equipped with the standard topology, and let for all . The function is a metric on that induces the product topology.    See Munkres. The proof that the product topology is equal to the topology induced by this metric is quite illustrative, and will be a useful model for some of your homework exercises.   "
},
{
  "id": "rm_prod_metrizable",
  "level": "2",
  "url": "s_prods_convergence_metric.html#rm_prod_metrizable",
  "type": "Remark",
  "number": "1.8.9",
  "title": "When is the product topology on <span class=\"process-math\">\\(\\R^I\\)<\/span> metrizable?",
  "body": " When is the product topology on metrizable?    shows that the product topology on is metrizable. It turns out that when is uncountable, this is no longer true. (As we will see later.) In particular, the product topology on is not a metric topology. The product topology on is valuable to us, since it is the natural setting to study pointwise convergence of functions ( ). Consider this an argument for studying topologies beyond metric topologies.   "
},
{
  "id": "s_continuous",
  "level": "1",
  "url": "s_continuous.html",
  "type": "Section",
  "number": "1.9",
  "title": "Continuous functions",
  "body": " Continuous functions  In calculus you learn that a function is defined to be continuous if for all there is a such that for all we have the implication . Now that we have some experience generalizing analysis concepts to topological ones, let's see how best this translates to arbitrary topologies.   Continuous function   Let be topological spaces. A function is continuous if for all open sets , the set is open in . Using logical shorthand: .     Preimage properties  Continuity is defined in terms of preimages of sets under a function . Thankfully, the preimage operation behaves very well with respect to our various set operations. In particular, we have the following identities, which you may make use of without further ado:     Continuous functions: basic examples      Identity function  Given a topological space , the identity function is continuous. Here we take as the topology of both the domain and codomain.    Constant functions  Let be topological spaces. For any fixed the constant function , defined as for all is continuous.    Subspace inclusions  Let be a subspace of . The inclusion map is continuous with respect to the subspace topology on .    Maps from discrete spaces  If is equipped with the discrete topology, then any function to a topological space is continuous.    Maps to trivial spaces  If is equipped with the trivial topology, then any map from a topological space to is continous.       These are all pretty elementary. I'll prove (3). Let be a subspace and let continuous. Given any open set , we have which by definition is open in the subspace topology. Thus is continuous.     Non-continuous inclusion   Show that the identity map is not continuous. Here the topology of the domain is the standard one, and the topology on the codomain is the lower limit topology.    For any we have . If we choose to be any open set of that is not open in the standard topology, it follows that is not open in and hence that is not continuous. We may take for example.  Note: let be two topologies on the set , and for let denote the space with underlying set and topology . The same argument above can be used to show that is continuous if and only if .     Products and projections   Let be a collection of topological spaces, and let . For each define the projection function as . In other words, the -th projection map returns the -th coordinate of an element of .   Prove: if is given the product topology, then is continuous for all .    Prove: given a topology on , we have continuous for all if and only if contains the product topology. Thus, in particular, the product topology is the coarsest topology on making each projection map continuous.       It is enough to prove (2), since it clearly implies (1). The maps are continuous in a topology if and only if for all and open the preimage is open in . Next it clear that is open in for all if and only if is open for any finite set . Since these sets form a basis for the product topology, we conclude that the projections are all continuous if and only if is finer than the product topology.      Let be a function between the topological spaces , and let be a basis for . The following statements are equivalent.    is continuous.    For all , the preimage is open in .       It is clear that (1) implies (2). Assume (2) is true. Given open , we can write with . It follows that is open, since by assumption each is open.     Continuity equivalences   Let be a function between the topological spaces . The following statements are equivalent.    is continuous.    For all , we have .    For all closed sets , the preimage is closed in .    Continuity at  For all and all sets containing , there is an open set containing such that .        . Take . We have for some . If is any open neighborhood of , then since is continuous is an open neighborhood of . Since , there exists . It follows that , showing this intersection is nonempt. We concdlue that , as desited.   . Assume (2) holds of . Given closed let . To show is closed, we will show that . Since , this is equivalent to showing ; but this follows from (2) since , where the last inclusion in this chain follows from the fact that is closed and contains .   . Let , and let be an open neighborhood of . The set is closed, whence is closed. It follows that is an open set containing , and we have .   . We assume (4). Let be an open set. For any , there is by (4) (taking open set ) an open set such that . It follows that . Thus for any there is an open such that . It follows that is open, as desired.      Let be a map between topological spaces. We say that is continuous at x , for , if for all open neighborhoods , there is an open neighborhood such that .     Building continuous functions      Composition  If and are continuous, then the composition is continuous.    Restriction  If is continuous, and is a subspace, then the restriction is continuous.    Expansion  If is continuous and is a subspace of , then the function obtained by composing with the inclusion is continuous.    Local on source (open pasting)  If is a function between topological spaces and there is a collection of open sets such that and the restrictions are continuous, then is continuous.    Closed pasting  Let be topological spaces, and suppose , where are closed sets. Given continuous functions and that satisfy for all , the function defined as is continuous.       Statements (1)-(3) are elementary, and can be found in Munkres.  Statement (4) follows from equivalent condition (4) from . Indeed, take any and open set . Since for some , and since is continuous, there is an open with , such that . Since is open in and is open in , we conclude is open in , as desired.  To prove statement (5) we show that is closed for any closed set . Since if and only if and or and , we have . Since and are closed we have closed in and closed in . Since and are closed, transitivity of closedness implies and are closed in . We conclude is closed, as desired.    "
},
{
  "id": "d_continuous_function",
  "level": "2",
  "url": "s_continuous.html#d_continuous_function",
  "type": "Definition",
  "number": "1.9.1",
  "title": "Continuous function.",
  "body": " Continuous function   Let be topological spaces. A function is continuous if for all open sets , the set is open in . Using logical shorthand: .   "
},
{
  "id": "rm_preimage",
  "level": "2",
  "url": "s_continuous.html#rm_preimage",
  "type": "Remark",
  "number": "1.9.2",
  "title": "Preimage properties.",
  "body": " Preimage properties  Continuity is defined in terms of preimages of sets under a function . Thankfully, the preimage operation behaves very well with respect to our various set operations. In particular, we have the following identities, which you may make use of without further ado:   "
},
{
  "id": "s_continuous-5",
  "level": "2",
  "url": "s_continuous.html#s_continuous-5",
  "type": "Example",
  "number": "1.9.3",
  "title": "Continuous functions: basic examples.",
  "body": " Continuous functions: basic examples      Identity function  Given a topological space , the identity function is continuous. Here we take as the topology of both the domain and codomain.    Constant functions  Let be topological spaces. For any fixed the constant function , defined as for all is continuous.    Subspace inclusions  Let be a subspace of . The inclusion map is continuous with respect to the subspace topology on .    Maps from discrete spaces  If is equipped with the discrete topology, then any function to a topological space is continuous.    Maps to trivial spaces  If is equipped with the trivial topology, then any map from a topological space to is continous.       These are all pretty elementary. I'll prove (3). Let be a subspace and let continuous. Given any open set , we have which by definition is open in the subspace topology. Thus is continuous.   "
},
{
  "id": "s_continuous-6",
  "level": "2",
  "url": "s_continuous.html#s_continuous-6",
  "type": "Example",
  "number": "1.9.4",
  "title": "Non-continuous inclusion.",
  "body": " Non-continuous inclusion   Show that the identity map is not continuous. Here the topology of the domain is the standard one, and the topology on the codomain is the lower limit topology.    For any we have . If we choose to be any open set of that is not open in the standard topology, it follows that is not open in and hence that is not continuous. We may take for example.  Note: let be two topologies on the set , and for let denote the space with underlying set and topology . The same argument above can be used to show that is continuous if and only if .   "
},
{
  "id": "eg_cont_projections",
  "level": "2",
  "url": "s_continuous.html#eg_cont_projections",
  "type": "Example",
  "number": "1.9.5",
  "title": "Products and projections.",
  "body": " Products and projections   Let be a collection of topological spaces, and let . For each define the projection function as . In other words, the -th projection map returns the -th coordinate of an element of .   Prove: if is given the product topology, then is continuous for all .    Prove: given a topology on , we have continuous for all if and only if contains the product topology. Thus, in particular, the product topology is the coarsest topology on making each projection map continuous.       It is enough to prove (2), since it clearly implies (1). The maps are continuous in a topology if and only if for all and open the preimage is open in . Next it clear that is open in for all if and only if is open for any finite set . Since these sets form a basis for the product topology, we conclude that the projections are all continuous if and only if is finer than the product topology.   "
},
{
  "id": "th_continuity_basis",
  "level": "2",
  "url": "s_continuous.html#th_continuity_basis",
  "type": "Theorem",
  "number": "1.9.6",
  "title": "",
  "body": "  Let be a function between the topological spaces , and let be a basis for . The following statements are equivalent.    is continuous.    For all , the preimage is open in .       It is clear that (1) implies (2). Assume (2) is true. Given open , we can write with . It follows that is open, since by assumption each is open.   "
},
{
  "id": "th_continuous_equivalence",
  "level": "2",
  "url": "s_continuous.html#th_continuous_equivalence",
  "type": "Theorem",
  "number": "1.9.7",
  "title": "Continuity equivalences.",
  "body": " Continuity equivalences   Let be a function between the topological spaces . The following statements are equivalent.    is continuous.    For all , we have .    For all closed sets , the preimage is closed in .    Continuity at  For all and all sets containing , there is an open set containing such that .        . Take . We have for some . If is any open neighborhood of , then since is continuous is an open neighborhood of . Since , there exists . It follows that , showing this intersection is nonempt. We concdlue that , as desited.   . Assume (2) holds of . Given closed let . To show is closed, we will show that . Since , this is equivalent to showing ; but this follows from (2) since , where the last inclusion in this chain follows from the fact that is closed and contains .   . Let , and let be an open neighborhood of . The set is closed, whence is closed. It follows that is an open set containing , and we have .   . We assume (4). Let be an open set. For any , there is by (4) (taking open set ) an open set such that . It follows that . Thus for any there is an open such that . It follows that is open, as desired.   "
},
{
  "id": "d_continuity_at_x",
  "level": "2",
  "url": "s_continuous.html#d_continuity_at_x",
  "type": "Definition",
  "number": "1.9.8",
  "title": "",
  "body": "  Let be a map between topological spaces. We say that is continuous at x , for , if for all open neighborhoods , there is an open neighborhood such that .   "
},
{
  "id": "th_building_continuous_functions",
  "level": "2",
  "url": "s_continuous.html#th_building_continuous_functions",
  "type": "Theorem",
  "number": "1.9.9",
  "title": "Building continuous functions.",
  "body": " Building continuous functions      Composition  If and are continuous, then the composition is continuous.    Restriction  If is continuous, and is a subspace, then the restriction is continuous.    Expansion  If is continuous and is a subspace of , then the function obtained by composing with the inclusion is continuous.    Local on source (open pasting)  If is a function between topological spaces and there is a collection of open sets such that and the restrictions are continuous, then is continuous.    Closed pasting  Let be topological spaces, and suppose , where are closed sets. Given continuous functions and that satisfy for all , the function defined as is continuous.       Statements (1)-(3) are elementary, and can be found in Munkres.  Statement (4) follows from equivalent condition (4) from . Indeed, take any and open set . Since for some , and since is continuous, there is an open with , such that . Since is open in and is open in , we conclude is open in , as desired.  To prove statement (5) we show that is closed for any closed set . Since if and only if and or and , we have . Since and are closed we have closed in and closed in . Since and are closed, transitivity of closedness implies and are closed in . We conclude is closed, as desired.   "
},
{
  "id": "s_homeomorphisms",
  "level": "1",
  "url": "s_homeomorphisms.html",
  "type": "Section",
  "number": "1.10",
  "title": "Homeomorphisms",
  "body": " Homeomorphisms  Consider the two spaces and , both equipped with the discrete topology. As sets they are clearly not equal; and yet considered as topological spaces they are essentially the same. Indeed, we call both spaces the discrete topological space on a set of two elements. The notion of a homeomorphism gives us a rigorous way of determining when two spaces are essentially the same thing, topologically speaking .   Homeomorphism   Let and be topological spaces. A function is a homeomorphism if the following conditions are satisfied:    is continuous;     is invertible (equivalently, is bijective);    the inverse function is continuous.   Two spaces are homeomorphic if there is a homeomorphism between them.     Homeomorphism: inverse must be continuous  You may have met analogs of the homeomorphism in other areas of mathematics: , in linear algebra or group theory. In category theory it is what is called an isomorphism . The basic idea is that once you decide what the structure-preserving maps are between objects (continuous functions for topological spaces, linear transformations for vector spaces, homomorphisms for groups), an isomorphism is essentially just an invertible structure-preserving map: a vector space isomorphism is an invertible linear transformation; a group isomorphism is an invertible group homomorphism. The only subtlety is that you want the inverse of this invertible function to also be structure preserving! For linear transformations and group homomorphisms this is automatic. Not so for continuous functions! The inverse of an invertible continuous function need not be continuous, as the example below illustrates.    Homeomorphism: inverse must be continuous   Let and be the spaces obtained by equipping with the standard and discrete topologies, respectively. The identity function is clearly continuous and invertible. In fact, we have . However, is not continuous. Indeed, is open in , but is not open in . Thus is an invertible continuous function that is not a homeomorphism.     Homeomorphic equivalence relation  For topological spaces , define the relation to mean is homeomorphic to . This relation is an equivalence relation. That is, for all topological spaces we have . These three properties follow from the simple facts that (1) the identity map is a homeomorphism, (2) the inverse of a homeomorphism is a homeomomoprhism, (3) the composition of homeomorphisms is a homeomorphism.    All open intervals of are homeomorphic   In the following, all intervals are treated as metric spaces with the Euclidean metric on . Make use of any function whose continuity properties are well known.   Prove that any finite open interval is homeomorphic to .    Prove that and are homeomorphic.    Prove that and are both homeomorphic to .    Explain why we may now conclude that all open intervals of are homeomorphic.          The function defined as is linear (hence continuous) and has continuous inverse .    The function is continuous and has continuous inverse .    The functions , , and , are continuous and have continuous inverses and .    This is now the result of the fact that being homeomorphic is an equivalence relation. In more detail, from (1) we know that all finite open intervals are homeomorphic; this in conjunction with (2) shows that all finite open intervals are homemorphic to . From (3) we conclude that all half-finite intervals are homeomorphic to . Since any open interval is either finite, half-finite, or equal to , we conclude that all open intervals are homeomorphic.        Open and closed maps   Let be a function between topological spaces.    is open if for all open we have open in .     is closed if for all closed we have closed in .        Homeomorphism equivalences   Let be a function between topological spaces. The following statements are equivalent.    is a homeomorphism.     is continuous, invertible, and open.     is continuous, invertible, and closed.       Assume is continuous and invertible throughout. To be a homeomorphism we need to be continuous. Since if and only if , we see that . Thus continuous if and only if is open for all open , if and only if is open for all open , if and only if is open. The same argument with closed replacing open shows is continuous if and only if is closed. The equivalence of (1)-(3) now follows.     Open and closed maps  Don't be mislead by into thinking that being an open continuous map is equivalent to being a closed continuous map; we need the additional assumption of invertibility to guarantee equivalence. As an example, consider any constant function from to itself: this is clearly continuous and closed, but not open.    Topological properties   Let be a property that is either satisfied or not satisfied by any given topological space. We say is a topological property if it is invariant under homeomorphisms: , if and are homeomorphic, then satisfies if and only if satisfies .     Topological properties   It is easy to see that the properties of being discrete, , Hausdorff, or a metric space are topological.     Universal mapping property of product space   Let be a collection of topological spaces, and let equipped with the product topology. Let be the -th projection map: , given , we define .   Projection maps  For each the projection map is continuous, open, and surjective.    Product universal mapping property  The space together with its projection maps satisfies the following universal mapping property: given any topological space and collection of continuous maps, there is a unique continuous map satisfying for all . In other words, there is a unique continuous function making the diagram below commutative for all .   Commutative diagram for product topology    In fact, in this case we must have .    Unique up to homeomorphism  The universal mapping property characterizes up to homeomorphism: , if is a topological space equipped with a collection of continuous maps that together satisfy the , then is homeomorphic to .          Fix any . We showed is continuous in . To see that is surjective, given any , we have , which is nonempty. Lastly, suppose is open. We wish to show that is open in . To this end, given any , we have for some open base set , where is open in and for all but finitely many . But then . Since is open, we have shown that given any , there is an open set such that . It follows that is open, as desired.    First observe that equality for elements in can be expressed in terms of the projection maps as follows: . Using this fact, we see that given a function we have . Thus the function is the unique function from to satisfying for all . To see that this is continuous, we show that is open for any base open set . For such a we have for some open sets , . Note that for all we have from which it follows that . Thus . Since each is continuous, this last set is a finite intersection of open sets. Thus is open, as desired.    Let together with continuous maps be any other space that satisfies . Letting be the space together with its maps , there is a continuous function satisfying for all . Similarly, since also satisfies the product mapping property, taking along with its projection maps, we see there is a continuous map satisfying . We claim and : , is a continuous inverse of , and thus is a homeomorphism between and . To see why this is true, we use the uniqueness claim in the product mapping property (twice). Indeed, the function is continuous and satisfies for all . But the function also satisfies for all . By the uniqueness claim of the product mapping property, we conclude , as desired. The proof that is nearly identical, now applying the product mapping property to maps into .       In order to give a plain English description of it helps to define the purely set-theoretic notion of a product of maps .   Product of functions   Given a collection of functions , their product , denoted is the the function . For each we call the -th component function of .     Universal mapping property of product space   Let be a collection of topological spaces, let equipped with the product topology, and let be the -th projection map for all .   Products of continuous maps are continuous  Given any collection of continuous functions , the product defined as is continuous.    Continuous maps to products are products  Conversely, given any function , we have , where . Furthermore, the function is continuous if and only if is continuous for all .          This is just a rewording of using the notion of a product of functions.    The fact that is purely set theoretic. Check for yourself.  If is continuous, then since is continuous we have continuous.  Conversely, if is continuous, then the product by (1).        Universal mapping property of product space  There is quite a bit to unpack in . The result is useful on a number of levels, some theoretical and some practical.  Its practical utility is nicely articulated by , which tells us that a continuous function to a product space is the same thing as a product of continuous functions. You may have seen this property at work in an analysis or multivariable calculus course. For example, oftentimes in these settings a function is simply defined to be continuous if each component functions is continuous. Thanks to we understand that this is equivalent to being continuous with respect to the standard topology on and the product topology on (which is equal to the standard Euclidean topology on ).  On the theoretical side, the theorem identifies precisely what is so special about the product topology. Namely, it is the unique (up to homeomorphism) space satisfying the . The property establishes with the product topology as the category theoretic product of the spaces . You may have seen analogues of this type of object in other categories ( , category of groups or category of rings).    Polar transformation   Call the map the polar transformation .   Let be the infinite horizontal strip , and let , the plane with the nonpositive real axis deleted.  Prove that is a homeomorphism.    Let be the infinite horizontal strip , and let , the plane with the nonnegative real axis deleted.  Prove that is a homeomorphism.    Conclude that open polar rectangles are open in . In other words, given any satisfying and , the region consisting of all points with polar coordinates satisfying is open. In fact, you can show that such polar rectangles form a basis for .       We leave most of this as an exercise. Note that to show is continuous, by we need only show that the two component functions  are continuous. To see that is continuous, note that we have where is the function and is the multiplication map . Both and are continuous: the two component functions of are and , both of which are continuous; we showed in homework that more generally scalar multiplication is continuous for any .     Continuous bijection onto circle   Let and , and equip each set with the subspace topology inherited from (resp. ) with its Euclidean topology.  Prove: the function defined as is continuous and invertible, but not a homeomorphism.    Recall first that on the product topology, Euclidean metric topology, and box topology are all equal. Since and are continuous, it follows from that the map is continuous. Next, since , where , it follows that is continuous: indeed, for any open set , we have for some open , and , which is open since is continuous.  The usual trigonometric arguments show that is injective and surjective. However, is not open, and hence not a homeomorphism. Indeed, let , which is open in . The image is easily seen to be the upper half of the circle minus the point : in particular, all points have nonnegative -coordinates. On the other hand, we have and with respect to the subspace topology on any open set containing contains elements of whose -coordinate is negative. It follows that is not open.    In light of , it is natural to ask whether given topological spaces there is a space with continuous maps that satisfies a dual mapping property to that of the product. Indeed, there is, and we call it the coproduct of the .   Coproduct space  Let be a collection of topological spaces. Let be the disjoint union  of the ; in more detail, for each , define , and define . For each the function is a bijection between and , and it is easy to see that the collection is a topology on making the map a homeomorphism. All of this rigamarole was done simply to replace the not necessarily disjoint 's with homeomorphic copies that are disjoint. The coproduct topology on is the topology generated by the basis defined as follows: . We call together with the topology the coproduct of the .    Universal mapping property of coproduct space   Let be a collection of topological spaces, and let be their coproduct. For each let be the injective function .   Injection maps  For each the map is continuous, open, closed, and injective.    Coproduct universal mapping property  The space together with the inclusion maps satisfies the following universal mapping property: given any topological space and collection of continuous maps, there is a unique continuous map satisfying for all . In other words, there is a unique continuous map making the following diagram commutative for all .   Commutative diagram for coproduct space      Unique up to homeomorphism  The universal mapping property characterizes up to homeomorphism: , if is a topological space equipped with a collection of continuous maps that together satisfy the , then is homeomorphic to .       Mimic the proof of step by step.    "
},
{
  "id": "d_homeomorphism",
  "level": "2",
  "url": "s_homeomorphisms.html#d_homeomorphism",
  "type": "Definition",
  "number": "1.10.1",
  "title": "Homeomorphism.",
  "body": " Homeomorphism   Let and be topological spaces. A function is a homeomorphism if the following conditions are satisfied:    is continuous;     is invertible (equivalently, is bijective);    the inverse function is continuous.   Two spaces are homeomorphic if there is a homeomorphism between them.   "
},
{
  "id": "rm_homeomorphism",
  "level": "2",
  "url": "s_homeomorphisms.html#rm_homeomorphism",
  "type": "Remark",
  "number": "1.10.2",
  "title": "Homeomorphism: inverse must be continuous.",
  "body": " Homeomorphism: inverse must be continuous  You may have met analogs of the homeomorphism in other areas of mathematics: , in linear algebra or group theory. In category theory it is what is called an isomorphism . The basic idea is that once you decide what the structure-preserving maps are between objects (continuous functions for topological spaces, linear transformations for vector spaces, homomorphisms for groups), an isomorphism is essentially just an invertible structure-preserving map: a vector space isomorphism is an invertible linear transformation; a group isomorphism is an invertible group homomorphism. The only subtlety is that you want the inverse of this invertible function to also be structure preserving! For linear transformations and group homomorphisms this is automatic. Not so for continuous functions! The inverse of an invertible continuous function need not be continuous, as the example below illustrates.  "
},
{
  "id": "eg_homeomorphism_not_",
  "level": "2",
  "url": "s_homeomorphisms.html#eg_homeomorphism_not_",
  "type": "Example",
  "number": "1.10.3",
  "title": "Homeomorphism: inverse must be continuous.",
  "body": " Homeomorphism: inverse must be continuous   Let and be the spaces obtained by equipping with the standard and discrete topologies, respectively. The identity function is clearly continuous and invertible. In fact, we have . However, is not continuous. Indeed, is open in , but is not open in . Thus is an invertible continuous function that is not a homeomorphism.   "
},
{
  "id": "rm_homeomorphic_equivalence_relation",
  "level": "2",
  "url": "s_homeomorphisms.html#rm_homeomorphic_equivalence_relation",
  "type": "Remark",
  "number": "1.10.4",
  "title": "Homeomorphic equivalence relation.",
  "body": " Homeomorphic equivalence relation  For topological spaces , define the relation to mean is homeomorphic to . This relation is an equivalence relation. That is, for all topological spaces we have . These three properties follow from the simple facts that (1) the identity map is a homeomorphism, (2) the inverse of a homeomorphism is a homeomomoprhism, (3) the composition of homeomorphisms is a homeomorphism.  "
},
{
  "id": "eg_R_interval",
  "level": "2",
  "url": "s_homeomorphisms.html#eg_R_interval",
  "type": "Example",
  "number": "1.10.5",
  "title": "All open intervals of <span class=\"process-math\">\\(\\R\\)<\/span> are homeomorphic.",
  "body": " All open intervals of are homeomorphic   In the following, all intervals are treated as metric spaces with the Euclidean metric on . Make use of any function whose continuity properties are well known.   Prove that any finite open interval is homeomorphic to .    Prove that and are homeomorphic.    Prove that and are both homeomorphic to .    Explain why we may now conclude that all open intervals of are homeomorphic.          The function defined as is linear (hence continuous) and has continuous inverse .    The function is continuous and has continuous inverse .    The functions , , and , are continuous and have continuous inverses and .    This is now the result of the fact that being homeomorphic is an equivalence relation. In more detail, from (1) we know that all finite open intervals are homeomorphic; this in conjunction with (2) shows that all finite open intervals are homemorphic to . From (3) we conclude that all half-finite intervals are homeomorphic to . Since any open interval is either finite, half-finite, or equal to , we conclude that all open intervals are homeomorphic.      "
},
{
  "id": "d_open_closed_map",
  "level": "2",
  "url": "s_homeomorphisms.html#d_open_closed_map",
  "type": "Definition",
  "number": "1.10.6",
  "title": "Open and closed maps.",
  "body": " Open and closed maps   Let be a function between topological spaces.    is open if for all open we have open in .     is closed if for all closed we have closed in .      "
},
{
  "id": "th_homeo_open_closed",
  "level": "2",
  "url": "s_homeomorphisms.html#th_homeo_open_closed",
  "type": "Theorem",
  "number": "1.10.7",
  "title": "Homeomorphism equivalences.",
  "body": " Homeomorphism equivalences   Let be a function between topological spaces. The following statements are equivalent.    is a homeomorphism.     is continuous, invertible, and open.     is continuous, invertible, and closed.       Assume is continuous and invertible throughout. To be a homeomorphism we need to be continuous. Since if and only if , we see that . Thus continuous if and only if is open for all open , if and only if is open for all open , if and only if is open. The same argument with closed replacing open shows is continuous if and only if is closed. The equivalence of (1)-(3) now follows.   "
},
{
  "id": "rm_open_closed",
  "level": "2",
  "url": "s_homeomorphisms.html#rm_open_closed",
  "type": "Remark",
  "number": "1.10.8",
  "title": "Open and closed maps.",
  "body": " Open and closed maps  Don't be mislead by into thinking that being an open continuous map is equivalent to being a closed continuous map; we need the additional assumption of invertibility to guarantee equivalence. As an example, consider any constant function from to itself: this is clearly continuous and closed, but not open.  "
},
{
  "id": "d_topological_properties",
  "level": "2",
  "url": "s_homeomorphisms.html#d_topological_properties",
  "type": "Definition",
  "number": "1.10.9",
  "title": "Topological properties.",
  "body": " Topological properties   Let be a property that is either satisfied or not satisfied by any given topological space. We say is a topological property if it is invariant under homeomorphisms: , if and are homeomorphic, then satisfies if and only if satisfies .   "
},
{
  "id": "eg_topological_props",
  "level": "2",
  "url": "s_homeomorphisms.html#eg_topological_props",
  "type": "Example",
  "number": "1.10.10",
  "title": "Topological properties.",
  "body": " Topological properties   It is easy to see that the properties of being discrete, , Hausdorff, or a metric space are topological.   "
},
{
  "id": "th_product_universal_prop",
  "level": "2",
  "url": "s_homeomorphisms.html#th_product_universal_prop",
  "type": "Theorem",
  "number": "1.10.11",
  "title": "Universal mapping property of product space.",
  "body": " Universal mapping property of product space   Let be a collection of topological spaces, and let equipped with the product topology. Let be the -th projection map: , given , we define .   Projection maps  For each the projection map is continuous, open, and surjective.    Product universal mapping property  The space together with its projection maps satisfies the following universal mapping property: given any topological space and collection of continuous maps, there is a unique continuous map satisfying for all . In other words, there is a unique continuous function making the diagram below commutative for all .   Commutative diagram for product topology    In fact, in this case we must have .    Unique up to homeomorphism  The universal mapping property characterizes up to homeomorphism: , if is a topological space equipped with a collection of continuous maps that together satisfy the , then is homeomorphic to .          Fix any . We showed is continuous in . To see that is surjective, given any , we have , which is nonempty. Lastly, suppose is open. We wish to show that is open in . To this end, given any , we have for some open base set , where is open in and for all but finitely many . But then . Since is open, we have shown that given any , there is an open set such that . It follows that is open, as desired.    First observe that equality for elements in can be expressed in terms of the projection maps as follows: . Using this fact, we see that given a function we have . Thus the function is the unique function from to satisfying for all . To see that this is continuous, we show that is open for any base open set . For such a we have for some open sets , . Note that for all we have from which it follows that . Thus . Since each is continuous, this last set is a finite intersection of open sets. Thus is open, as desired.    Let together with continuous maps be any other space that satisfies . Letting be the space together with its maps , there is a continuous function satisfying for all . Similarly, since also satisfies the product mapping property, taking along with its projection maps, we see there is a continuous map satisfying . We claim and : , is a continuous inverse of , and thus is a homeomorphism between and . To see why this is true, we use the uniqueness claim in the product mapping property (twice). Indeed, the function is continuous and satisfies for all . But the function also satisfies for all . By the uniqueness claim of the product mapping property, we conclude , as desired. The proof that is nearly identical, now applying the product mapping property to maps into .      "
},
{
  "id": "d_product_maps",
  "level": "2",
  "url": "s_homeomorphisms.html#d_product_maps",
  "type": "Definition",
  "number": "1.10.12",
  "title": "Product of functions.",
  "body": " Product of functions   Given a collection of functions , their product , denoted is the the function . For each we call the -th component function of .   "
},
{
  "id": "cor_prod_universal",
  "level": "2",
  "url": "s_homeomorphisms.html#cor_prod_universal",
  "type": "Corollary",
  "number": "1.10.13",
  "title": "Universal mapping property of product space.",
  "body": " Universal mapping property of product space   Let be a collection of topological spaces, let equipped with the product topology, and let be the -th projection map for all .   Products of continuous maps are continuous  Given any collection of continuous functions , the product defined as is continuous.    Continuous maps to products are products  Conversely, given any function , we have , where . Furthermore, the function is continuous if and only if is continuous for all .          This is just a rewording of using the notion of a product of functions.    The fact that is purely set theoretic. Check for yourself.  If is continuous, then since is continuous we have continuous.  Conversely, if is continuous, then the product by (1).      "
},
{
  "id": "s_homeomorphisms-17",
  "level": "2",
  "url": "s_homeomorphisms.html#s_homeomorphisms-17",
  "type": "Remark",
  "number": "1.10.14",
  "title": "Universal mapping property of product space.",
  "body": " Universal mapping property of product space  There is quite a bit to unpack in . The result is useful on a number of levels, some theoretical and some practical.  Its practical utility is nicely articulated by , which tells us that a continuous function to a product space is the same thing as a product of continuous functions. You may have seen this property at work in an analysis or multivariable calculus course. For example, oftentimes in these settings a function is simply defined to be continuous if each component functions is continuous. Thanks to we understand that this is equivalent to being continuous with respect to the standard topology on and the product topology on (which is equal to the standard Euclidean topology on ).  On the theoretical side, the theorem identifies precisely what is so special about the product topology. Namely, it is the unique (up to homeomorphism) space satisfying the . The property establishes with the product topology as the category theoretic product of the spaces . You may have seen analogues of this type of object in other categories ( , category of groups or category of rings).  "
},
{
  "id": "eg_polar_coor",
  "level": "2",
  "url": "s_homeomorphisms.html#eg_polar_coor",
  "type": "Example",
  "number": "1.10.15",
  "title": "Polar transformation.",
  "body": " Polar transformation   Call the map the polar transformation .   Let be the infinite horizontal strip , and let , the plane with the nonpositive real axis deleted.  Prove that is a homeomorphism.    Let be the infinite horizontal strip , and let , the plane with the nonnegative real axis deleted.  Prove that is a homeomorphism.    Conclude that open polar rectangles are open in . In other words, given any satisfying and , the region consisting of all points with polar coordinates satisfying is open. In fact, you can show that such polar rectangles form a basis for .       We leave most of this as an exercise. Note that to show is continuous, by we need only show that the two component functions  are continuous. To see that is continuous, note that we have where is the function and is the multiplication map . Both and are continuous: the two component functions of are and , both of which are continuous; we showed in homework that more generally scalar multiplication is continuous for any .   "
},
{
  "id": "s_homeomorphisms-19",
  "level": "2",
  "url": "s_homeomorphisms.html#s_homeomorphisms-19",
  "type": "Example",
  "number": "1.10.16",
  "title": "Continuous bijection onto circle.",
  "body": " Continuous bijection onto circle   Let and , and equip each set with the subspace topology inherited from (resp. ) with its Euclidean topology.  Prove: the function defined as is continuous and invertible, but not a homeomorphism.    Recall first that on the product topology, Euclidean metric topology, and box topology are all equal. Since and are continuous, it follows from that the map is continuous. Next, since , where , it follows that is continuous: indeed, for any open set , we have for some open , and , which is open since is continuous.  The usual trigonometric arguments show that is injective and surjective. However, is not open, and hence not a homeomorphism. Indeed, let , which is open in . The image is easily seen to be the upper half of the circle minus the point : in particular, all points have nonnegative -coordinates. On the other hand, we have and with respect to the subspace topology on any open set containing contains elements of whose -coordinate is negative. It follows that is not open.   "
},
{
  "id": "top_eg_coproduct",
  "level": "2",
  "url": "s_homeomorphisms.html#top_eg_coproduct",
  "type": "Topological specimen",
  "number": "13",
  "title": "Coproduct space.",
  "body": " Coproduct space  Let be a collection of topological spaces. Let be the disjoint union  of the ; in more detail, for each , define , and define . For each the function is a bijection between and , and it is easy to see that the collection is a topology on making the map a homeomorphism. All of this rigamarole was done simply to replace the not necessarily disjoint 's with homeomorphic copies that are disjoint. The coproduct topology on is the topology generated by the basis defined as follows: . We call together with the topology the coproduct of the .  "
},
{
  "id": "th_coproduct_universal_prop",
  "level": "2",
  "url": "s_homeomorphisms.html#th_coproduct_universal_prop",
  "type": "Theorem",
  "number": "1.10.17",
  "title": "Universal mapping property of coproduct space.",
  "body": " Universal mapping property of coproduct space   Let be a collection of topological spaces, and let be their coproduct. For each let be the injective function .   Injection maps  For each the map is continuous, open, closed, and injective.    Coproduct universal mapping property  The space together with the inclusion maps satisfies the following universal mapping property: given any topological space and collection of continuous maps, there is a unique continuous map satisfying for all . In other words, there is a unique continuous map making the following diagram commutative for all .   Commutative diagram for coproduct space      Unique up to homeomorphism  The universal mapping property characterizes up to homeomorphism: , if is a topological space equipped with a collection of continuous maps that together satisfy the , then is homeomorphic to .       Mimic the proof of step by step.   "
},
{
  "id": "s_quotients",
  "level": "1",
  "url": "s_quotients.html",
  "type": "Section",
  "number": "1.11",
  "title": "Quotients",
  "body": " Quotients   Quotient space  Let be a topological space, let be a set (not necessarily a topological space), and let be a surjective function. The collection is a topology on called the quotient topology on with respect to , and we call a quotient of the space . Furthermore the map is continuous with respect to .   Assuming is a topology, it is easy to see that is continuous with respect to it. Indeed, by definition if and only if . (In fact, satsifies the stonger property of being a quotient map . See .)  Let's show that is indeed a topology on .   Since and , we see that and .    Assume is a collection of elements of . By definition, this means that is open in for all . Since we see that is open in , being a union of open sets. It follows by definition that , as desired.    We have .        Quotient by an equivalence relation   Let be a topological space, and suppose an equivalence relation is defined on . Given , let be its equivalence class with respect to , and let be the set of all equivalence classes of : , . The function is easily seen to be surjective, and satisfies if and only if . The set equipped with the quotient topology with respect to is called the quotient of by the equivalence relation  . We call the defining quotient map of .     Quotient by an equivalence relation   Up to homeomorphism , a quotient space as defined in is the same thing as a quotient by an equivalence relation. In more detail, given a topological space and surjective function , we can define a equivalence relation on as , and it easy to show (at least, once we can make use of some of the theoretical tools developed below) that is homeomorphic to with its quotient topology. See .     For each quotient space give an explicit description of the equivalence classes and identify (without proof) what familiar space the quotient might be homeomorphic to.    , obtained by identifying and      , , where if and only if for some      , obtained by identifying and for all      , obtained by identifying and for all and all and for .          Let be the equivalence relation described. For any , its equivalence class is either , if , or , if . We imagine making the identification of and as taking a line segment and connecting the two endpoints. Since that object is loop-like, we guess that the quotient is homeomorphic to the circle .    For any its corresponding equivalence class is . It is easy to see that every is equivalent to an element , so that under this identification is first collapsed to the interval . Since furthermore , we guess that is homeomorphic to the quotient space in (a), and hence also to     For , its equivalence class is either , if , and if . Geometrically this is like taking the square and glueing its two vertical sides together, where we take care to match up the top corners with the top corners and bottom corners with bottom corners. The result of such an operation is a cylinder, our guess for what is homeomorphic to.    For , its equivalence class is either , if , if , if , and if . Geometrically this is like taking the square , first glueing its two vertical sides together to get a cylinder, and then glueing the top and bottom edges of this cylinder together to get a doughnut, or torus. Thus we expect is homeomorphic to a torus in .       In order to prove our claims in we want an easy way to produce a homeomorphism from a quotient space to some other (familiar) topological space. It turns out that the key to doing so lies in identifying a universal mapping property of the map . The map is a special type of map called a quotient map ; and as described in , quotient maps enjoy a very useful mapping property that we can exploit to produce homeomorphisms.   Quotient map   Let and be topological spaces. A function is a quotient map if it satisfies the following properties:    is surjective;     is open if and only if is open.   It follows immediately from the definition that a quotient map is continuous.     Quotient maps and quotient spaces   Let be a surjective map between two topological spaces, and let be the topology on . The following are equivalent.    is a quotient map.     is the quotient topology on with respect to .       Let be the topology on . We have .     Saturated sets   Let be a function. A set is saturated with respect to if any one of the following equivalent properties holds:    .    For all , we have      for some .        Quotient map properties      Let be a continuous surjective function. The following statements are equivalent.    is a quotient map.     is open for all open saturated sets .     is closed for all closed saturated subsets .     is closed in if and only if is closed in .       Let be continuous and surjective. If is an open map or a closed map, then it is a quotient map. In particular, homeomorphisms are quotient maps.    The composition of two quotient maps is a quotient map.       Statement (3) is straightforward. Statement (2) follows easily from (1) using equivalent statements (b) and (c), respectively.   Proof of (1)  We prove the cycle of implications .   . Assume is a quotient map. Let be open and saturated. Since is saturated, we have for some set . Since is a quotient map and is open, the set is open. Lastly, since is surjective we have . This proves that is open for any open .   . Assume is closed and saturated. Since is saturated, we have for some . Let , an open set. Furthermore, since , we see that is saturated. Using (2), we may conclude that is open. Again, using the fact that is surjective, we have . It follows that is open, and hence is closed. Since , we conclude that is closed, as desired.   . Since is assumed to be continuous, we need only show that if is closed, then is closed. If is closed, then it is a closed saturated set. By (c), we conclude that is closed. But since is surjective, we have . Thus is closed, as desired.   . Since is assumed to be continuous, we need only show that if is open, then is open. If is open, then is closed. Using (d), we conclude that is closed and hence is open, as desired.     The following theorem is often useful when investigating the restriction of a quotient map to a subspace. You find its proof in Munkres.    Let be a quotient map, let be saturated with respect to , and consider the restriction , where and are endowed with subspace topologies.   If is open or closed, then is a quotient map.    If is an open map or a closed map, then is a quotient map.        Fibers of maps   For any function between sets and element , we call the fiber of lying over . We say a function  agrees on fibers of if for all .     Universal mapping property of quotient maps   Let be a quotient map. Assume is a continuous function that agrees on fibers of : , we have for all .   There is a unique continuous function satisfying .   Indeed, the function must be defined as , where is any element of satisfying .    The function is injective if and only if satisfies for all .    The function is a quotient map if and only if is a quotient map.    The function is a homeomorphism if and only if is a quotient map and satisfies for all .          Assume we have as described. Define via the following recipe: given , pick any such that (possible since is surjective); now define . Two comments:   To make sure as described is well-defined, we must make sure that the definition of does not depend on the choice of involve: , if you happen to pick another such that , we must make sure that . This is precisely what is guaranteed by the condition that .    Since we want , this definition of is forced upon us: given , we must have . Thus is unique.   Now we must show is continuous. Given any open , to show that the set is open, we will make use of the fact that is a quotient map: namely, it suffices to show that is open in . But we have since . Since is continuous, we conclude that is open, as desired.    Assume is injective. Since , given any with , we have . Since is injective, we conclude , as desired.  Assume for all . We will show is injective. To this end suppose for some and . Since it follows that , and hence, using our assumption, , as desired.    If is a quotient map, then so is the composition by statement (3) of . Assume is a quotient map. We know from (1) of the theorem that is continuous. Furthermore, since is surjective and , it follows that must be surjective. Now suppose is open in . Since is continuous, the set is open in . We have . This shows is an open saturated set with respect to . Since is a quotient map, it follows that is open ( ). As we saw above, , which is a saturated open set of . Since is a quotient map, the set is open. But again, because is surjective, we have .        Quotient by an equivalence relation  Let be a topological space, let be a surjective function, and let be the equivalence relation defined on as if and only if .  Prove: is homeomorphic to with its quotient topology.   Let be the defining quotient map of : by definition, we have , and thus . Since furthermore is a quotient map, by the map defined as is a homeomorphism.     Quotient of product space    be the topological product of the spaces . Fix and define the equivalence relation on as follows: given and , we have . In other words, two tuples are equivalent if their -th coordinates are equal.  Let with the quotient topology. Prove: is homeomorphic to .    Let be the quotient map for . By definition, we have if and only if if and only if the -th coordinates of and are equal.  Now, let be the projection map onto the -th coordinate of . Since is open and surjective ( ), it is a quotient map. Furthermore, given and , we have . We conclude from that the map is a homeomorphism between and .     Line with doubled origin  Let be the disjoint union of two copies of , with the coproduct topology. Concretely, labeling the two copies of as and , we have , and the coproduct topology has as a basis the collection . Let be the quotient obtained from by identifying and for all , and let be its defining quotient map.   Let : i.e., is the punctured real line together with two additional distinct points. The following collection is easily shown to be a topology on : . Prove: is homeomorphic to .    Prove: is Hausdorff, but is not Hausdorff.        Left as an exercise.    In fact, in much more generality, given a collection of spaces , the coproduct is Hausdorff if and only if is Hausdorff for all . Proof left as an exercise.  Since is homeomorphic to , it suffices to show that is not Hausdorff. To see this, notice that any open containing is of the form for some open set containing , and similarly, any open set containing is of the form for some open set containing . Since contains a set of the form for some , we see that . In particular, we have . Thus is not Hausdorff.       The circle as a quotient space   Let denote the quotient obtained from after identifying and , and let denote the quotient of by the equivalence relation if and only if for some . Prove that both and are homeomorphic to as follows.    Prove that is homeomorphic to .    Prove that is homeomorphic to .    Note: once we have some notions about compactness under our belt it will be easy to show directly that . Part (2) is a workaround for the time being.       Consider the map defined by composition   where is the quotient map from to . It is easy to see that is surjective and satisfies if and only if or . From we conclude that gives rise to a bijective continuous function . Concretely, takes an equivalence class and maps it to the equivalence class in . Furthermore, to show is a homeomorphism it is enough to prove that is a quotient map. In fact, we can show that is a closed map. Take a closed set . Since is a quotient map, to show its image is closed in we need only show that is closed in . We have , where for any we define , the translation of by . Since the map defines a homeomorphism from to , we see that each is closed. Although in general unions of closed sets are not necessarily closed, using the fact that , it is not difficult to show in this case that is closed. I'll leave the details to you.    Let be the quotient map. Consider the diagram   where . It is easy to see that is continuous, surjective, and satisfies for some . It follows from that the map is bijective and continuous. Furthermore, by the same result, we can show is a homeomorphism as long as we can show is a quotient map. In fact, the map is open, and hence a quotient map. Given any open set and element , we can find an such that , in which case . But then is the intersection of with an open polar rectangle consisting of points with polar coordinates satisfying . We showed such open polar rectangles are indeed open in in . It follows that is an open subset of . Thus for every we can find an open set satisfying . It follows that is open, as desired.       "
},
{
  "id": "top_eg_quotient_space",
  "level": "2",
  "url": "s_quotients.html#top_eg_quotient_space",
  "type": "Topological specimen",
  "number": "14",
  "title": "Quotient space.",
  "body": " Quotient space  Let be a topological space, let be a set (not necessarily a topological space), and let be a surjective function. The collection is a topology on called the quotient topology on with respect to , and we call a quotient of the space . Furthermore the map is continuous with respect to .   Assuming is a topology, it is easy to see that is continuous with respect to it. Indeed, by definition if and only if . (In fact, satsifies the stonger property of being a quotient map . See .)  Let's show that is indeed a topology on .   Since and , we see that and .    Assume is a collection of elements of . By definition, this means that is open in for all . Since we see that is open in , being a union of open sets. It follows by definition that , as desired.    We have .      "
},
{
  "id": "d_quotient_equivalence",
  "level": "2",
  "url": "s_quotients.html#d_quotient_equivalence",
  "type": "Definition",
  "number": "1.11.1",
  "title": "Quotient by an equivalence relation.",
  "body": " Quotient by an equivalence relation   Let be a topological space, and suppose an equivalence relation is defined on . Given , let be its equivalence class with respect to , and let be the set of all equivalence classes of : , . The function is easily seen to be surjective, and satisfies if and only if . The set equipped with the quotient topology with respect to is called the quotient of by the equivalence relation  . We call the defining quotient map of .   "
},
{
  "id": "s_quotients-4",
  "level": "2",
  "url": "s_quotients.html#s_quotients-4",
  "type": "Remark",
  "number": "1.11.2",
  "title": "Quotient by an equivalence relation.",
  "body": " Quotient by an equivalence relation   Up to homeomorphism , a quotient space as defined in is the same thing as a quotient by an equivalence relation. In more detail, given a topological space and surjective function , we can define a equivalence relation on as , and it easy to show (at least, once we can make use of some of the theoretical tools developed below) that is homeomorphic to with its quotient topology. See .  "
},
{
  "id": "eg_quotient_no_proof",
  "level": "2",
  "url": "s_quotients.html#eg_quotient_no_proof",
  "type": "Example",
  "number": "1.11.3",
  "title": "",
  "body": "  For each quotient space give an explicit description of the equivalence classes and identify (without proof) what familiar space the quotient might be homeomorphic to.    , obtained by identifying and      , , where if and only if for some      , obtained by identifying and for all      , obtained by identifying and for all and all and for .          Let be the equivalence relation described. For any , its equivalence class is either , if , or , if . We imagine making the identification of and as taking a line segment and connecting the two endpoints. Since that object is loop-like, we guess that the quotient is homeomorphic to the circle .    For any its corresponding equivalence class is . It is easy to see that every is equivalent to an element , so that under this identification is first collapsed to the interval . Since furthermore , we guess that is homeomorphic to the quotient space in (a), and hence also to     For , its equivalence class is either , if , and if . Geometrically this is like taking the square and glueing its two vertical sides together, where we take care to match up the top corners with the top corners and bottom corners with bottom corners. The result of such an operation is a cylinder, our guess for what is homeomorphic to.    For , its equivalence class is either , if , if , if , and if . Geometrically this is like taking the square , first glueing its two vertical sides together to get a cylinder, and then glueing the top and bottom edges of this cylinder together to get a doughnut, or torus. Thus we expect is homeomorphic to a torus in .      "
},
{
  "id": "d_quotient_map",
  "level": "2",
  "url": "s_quotients.html#d_quotient_map",
  "type": "Definition",
  "number": "1.11.4",
  "title": "Quotient map.",
  "body": " Quotient map   Let and be topological spaces. A function is a quotient map if it satisfies the following properties:    is surjective;     is open if and only if is open.   It follows immediately from the definition that a quotient map is continuous.   "
},
{
  "id": "th_quot_map_space",
  "level": "2",
  "url": "s_quotients.html#th_quot_map_space",
  "type": "Theorem",
  "number": "1.11.5",
  "title": "Quotient maps and quotient spaces.",
  "body": " Quotient maps and quotient spaces   Let be a surjective map between two topological spaces, and let be the topology on . The following are equivalent.    is a quotient map.     is the quotient topology on with respect to .       Let be the topology on . We have .   "
},
{
  "id": "d_saturated",
  "level": "2",
  "url": "s_quotients.html#d_saturated",
  "type": "Definition",
  "number": "1.11.6",
  "title": "Saturated sets.",
  "body": " Saturated sets   Let be a function. A set is saturated with respect to if any one of the following equivalent properties holds:    .    For all , we have      for some .      "
},
{
  "id": "th_quotientmap_props",
  "level": "2",
  "url": "s_quotients.html#th_quotientmap_props",
  "type": "Theorem",
  "number": "1.11.7",
  "title": "Quotient map properties.",
  "body": " Quotient map properties      Let be a continuous surjective function. The following statements are equivalent.    is a quotient map.     is open for all open saturated sets .     is closed for all closed saturated subsets .     is closed in if and only if is closed in .       Let be continuous and surjective. If is an open map or a closed map, then it is a quotient map. In particular, homeomorphisms are quotient maps.    The composition of two quotient maps is a quotient map.       Statement (3) is straightforward. Statement (2) follows easily from (1) using equivalent statements (b) and (c), respectively.   Proof of (1)  We prove the cycle of implications .   . Assume is a quotient map. Let be open and saturated. Since is saturated, we have for some set . Since is a quotient map and is open, the set is open. Lastly, since is surjective we have . This proves that is open for any open .   . Assume is closed and saturated. Since is saturated, we have for some . Let , an open set. Furthermore, since , we see that is saturated. Using (2), we may conclude that is open. Again, using the fact that is surjective, we have . It follows that is open, and hence is closed. Since , we conclude that is closed, as desired.   . Since is assumed to be continuous, we need only show that if is closed, then is closed. If is closed, then it is a closed saturated set. By (c), we conclude that is closed. But since is surjective, we have . Thus is closed, as desired.   . Since is assumed to be continuous, we need only show that if is open, then is open. If is open, then is closed. Using (d), we conclude that is closed and hence is open, as desired.    "
},
{
  "id": "th_quot_subspace",
  "level": "2",
  "url": "s_quotients.html#th_quot_subspace",
  "type": "Theorem",
  "number": "1.11.8",
  "title": "",
  "body": "  Let be a quotient map, let be saturated with respect to , and consider the restriction , where and are endowed with subspace topologies.   If is open or closed, then is a quotient map.    If is an open map or a closed map, then is a quotient map.      "
},
{
  "id": "d_fibers_agree",
  "level": "2",
  "url": "s_quotients.html#d_fibers_agree",
  "type": "Definition",
  "number": "1.11.9",
  "title": "Fibers of maps.",
  "body": " Fibers of maps   For any function between sets and element , we call the fiber of lying over . We say a function  agrees on fibers of if for all .   "
},
{
  "id": "th_quot_univ_map",
  "level": "2",
  "url": "s_quotients.html#th_quot_univ_map",
  "type": "Theorem",
  "number": "1.11.10",
  "title": "Universal mapping property of quotient maps.",
  "body": " Universal mapping property of quotient maps   Let be a quotient map. Assume is a continuous function that agrees on fibers of : , we have for all .   There is a unique continuous function satisfying .   Indeed, the function must be defined as , where is any element of satisfying .    The function is injective if and only if satisfies for all .    The function is a quotient map if and only if is a quotient map.    The function is a homeomorphism if and only if is a quotient map and satisfies for all .          Assume we have as described. Define via the following recipe: given , pick any such that (possible since is surjective); now define . Two comments:   To make sure as described is well-defined, we must make sure that the definition of does not depend on the choice of involve: , if you happen to pick another such that , we must make sure that . This is precisely what is guaranteed by the condition that .    Since we want , this definition of is forced upon us: given , we must have . Thus is unique.   Now we must show is continuous. Given any open , to show that the set is open, we will make use of the fact that is a quotient map: namely, it suffices to show that is open in . But we have since . Since is continuous, we conclude that is open, as desired.    Assume is injective. Since , given any with , we have . Since is injective, we conclude , as desired.  Assume for all . We will show is injective. To this end suppose for some and . Since it follows that , and hence, using our assumption, , as desired.    If is a quotient map, then so is the composition by statement (3) of . Assume is a quotient map. We know from (1) of the theorem that is continuous. Furthermore, since is surjective and , it follows that must be surjective. Now suppose is open in . Since is continuous, the set is open in . We have . This shows is an open saturated set with respect to . Since is a quotient map, it follows that is open ( ). As we saw above, , which is a saturated open set of . Since is a quotient map, the set is open. But again, because is surjective, we have .      "
},
{
  "id": "eg_quot_equiv",
  "level": "2",
  "url": "s_quotients.html#eg_quot_equiv",
  "type": "Example",
  "number": "1.11.11",
  "title": "Quotient by an equivalence relation.",
  "body": " Quotient by an equivalence relation  Let be a topological space, let be a surjective function, and let be the equivalence relation defined on as if and only if .  Prove: is homeomorphic to with its quotient topology.   Let be the defining quotient map of : by definition, we have , and thus . Since furthermore is a quotient map, by the map defined as is a homeomorphism.   "
},
{
  "id": "eg_quot_prod",
  "level": "2",
  "url": "s_quotients.html#eg_quot_prod",
  "type": "Example",
  "number": "1.11.12",
  "title": "Quotient of product space.",
  "body": " Quotient of product space    be the topological product of the spaces . Fix and define the equivalence relation on as follows: given and , we have . In other words, two tuples are equivalent if their -th coordinates are equal.  Let with the quotient topology. Prove: is homeomorphic to .    Let be the quotient map for . By definition, we have if and only if if and only if the -th coordinates of and are equal.  Now, let be the projection map onto the -th coordinate of . Since is open and surjective ( ), it is a quotient map. Furthermore, given and , we have . We conclude from that the map is a homeomorphism between and .   "
},
{
  "id": "eg_line_double_origin",
  "level": "2",
  "url": "s_quotients.html#eg_line_double_origin",
  "type": "Example",
  "number": "1.11.13",
  "title": "Line with doubled origin.",
  "body": " Line with doubled origin  Let be the disjoint union of two copies of , with the coproduct topology. Concretely, labeling the two copies of as and , we have , and the coproduct topology has as a basis the collection . Let be the quotient obtained from by identifying and for all , and let be its defining quotient map.   Let : i.e., is the punctured real line together with two additional distinct points. The following collection is easily shown to be a topology on : . Prove: is homeomorphic to .    Prove: is Hausdorff, but is not Hausdorff.        Left as an exercise.    In fact, in much more generality, given a collection of spaces , the coproduct is Hausdorff if and only if is Hausdorff for all . Proof left as an exercise.  Since is homeomorphic to , it suffices to show that is not Hausdorff. To see this, notice that any open containing is of the form for some open set containing , and similarly, any open set containing is of the form for some open set containing . Since contains a set of the form for some , we see that . In particular, we have . Thus is not Hausdorff.     "
},
{
  "id": "eg_RmodZ",
  "level": "2",
  "url": "s_quotients.html#eg_RmodZ",
  "type": "Example",
  "number": "1.11.14",
  "title": "The circle as a quotient space.",
  "body": " The circle as a quotient space   Let denote the quotient obtained from after identifying and , and let denote the quotient of by the equivalence relation if and only if for some . Prove that both and are homeomorphic to as follows.    Prove that is homeomorphic to .    Prove that is homeomorphic to .    Note: once we have some notions about compactness under our belt it will be easy to show directly that . Part (2) is a workaround for the time being.       Consider the map defined by composition   where is the quotient map from to . It is easy to see that is surjective and satisfies if and only if or . From we conclude that gives rise to a bijective continuous function . Concretely, takes an equivalence class and maps it to the equivalence class in . Furthermore, to show is a homeomorphism it is enough to prove that is a quotient map. In fact, we can show that is a closed map. Take a closed set . Since is a quotient map, to show its image is closed in we need only show that is closed in . We have , where for any we define , the translation of by . Since the map defines a homeomorphism from to , we see that each is closed. Although in general unions of closed sets are not necessarily closed, using the fact that , it is not difficult to show in this case that is closed. I'll leave the details to you.    Let be the quotient map. Consider the diagram   where . It is easy to see that is continuous, surjective, and satisfies for some . It follows from that the map is bijective and continuous. Furthermore, by the same result, we can show is a homeomorphism as long as we can show is a quotient map. In fact, the map is open, and hence a quotient map. Given any open set and element , we can find an such that , in which case . But then is the intersection of with an open polar rectangle consisting of points with polar coordinates satisfying . We showed such open polar rectangles are indeed open in in . It follows that is an open subset of . Thus for every we can find an open set satisfying . It follows that is open, as desired.      "
},
{
  "id": "s_connected1",
  "level": "1",
  "url": "s_connected1.html",
  "type": "Section",
  "number": "1.12",
  "title": "Connected spaces",
  "body": " Connected spaces    A separation of a topological space is a pair of disjoint open sets satisfying . Call a separation  trivial if , and nontrivial otherwise. A space is connected if it is nonempty and all separations of are trivial; it is disconnected otherwise.  A subset is connected (resp., disconnected ) if it is connected (resp., disconnected) with respect to the subspace topology.     Conventions  Our defined terms in differ from Munkres in two regards.   Munkres takes as a separation what we call a nontrivial separation. We choose the weaker notion so that we have a convenient term for a disjoint cover of a space by two open sets.    Munkres does not insist that a space be nonempty to be connected. There does not seem to be much consensus on whether to include this as a necessary condition. However, when discussing connected components later on, we would like to be able to say simply that a space is connected if and only if it has exactly one connected component. This is reason enough for us to go with the nonempty condition.       Examples     If , then is not connected with respect to the discrete topology.    If is infinite, then is connected with respect to the cofinite topology.    Let be the graph of the equation and let be the graph of the equation . The subset is disconnected.     is not connected. In fact if is any set that is not an interval, then is not connected. (Define an interval of to be a set satisfying the following property: if and , then . This definition includes singletons and the empty set as sort of degenerate intervals.)           Connected subsets of   Consider with the standard topology. The connected subsets of are precisely the nonempty intervals of (including infinite intervals like or ): i.e., is connected if and only if is a nonempty interval.  More generally, if is a space equipped with an order topology, then a subset is connected if and only if    satisfies the least upper bound principle (i.e., every bounded subset of has a supremum in ), and    if and , then there exists satisfying .       See Munkres.     Connectedness equivalences   The following statements are equivalent for a topological space .     is connected.    There is no pair of disjoint nonempty closed sets satisfying .    If is open and closed, then .    There is no pair of nonempty disjoint sets , neither of which contains limit points of the other, satisfying .       . It is clear that a separation by open sets is the same thing as a separation as described in (2), since and are both open and closed. Similarly, we see that there is a separation if and only if and only if there is a nonempty open set whose complement is open and nonempty, if and only if there is a nontrival that is open and closed.   . This equivalence follows from the observation that we have with as described in (4) if and only if and , if and only if and are disjoint and closed.     Connectedness and subspaces   Let be a topological space.   If is a connected subspace of , and if is a separation of , then or .    If is a collection of connected subspaces of and , then is connected.    If is connected, then any satisfying is connected.           Given a separation , we have the separation , where . Since is connected, we must have or . It follows that or .    Let be a separation. Take any . We may assume without loss of generality that . Now since is connected for all we must have or by (1). Since and , it follows that for all . Thus . We conclude that , showing that has no nontrivial separations. Thus is connected.    Assume , where is connected. Let , where and are disjoint closed sets in . By (1) we have or . Assume without loss of generality that . Since is closed, the closure of in is contained in . But as we have seen in an earlier homework, the closure of in is . Thus , or equivalently, . We conclude that is connected.       Connectedness and continuity   If is continuous and is connected, then is connected.    We identify with the map obtained by restricting the codomain, which is continuous and surjective. If are disjoint open sets satisfying , then we have . Since the sets are open and disjoint, we have or . Since is surjective, we have for . It follows that or . We conclude is connected.     Graphs of continuous functions   Let be continuous and let , the graph of . If is connected, then is connected.    Define as . Since the two component functions and are continuous, so is . From , we conclude that is continuous.      Let be a collection of topological spaces, where is nonempty, and let be equipped with the product topology.   If is connected, then is connected for all .    If is finite or countable then is connected if and only if is connected for all .    Assuming the axiom of choice, is connected if and only if is connected for all .       We prove only (1) and (2). Proofs of (3) can be found in the literature: transfinite induction is often used.   Since each the projection map is continuous for all , and since , we see using that if is connected, then is connected.     Finite products  Using induction it suffices to show that if are connected, then is connected. First, choose any and note that the subspace , being homeomorphic to , is connected. Similarly, for any , the subspace is connected. It follows from (2) of that the set is connected for any . Lastly, since for any , the union is connected. But this union is itself.    Countable product  Let where is connected for all . Fix any element . For each the set , being homeomorphic to a finite product of connected spaces, is connected. Since for all , we conclude that is connected.  Next, I claim that . Indeed, given any and any open base element containing , we have . Since connectedness is preserved under closure, we conclude that is connected.        "
},
{
  "id": "d_connected_space",
  "level": "2",
  "url": "s_connected1.html#d_connected_space",
  "type": "Definition",
  "number": "1.12.1",
  "title": "",
  "body": "  A separation of a topological space is a pair of disjoint open sets satisfying . Call a separation  trivial if , and nontrivial otherwise. A space is connected if it is nonempty and all separations of are trivial; it is disconnected otherwise.  A subset is connected (resp., disconnected ) if it is connected (resp., disconnected) with respect to the subspace topology.   "
},
{
  "id": "s_connected1-3",
  "level": "2",
  "url": "s_connected1.html#s_connected1-3",
  "type": "Remark",
  "number": "1.12.2",
  "title": "Conventions.",
  "body": " Conventions  Our defined terms in differ from Munkres in two regards.   Munkres takes as a separation what we call a nontrivial separation. We choose the weaker notion so that we have a convenient term for a disjoint cover of a space by two open sets.    Munkres does not insist that a space be nonempty to be connected. There does not seem to be much consensus on whether to include this as a necessary condition. However, when discussing connected components later on, we would like to be able to say simply that a space is connected if and only if it has exactly one connected component. This is reason enough for us to go with the nonempty condition.     "
},
{
  "id": "s_connected1-4",
  "level": "2",
  "url": "s_connected1.html#s_connected1-4",
  "type": "Example",
  "number": "1.12.3",
  "title": "Examples.",
  "body": " Examples     If , then is not connected with respect to the discrete topology.    If is infinite, then is connected with respect to the cofinite topology.    Let be the graph of the equation and let be the graph of the equation . The subset is disconnected.     is not connected. In fact if is any set that is not an interval, then is not connected. (Define an interval of to be a set satisfying the following property: if and , then . This definition includes singletons and the empty set as sort of degenerate intervals.)         "
},
{
  "id": "th_connected_intervals",
  "level": "2",
  "url": "s_connected1.html#th_connected_intervals",
  "type": "Theorem",
  "number": "1.12.4",
  "title": "Connected subsets of <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Connected subsets of   Consider with the standard topology. The connected subsets of are precisely the nonempty intervals of (including infinite intervals like or ): i.e., is connected if and only if is a nonempty interval.  More generally, if is a space equipped with an order topology, then a subset is connected if and only if    satisfies the least upper bound principle (i.e., every bounded subset of has a supremum in ), and    if and , then there exists satisfying .       See Munkres.   "
},
{
  "id": "th_connected_equiv",
  "level": "2",
  "url": "s_connected1.html#th_connected_equiv",
  "type": "Theorem",
  "number": "1.12.5",
  "title": "Connectedness equivalences.",
  "body": " Connectedness equivalences   The following statements are equivalent for a topological space .     is connected.    There is no pair of disjoint nonempty closed sets satisfying .    If is open and closed, then .    There is no pair of nonempty disjoint sets , neither of which contains limit points of the other, satisfying .       . It is clear that a separation by open sets is the same thing as a separation as described in (2), since and are both open and closed. Similarly, we see that there is a separation if and only if and only if there is a nonempty open set whose complement is open and nonempty, if and only if there is a nontrival that is open and closed.   . This equivalence follows from the observation that we have with as described in (4) if and only if and , if and only if and are disjoint and closed.   "
},
{
  "id": "th_connected_subspace",
  "level": "2",
  "url": "s_connected1.html#th_connected_subspace",
  "type": "Theorem",
  "number": "1.12.6",
  "title": "Connectedness and subspaces.",
  "body": " Connectedness and subspaces   Let be a topological space.   If is a connected subspace of , and if is a separation of , then or .    If is a collection of connected subspaces of and , then is connected.    If is connected, then any satisfying is connected.      "
},
{
  "id": "s_connected1-8",
  "level": "2",
  "url": "s_connected1.html#s_connected1-8",
  "type": "Proof",
  "number": "1.12.1",
  "title": "",
  "body": "    Given a separation , we have the separation , where . Since is connected, we must have or . It follows that or .    Let be a separation. Take any . We may assume without loss of generality that . Now since is connected for all we must have or by (1). Since and , it follows that for all . Thus . We conclude that , showing that has no nontrivial separations. Thus is connected.    Assume , where is connected. Let , where and are disjoint closed sets in . By (1) we have or . Assume without loss of generality that . Since is closed, the closure of in is contained in . But as we have seen in an earlier homework, the closure of in is . Thus , or equivalently, . We conclude that is connected.     "
},
{
  "id": "th_connected_continuous",
  "level": "2",
  "url": "s_connected1.html#th_connected_continuous",
  "type": "Theorem",
  "number": "1.12.7",
  "title": "Connectedness and continuity.",
  "body": " Connectedness and continuity   If is continuous and is connected, then is connected.    We identify with the map obtained by restricting the codomain, which is continuous and surjective. If are disjoint open sets satisfying , then we have . Since the sets are open and disjoint, we have or . Since is surjective, we have for . It follows that or . We conclude is connected.   "
},
{
  "id": "cor_graph_connected",
  "level": "2",
  "url": "s_connected1.html#cor_graph_connected",
  "type": "Corollary",
  "number": "1.12.8",
  "title": "Graphs of continuous functions.",
  "body": " Graphs of continuous functions   Let be continuous and let , the graph of . If is connected, then is connected.    Define as . Since the two component functions and are continuous, so is . From , we conclude that is continuous.   "
},
{
  "id": "th_connected_products",
  "level": "2",
  "url": "s_connected1.html#th_connected_products",
  "type": "Theorem",
  "number": "1.12.9",
  "title": "",
  "body": "  Let be a collection of topological spaces, where is nonempty, and let be equipped with the product topology.   If is connected, then is connected for all .    If is finite or countable then is connected if and only if is connected for all .    Assuming the axiom of choice, is connected if and only if is connected for all .       We prove only (1) and (2). Proofs of (3) can be found in the literature: transfinite induction is often used.   Since each the projection map is continuous for all , and since , we see using that if is connected, then is connected.     Finite products  Using induction it suffices to show that if are connected, then is connected. First, choose any and note that the subspace , being homeomorphic to , is connected. Similarly, for any , the subspace is connected. It follows from (2) of that the set is connected for any . Lastly, since for any , the union is connected. But this union is itself.    Countable product  Let where is connected for all . Fix any element . For each the set , being homeomorphic to a finite product of connected spaces, is connected. Since for all , we conclude that is connected.  Next, I claim that . Indeed, given any and any open base element containing , we have . Since connectedness is preserved under closure, we conclude that is connected.       "
},
{
  "id": "s_connected_path",
  "level": "1",
  "url": "s_connected_path.html",
  "type": "Section",
  "number": "1.13",
  "title": "Path-connected spaces",
  "body": " Path-connected spaces   Path   A path in (or to) a topological space is a continuous function , where is a closed interval. We call the start point (or initial point ) and the end point (or terminal point ) of the path .     Path-connected space   Let be a topological space. Two elements are connected by a path in if there is a path such that and . The space is path connected if any two elements of are connected by a path.     Path-connected implies connected   If is path connected, then is connected. Using logical shorthand:     Assume by contradiction that is a separation of . We can find points . Let be a path connecting . By , the image is connected. By we must have or . This contradicts the fact that and . Thus there can be no separation of , and we conclude that it is connected.     Path-connectedness and continuity   If is continuous and is path connected, then is path connected.    Given and , let be a path connecting and . The composition is then a path connecting and .     Balls in   Let be Euclidean -space. For all and any , the open ball is connected, as is the closed ball defined as     It is easy to see that the straight line path defined as is a continuous function connecting any two points in . For our current purposes, we wish to show that if , then so is , for any . To this end, note that . This proves that the open ball is path connected, and hence connected. Next, it is easy to see that the closed ball is in fact the closure of the open ball. Since connectedness is preserved under closure, we conclude that the closed ball is connected.     Punctured Euclidean space :   Let be Euclidean -space, where . The subspace is connected.    Take any . If the two vectors are not scalar multiples of one another, then the straight line path connecting them is guaranteed to lie in , using a linear independence argument. If , then since , we can find a vector that is not a scalar multiple of either vector. We can then construct a polygonal path lieing in that first connects to via a straight line path, and then connects to via a straight line path.     for   Prove: if , then there is no homeomorphism from to .    Assume by contradiction that is a homeomorphism for some . It follows that the restriction is a homeomorphism. This a contradiction since is not connected ( is open and closed in ), but is connected.     The -sphere   Fix . The -sphere is defined as . Prove: is connected for all .    Fix and consider the map defined as , where as usual . This map is continuous (homework exercise!) and surjective. Since is connected, we see that is the image of a connected set under a continuous function, hence connected.     Topologist's sine curve  Define as for all . Let , the graph of .    The set is connected.    The set is not path connected. More specifically, we can show that and are not connected by a path in .         Since is connected and is continuous, its graph is connected by . Since closure preserves connectedness, we conclude that is connected.    Suppose is a path connecting and . We can write where the component functions are both continuous. The set is closed, since is continuous. Set (guaranteed to exist since is closed), and let . Note that since , and that for all we have and hence . Take . We will show that there is no -ball around such that , contradicting the continuity of .  For any any , is an interval since is continuous and is connected. This means that contains an interval of the form for some . Due to the highly oscillatory nature of , we can find points satisfying . Since these points are in the image of , we have and for some . But then . Since , we cannot have , and thus , as claimed.        Connected components   Let be a topological space. The connected component of an element is the set defined as the union of all connected subsets of containing . Similarly, the path-connected component of $x$ is the set $C_p(x)$ defined as the union of all path connected subspaces of containing . A subspace is maximally connected (resp., maximally path connected ) if is connected (resp. path connected), and if for all connected (resp. path connected) sets , if , then .     Connected components   Let be a topological space.   For all the component is the unique maximally connected set containing , and is the unique maximally path connected set containing .    The collection of all connected components is a partition of by closed, maximally connected sets. In other words:    .     for all .     is maximally connected for all .     is closed for all .       Similarly, the collection of all path-connected components of is a partition of by maximally path-connected sets.    If is connected (resp. path connected) and is a connected component (resp. path connected component) of , then either or .    For all we have , and in fact is a partition of by path-connected components.          Let us prove that is maximally connected. It is connected as it is the union of connected sets containing . If and is connected, then since , we have by definition . Thus is maximally connected. Lastly, if is a maximally connected set containing , then by definition we have ; and since is maximally connected we conclude that . This proves is the unique maximally connected set containing .  The proof that is the unique maximally path-connected set containing proceeds in exactly the same manner. We use the fact (not made official, but easy to show) that a union of path-path connected sets with a common intersection point is path connected.    It is clear that , since for all . Furthermore, we know is maximally connected by . Since is connected and , we must have . Thus is closed.  Lastly, to see that the components are disjoint, we will show that . If , then is a connected set containing and . Since is maximally connected, we must have , and thus . The same argument shows . Thus .    The proof here is exactly as with connected components. Again, we use the fact that the union of path-connected sets sharing a common point is path connected.    Suppose is connected. If , then is connected by . Since is maximally connected, we have . Thus . A similar argument applies to path-connected components.    Since is connected and is the union of all connected sets containing , we have . Since for all , we further have for all . It follows easily that . That this union is disjoint follows from (3).       "
},
{
  "id": "d_path",
  "level": "2",
  "url": "s_connected_path.html#d_path",
  "type": "Definition",
  "number": "1.13.1",
  "title": "Path.",
  "body": " Path   A path in (or to) a topological space is a continuous function , where is a closed interval. We call the start point (or initial point ) and the end point (or terminal point ) of the path .   "
},
{
  "id": "d_path_connected",
  "level": "2",
  "url": "s_connected_path.html#d_path_connected",
  "type": "Definition",
  "number": "1.13.2",
  "title": "Path-connected space.",
  "body": " Path-connected space   Let be a topological space. Two elements are connected by a path in if there is a path such that and . The space is path connected if any two elements of are connected by a path.   "
},
{
  "id": "th_path_connected",
  "level": "2",
  "url": "s_connected_path.html#th_path_connected",
  "type": "Theorem",
  "number": "1.13.3",
  "title": "Path-connected implies connected.",
  "body": " Path-connected implies connected   If is path connected, then is connected. Using logical shorthand:     Assume by contradiction that is a separation of . We can find points . Let be a path connecting . By , the image is connected. By we must have or . This contradicts the fact that and . Thus there can be no separation of , and we conclude that it is connected.   "
},
{
  "id": "th_path_connected_continuous",
  "level": "2",
  "url": "s_connected_path.html#th_path_connected_continuous",
  "type": "Theorem",
  "number": "1.13.4",
  "title": "Path-connectedness and continuity.",
  "body": " Path-connectedness and continuity   If is continuous and is path connected, then is path connected.    Given and , let be a path connecting and . The composition is then a path connecting and .   "
},
{
  "id": "s_connected_path-6",
  "level": "2",
  "url": "s_connected_path.html#s_connected_path-6",
  "type": "Example",
  "number": "1.13.5",
  "title": "Balls in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Balls in   Let be Euclidean -space. For all and any , the open ball is connected, as is the closed ball defined as     It is easy to see that the straight line path defined as is a continuous function connecting any two points in . For our current purposes, we wish to show that if , then so is , for any . To this end, note that . This proves that the open ball is path connected, and hence connected. Next, it is easy to see that the closed ball is in fact the closure of the open ball. Since connectedness is preserved under closure, we conclude that the closed ball is connected.   "
},
{
  "id": "s_connected_path-7",
  "level": "2",
  "url": "s_connected_path.html#s_connected_path-7",
  "type": "Example",
  "number": "1.13.6",
  "title": "Punctured Euclidean space <span class=\"process-math\">\\(\\R^n-\\{\\boldzero\\}\\text{:}\\)<\/span> <span class=\"process-math\">\\(n\\geq 2\\)<\/span>.",
  "body": " Punctured Euclidean space :   Let be Euclidean -space, where . The subspace is connected.    Take any . If the two vectors are not scalar multiples of one another, then the straight line path connecting them is guaranteed to lie in , using a linear independence argument. If , then since , we can find a vector that is not a scalar multiple of either vector. We can then construct a polygonal path lieing in that first connects to via a straight line path, and then connects to via a straight line path.   "
},
{
  "id": "s_connected_path-8",
  "level": "2",
  "url": "s_connected_path.html#s_connected_path-8",
  "type": "Example",
  "number": "1.13.7",
  "title": "<span class=\"process-math\">\\(\\R\\not\\cong \\R^n\\)<\/span> for <span class=\"process-math\">\\(n\\geq 2\\)<\/span>.",
  "body": " for   Prove: if , then there is no homeomorphism from to .    Assume by contradiction that is a homeomorphism for some . It follows that the restriction is a homeomorphism. This a contradiction since is not connected ( is open and closed in ), but is connected.   "
},
{
  "id": "s_connected_path-9",
  "level": "2",
  "url": "s_connected_path.html#s_connected_path-9",
  "type": "Example",
  "number": "1.13.8",
  "title": "The <span class=\"process-math\">\\(n\\)<\/span>-sphere.",
  "body": " The -sphere   Fix . The -sphere is defined as . Prove: is connected for all .    Fix and consider the map defined as , where as usual . This map is continuous (homework exercise!) and surjective. Since is connected, we see that is the image of a connected set under a continuous function, hence connected.   "
},
{
  "id": "top_eg_topologist_sine_curve",
  "level": "2",
  "url": "s_connected_path.html#top_eg_topologist_sine_curve",
  "type": "Topological specimen",
  "number": "15",
  "title": "Topologist’s sine curve.",
  "body": " Topologist's sine curve  Define as for all . Let , the graph of .    The set is connected.    The set is not path connected. More specifically, we can show that and are not connected by a path in .         Since is connected and is continuous, its graph is connected by . Since closure preserves connectedness, we conclude that is connected.    Suppose is a path connecting and . We can write where the component functions are both continuous. The set is closed, since is continuous. Set (guaranteed to exist since is closed), and let . Note that since , and that for all we have and hence . Take . We will show that there is no -ball around such that , contradicting the continuity of .  For any any , is an interval since is continuous and is connected. This means that contains an interval of the form for some . Due to the highly oscillatory nature of , we can find points satisfying . Since these points are in the image of , we have and for some . But then . Since , we cannot have , and thus , as claimed.      "
},
{
  "id": "d_connected_components",
  "level": "2",
  "url": "s_connected_path.html#d_connected_components",
  "type": "Definition",
  "number": "1.13.9",
  "title": "Connected components.",
  "body": " Connected components   Let be a topological space. The connected component of an element is the set defined as the union of all connected subsets of containing . Similarly, the path-connected component of $x$ is the set $C_p(x)$ defined as the union of all path connected subspaces of containing . A subspace is maximally connected (resp., maximally path connected ) if is connected (resp. path connected), and if for all connected (resp. path connected) sets , if , then .   "
},
{
  "id": "th_components",
  "level": "2",
  "url": "s_connected_path.html#th_components",
  "type": "Theorem",
  "number": "1.13.10",
  "title": "Connected components.",
  "body": " Connected components   Let be a topological space.   For all the component is the unique maximally connected set containing , and is the unique maximally path connected set containing .    The collection of all connected components is a partition of by closed, maximally connected sets. In other words:    .     for all .     is maximally connected for all .     is closed for all .       Similarly, the collection of all path-connected components of is a partition of by maximally path-connected sets.    If is connected (resp. path connected) and is a connected component (resp. path connected component) of , then either or .    For all we have , and in fact is a partition of by path-connected components.          Let us prove that is maximally connected. It is connected as it is the union of connected sets containing . If and is connected, then since , we have by definition . Thus is maximally connected. Lastly, if is a maximally connected set containing , then by definition we have ; and since is maximally connected we conclude that . This proves is the unique maximally connected set containing .  The proof that is the unique maximally path-connected set containing proceeds in exactly the same manner. We use the fact (not made official, but easy to show) that a union of path-path connected sets with a common intersection point is path connected.    It is clear that , since for all . Furthermore, we know is maximally connected by . Since is connected and , we must have . Thus is closed.  Lastly, to see that the components are disjoint, we will show that . If , then is a connected set containing and . Since is maximally connected, we must have , and thus . The same argument shows . Thus .    The proof here is exactly as with connected components. Again, we use the fact that the union of path-connected sets sharing a common point is path connected.    Suppose is connected. If , then is connected by . Since is maximally connected, we have . Thus . A similar argument applies to path-connected components.    Since is connected and is the union of all connected sets containing , we have . Since for all , we further have for all . It follows easily that . That this union is disjoint follows from (3).      "
},
{
  "id": "s_compact_def",
  "level": "1",
  "url": "s_compact_def.html",
  "type": "Section",
  "number": "1.14",
  "title": "Compact spaces",
  "body": " Compact spaces   Covering   Let be a subset of the topological space . A collection is a covering of if . As a shorthand, we will often say in this case that is a covering.  Given a property of subsets ( , open, closed, ), a covering is said to satisfy this property if does for all .     Compact space   A topological space is compact if every open covering of has a finite subcovering: , if is an open covering, then there is a finite set such that .  A subset is compact if it is compact with respect to the subspace topology. Equivalently, is compact if any covering by open sets of has a finite subcovering.     Compactness is a topological property  If is a homeomorphism, then is compact if and only if is compact. Indeed defines a bijection between open covers of and open covers of ; and furthermore, this maps finite subcovers of to finite subcovers of .    Elementary examples     Any finite set is compact.    Any space with the trivial topology is compact.    A discrete space is compact if and only if it is finite.     is not compact. Consequently, since compactness is a topological property ( , preserved by homeomorphisms), no open interval is compact.       is compact  Show that is a compact subset of .     Finite closed intervals are compact   Finite closed intervals are compact in .    Let be an open covering of . Define to be the set of all such that has a finite subcovering. Note that is nonempty, since clearly . I will show further that is open and closed in . Since is connected, it will follows that , and hence that has a finite subcovering, as desired.   is open  Suppose . By definition of there is a finite subcover . Without loss of generality, we may assume that . Since is open, we can find an such that . But then clearly for all , showing that admits a finite subcovering for all such , and hence that . This proves is open.    is closed  Take . Since is a cover of , we have for some . Since is open, we can find an such that . But then for all we have : indeed, if for such an we had a finite subcovering , then would be a finite subcovering of , contradicting the fact that .      Compact implies closed in Hausdorff spaces   Let be a compact subset of the topological space .    is closed.    Given any there are disjoint open sets such that and .       (1) follows directly from (2). To prove the latter, note that for each we can find disjoint open neighborhoods of and , respectively. Since is an open covering of , there is a finite subcovering . The open sets satisfy the desired conditions.     Compactness inherited by closed subspaces   Let be a closed subset of the topological space . If is compact, then is compact.    Let be an open covering of by open sets of . Since is closed, the collection is an open covering of .     Compactness preserved under continuous image   Let be a continuous function. If is compact, then is compact.    If is an open covering of , then is an open covering of . Since is compact, there is a finite subcover . It follows that is a finite subcover of our original covering .     Compactness and closed maps   Let be continuous. If is compact and is Hausdorff, then is a closed map.   Let be closed. Since is compact, is compact. By , is compact. By , since is Hausdorff, is closed.    Compactness and homeomorphisms   Let be continuous and bijective. If is compact and is Hausdorff, then is a homeomorphism.    By , the map is closed, hence a homeomorphism.     Finite intersection property   A collection of subsets of satisfies the finite intersection property if every finite subcollection has non trivial intersection: , .     Closed formulation of compactness   Let be a topological space. The following statements are equivalent.    is compact.    If is a collection of closed sets that satisfies the finite intersection property, then .        Nested closed sets in compact space   Let be a compact space. Given a nested sequence of nonempty closed subsets , we have .    "
},
{
  "id": "d_covering",
  "level": "2",
  "url": "s_compact_def.html#d_covering",
  "type": "Definition",
  "number": "1.14.1",
  "title": "Covering.",
  "body": " Covering   Let be a subset of the topological space . A collection is a covering of if . As a shorthand, we will often say in this case that is a covering.  Given a property of subsets ( , open, closed, ), a covering is said to satisfy this property if does for all .   "
},
{
  "id": "d_compact",
  "level": "2",
  "url": "s_compact_def.html#d_compact",
  "type": "Definition",
  "number": "1.14.2",
  "title": "Compact space.",
  "body": " Compact space   A topological space is compact if every open covering of has a finite subcovering: , if is an open covering, then there is a finite set such that .  A subset is compact if it is compact with respect to the subspace topology. Equivalently, is compact if any covering by open sets of has a finite subcovering.   "
},
{
  "id": "rm_compactness_topological",
  "level": "2",
  "url": "s_compact_def.html#rm_compactness_topological",
  "type": "Remark",
  "number": "1.14.3",
  "title": "Compactness is a topological property.",
  "body": " Compactness is a topological property  If is a homeomorphism, then is compact if and only if is compact. Indeed defines a bijection between open covers of and open covers of ; and furthermore, this maps finite subcovers of to finite subcovers of .  "
},
{
  "id": "eg_elementary_compact",
  "level": "2",
  "url": "s_compact_def.html#eg_elementary_compact",
  "type": "Example",
  "number": "1.14.4",
  "title": "Elementary examples.",
  "body": " Elementary examples     Any finite set is compact.    Any space with the trivial topology is compact.    A discrete space is compact if and only if it is finite.     is not compact. Consequently, since compactness is a topological property ( , preserved by homeomorphisms), no open interval is compact.     "
},
{
  "id": "eg_K_compact",
  "level": "2",
  "url": "s_compact_def.html#eg_K_compact",
  "type": "Example",
  "number": "1.14.5",
  "title": "<span class=\"process-math\">\\(K\\cup\\{0\\}\\)<\/span> is compact.",
  "body": " is compact  Show that is a compact subset of .   "
},
{
  "id": "th_compact_R",
  "level": "2",
  "url": "s_compact_def.html#th_compact_R",
  "type": "Theorem",
  "number": "1.14.6",
  "title": "Finite closed intervals are compact.",
  "body": " Finite closed intervals are compact   Finite closed intervals are compact in .    Let be an open covering of . Define to be the set of all such that has a finite subcovering. Note that is nonempty, since clearly . I will show further that is open and closed in . Since is connected, it will follows that , and hence that has a finite subcovering, as desired.   is open  Suppose . By definition of there is a finite subcover . Without loss of generality, we may assume that . Since is open, we can find an such that . But then clearly for all , showing that admits a finite subcovering for all such , and hence that . This proves is open.    is closed  Take . Since is a cover of , we have for some . Since is open, we can find an such that . But then for all we have : indeed, if for such an we had a finite subcovering , then would be a finite subcovering of , contradicting the fact that .    "
},
{
  "id": "th_compact_Haus_closed",
  "level": "2",
  "url": "s_compact_def.html#th_compact_Haus_closed",
  "type": "Theorem",
  "number": "1.14.7",
  "title": "Compact implies closed in Hausdorff spaces.",
  "body": " Compact implies closed in Hausdorff spaces   Let be a compact subset of the topological space .    is closed.    Given any there are disjoint open sets such that and .       (1) follows directly from (2). To prove the latter, note that for each we can find disjoint open neighborhoods of and , respectively. Since is an open covering of , there is a finite subcovering . The open sets satisfy the desired conditions.   "
},
{
  "id": "th_closed_in_compact",
  "level": "2",
  "url": "s_compact_def.html#th_closed_in_compact",
  "type": "Theorem",
  "number": "1.14.8",
  "title": "Compactness inherited by closed subspaces.",
  "body": " Compactness inherited by closed subspaces   Let be a closed subset of the topological space . If is compact, then is compact.    Let be an open covering of by open sets of . Since is closed, the collection is an open covering of .   "
},
{
  "id": "th_compactness_continuous",
  "level": "2",
  "url": "s_compact_def.html#th_compactness_continuous",
  "type": "Theorem",
  "number": "1.14.9",
  "title": "Compactness preserved under continuous image.",
  "body": " Compactness preserved under continuous image   Let be a continuous function. If is compact, then is compact.    If is an open covering of , then is an open covering of . Since is compact, there is a finite subcover . It follows that is a finite subcover of our original covering .   "
},
{
  "id": "th_compactness_closed_map",
  "level": "2",
  "url": "s_compact_def.html#th_compactness_closed_map",
  "type": "Theorem",
  "number": "1.14.10",
  "title": "Compactness and closed maps.",
  "body": " Compactness and closed maps   Let be continuous. If is compact and is Hausdorff, then is a closed map.   Let be closed. Since is compact, is compact. By , is compact. By , since is Hausdorff, is closed.  "
},
{
  "id": "cor_compact_homeomorphism",
  "level": "2",
  "url": "s_compact_def.html#cor_compact_homeomorphism",
  "type": "Corollary",
  "number": "1.14.11",
  "title": "Compactness and homeomorphisms.",
  "body": " Compactness and homeomorphisms   Let be continuous and bijective. If is compact and is Hausdorff, then is a homeomorphism.    By , the map is closed, hence a homeomorphism.   "
},
{
  "id": "d_finite_intersection_property",
  "level": "2",
  "url": "s_compact_def.html#d_finite_intersection_property",
  "type": "Definition",
  "number": "1.14.12",
  "title": "Finite intersection property.",
  "body": " Finite intersection property   A collection of subsets of satisfies the finite intersection property if every finite subcollection has non trivial intersection: , .   "
},
{
  "id": "th_compact_equivalence",
  "level": "2",
  "url": "s_compact_def.html#th_compact_equivalence",
  "type": "Theorem",
  "number": "1.14.13",
  "title": "Closed formulation of compactness.",
  "body": " Closed formulation of compactness   Let be a topological space. The following statements are equivalent.    is compact.    If is a collection of closed sets that satisfies the finite intersection property, then .      "
},
{
  "id": "cor_finite_intersection",
  "level": "2",
  "url": "s_compact_def.html#cor_finite_intersection",
  "type": "Corollary",
  "number": "1.14.14",
  "title": "Nested closed sets in compact space.",
  "body": " Nested closed sets in compact space   Let be a compact space. Given a nested sequence of nonempty closed subsets , we have .   "
},
{
  "id": "s_compact_Rn",
  "level": "1",
  "url": "s_compact_Rn.html",
  "type": "Section",
  "number": "1.15",
  "title": "Compactness in <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " Compactness in  Before investigating the notion of compactness in the setting of , we first drop a real whopper of a theorem. Tychonoff's theorem states simply that arbitrary products of compact topological spaces are compact with respect to the product topology. The proof of this most general result requires the axiom of choice; in fact, as we will show, it is equivalent to the axiom of choice. We will provide a full proof of Tychonoff's theorem later using the concept of nets . In the meantime, we will officially state the result, make use of the result in all its generality henceforth, and provide a proof for the case where we have a finite product.   Tychonoff theorem   Given any collection of compact topological spaces, the product space is compact with respect to the product topology.    For now we only prove the result for finite products. It suffices, by induction, to show that the product of two compact spaces is compact, and for this case we will use , which is quite useful in its own right.  Let and be compact topological spaces, and suppose we have an open covering of . For any the subspace is homeomorphic to and hence compact. Since is a covering of , there is a finite set such that . Since is compact, it follows by the tube lemma that there is an open set such that . Since and is compact, there are elements such that . We claim that , in which case is a finite subcovering of , as desired.  Let's see why holds: given any , we have for some , in which case as desired. The reverse inclusion is automatic.     Tube lemma   Let be topological spaces, and assume is compact. Given any and open set containing , there is an open set such that .    If is an open set satisfying , then for all , there exists open sets and such that and and . Since is an open covering of and is compact, we have for some elements . Let . Clearly we have . Furthermore, given any we have for some . Since , we conclude that . This proves , as desired.     Boxes and balls in   Show that the following subsets of are compact.   A closed solid box .    A closed ball .       The box is compact by the (finite version) of Tychonoff's theorem, since any closed interval is compact.  The closed ball is homeomorphic to , which in turn is homeomorphic to the box via the map .     Bounded, diameter, and distance to sets   Let be a metric space and let be a subspace of .  We say is bounded if there is a positive number such that for all . If is nonempty, we define the diameter of , denoted , as .  The distance  from to is defined as .     Heine-Borel theorem   Let . For any the following conditions are equivalent.    is compact.     is closed and bounded with respect to (equivalently, with respect to ).       It is clear that the empty set is compact, closed, and bounded. Henceforth, we assume is nonempty.  Assume is compact. Since is Hausdorff, we know from that is closed. We now show that is bounded. Pick any . We have . Since is compact, we have for some . It follows that for all , in which case .  Now assume is closed. If furthermore , then is a closed subset     Extreme value theorem   Let be continuous. If is compact, then there exist points such that and .     Lebesgue number   Let be a metric space. A Lebesgue number for an open covering is a positive real number satisfying the following condition: if , then for some .     Lebesgue number   If is a compact metric space, then any open covering of has a Lebesgue number.     Compact: continuous implies uniformly continuous   Let be a continuous function between the metric spaces and . If is compact, then is uniformly continuous: , for all there exists a such that if , then .    "
},
{
  "id": "th_Tychonoff",
  "level": "2",
  "url": "s_compact_Rn.html#th_Tychonoff",
  "type": "Theorem",
  "number": "1.15.1",
  "title": "Tychonoff theorem.",
  "body": " Tychonoff theorem   Given any collection of compact topological spaces, the product space is compact with respect to the product topology.    For now we only prove the result for finite products. It suffices, by induction, to show that the product of two compact spaces is compact, and for this case we will use , which is quite useful in its own right.  Let and be compact topological spaces, and suppose we have an open covering of . For any the subspace is homeomorphic to and hence compact. Since is a covering of , there is a finite set such that . Since is compact, it follows by the tube lemma that there is an open set such that . Since and is compact, there are elements such that . We claim that , in which case is a finite subcovering of , as desired.  Let's see why holds: given any , we have for some , in which case as desired. The reverse inclusion is automatic.   "
},
{
  "id": "lem_tube",
  "level": "2",
  "url": "s_compact_Rn.html#lem_tube",
  "type": "Lemma",
  "number": "1.15.2",
  "title": "Tube lemma.",
  "body": " Tube lemma   Let be topological spaces, and assume is compact. Given any and open set containing , there is an open set such that .    If is an open set satisfying , then for all , there exists open sets and such that and and . Since is an open covering of and is compact, we have for some elements . Let . Clearly we have . Furthermore, given any we have for some . Since , we conclude that . This proves , as desired.   "
},
{
  "id": "s_compact_Rn-5",
  "level": "2",
  "url": "s_compact_Rn.html#s_compact_Rn-5",
  "type": "Example",
  "number": "1.15.3",
  "title": "Boxes and balls in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Boxes and balls in   Show that the following subsets of are compact.   A closed solid box .    A closed ball .       The box is compact by the (finite version) of Tychonoff's theorem, since any closed interval is compact.  The closed ball is homeomorphic to , which in turn is homeomorphic to the box via the map .   "
},
{
  "id": "d_bounded_diam_distance",
  "level": "2",
  "url": "s_compact_Rn.html#d_bounded_diam_distance",
  "type": "Definition",
  "number": "1.15.4",
  "title": "Bounded, diameter, and distance to sets.",
  "body": " Bounded, diameter, and distance to sets   Let be a metric space and let be a subspace of .  We say is bounded if there is a positive number such that for all . If is nonempty, we define the diameter of , denoted , as .  The distance  from to is defined as .   "
},
{
  "id": "th_Heine_Borel",
  "level": "2",
  "url": "s_compact_Rn.html#th_Heine_Borel",
  "type": "Theorem",
  "number": "1.15.5",
  "title": "Heine-Borel theorem.",
  "body": " Heine-Borel theorem   Let . For any the following conditions are equivalent.    is compact.     is closed and bounded with respect to (equivalently, with respect to ).       It is clear that the empty set is compact, closed, and bounded. Henceforth, we assume is nonempty.  Assume is compact. Since is Hausdorff, we know from that is closed. We now show that is bounded. Pick any . We have . Since is compact, we have for some . It follows that for all , in which case .  Now assume is closed. If furthermore , then is a closed subset   "
},
{
  "id": "cor_extreme_value_theorem",
  "level": "2",
  "url": "s_compact_Rn.html#cor_extreme_value_theorem",
  "type": "Corollary",
  "number": "1.15.6",
  "title": "Extreme value theorem.",
  "body": " Extreme value theorem   Let be continuous. If is compact, then there exist points such that and .   "
},
{
  "id": "d_Lebesgue_number",
  "level": "2",
  "url": "s_compact_Rn.html#d_Lebesgue_number",
  "type": "Definition",
  "number": "1.15.7",
  "title": "Lebesgue number.",
  "body": " Lebesgue number   Let be a metric space. A Lebesgue number for an open covering is a positive real number satisfying the following condition: if , then for some .   "
},
{
  "id": "cor_Lebesgue_number",
  "level": "2",
  "url": "s_compact_Rn.html#cor_Lebesgue_number",
  "type": "Corollary",
  "number": "1.15.8",
  "title": "Lebesgue number.",
  "body": " Lebesgue number   If is a compact metric space, then any open covering of has a Lebesgue number.   "
},
{
  "id": "cor_continuous_uniformcontinuous",
  "level": "2",
  "url": "s_compact_Rn.html#cor_continuous_uniformcontinuous",
  "type": "Corollary",
  "number": "1.15.9",
  "title": "Compact: continuous implies uniformly continuous.",
  "body": " Compact: continuous implies uniformly continuous   Let be a continuous function between the metric spaces and . If is compact, then is uniformly continuous: , for all there exists a such that if , then .   "
},
{
  "id": "s_compact_metric",
  "level": "1",
  "url": "s_compact_metric.html",
  "type": "Section",
  "number": "1.16",
  "title": "Compactness in metric spaces",
  "body": " Compactness in metric spaces  As useful as the Heine-Borel theorem is in characterizing compactness in , it relies in part on a non-topological property : namely, boundedness with respect to the Euclidean, box, or taxicab norm. In this section we investigate the relation of compactness to various related topological properties that turn out to be equivalent to compactness in the setting of metric spaces. First we meet our new compact-like properties.   Limit point compact   A topological space is limit point compact if all infinite subsets of have a limit point.     Sequentially compact   A topological space is sequentially compact if every sequences of elements of has a convergent subsequence.     asserts that compactness, limit point compactness, and sequential compactness are equivalent in the setting of metric spaces.   Compactness in metric spaces   Let be a metric space. The following statements are equivalent.    is compact.     is limit point compact.     is sequentially compact.       Our proof of will involve a series of results that articulate which implications hold between these three concepts in full generality, and highlight what extra conditions are required to obtain equivalences. Before embarking on this investigation we look at two examples that illustrate two different uses of : namely, (a) deciding whether a given subset of a metric space is compact, and (b) showing that a given space is not a metric space.     Compact implies limit point compact   If is compact, then is limit point compact.    Let be an infinite subset of , and let be any countable infinite subset of . We will show that has a limit point. Assume by contradiction that has no limit point. Since in general the closure of a set is obtained by adding all limit points, we see that is closed. Since is compact, we conclude that is compact. On the other hand, since no element of is a limit point of is a limit point of , it is easy to see that all singletons of are open in the subspace topology. This contradicts the compactness of since the open covering has no finite subcover.     Countably compact space  A close look at our proof of reveals that limit point compactness follows from a slightly weaker notion of compactness: namely, countable compactness . A space is countably compact if every countable open subcover has a finite subcover. We have the following implications: . It can be shown that none of these implications is in fact an equivalence. However, if is further assumed to be , then limit point compactness implies countable compactness. We record this fact schematically as follows: .    Sequential compactness implies limit point compactness   If is sequentially compact, then is limit point compactness.    We will show that sequential compactness implies countable compactness. The result then follows from . Suppose by contradiction that the open covering has no finite subcover. It follows that we can construct a sequence satisfying . By sequential compactness there is a convergent subsequence . Since is a covering, we have for some . But by construction there is an such that for all . A contradiction. Thus there must be a finite subcover of .    At this point we have the following logical diagram for a general topological space. Without further assumptions on none of the implications below is an equivalence.   Compactness implications   Compactness implications     We now set about elaborating on by adding additional properties to . It turns out that some of the so-called countability axioms play a useful role in this regard. We will take these topics up in earnest in , but will introduce here, somewhat prematurely, two of these notions (viz., the first and second countable axioms).   Local basis   Let be a topological space. Given , a local basis at is a collection of open neighborhoods of such that for all open containing there is a such that .     First countable   A topological space is first countable if every has a countable local basis.      Limit point compact+ +first countable implies sequentially compact  Assume is and first countable. If is limit point compact, then is sequentially compact.    Assume is , second countable, and limit point compact. Let be a sequence in and let , the set of entries of . If is finite, then it is easy to see that there is a constant subsequence of , and such a subsequence clearly converges. If is infinite, then since is limit point compact, there is a limit point of . Let be a countable local basis at . Replacing with , we may assume that for all .      A topological space is second countable if it has a countable basis.     Sequentially compact+second countable implies compact   Let be a second countable space. If is sequentially compact, then is compact.    Assume is second countable, and let . As we will show in , since is second countable, there is a countable subcovering , where for some . If the countable covering had no finite subcovering, then we could construct a sequence satisfying for all . Since is sequentially compact, the sequence would have a convergent subsequence . We must have for some . But by construction for all , whence it follows that eventually. A contradiction. We conclude that , and hence has a finite subcovering, as desired.    The following logical diagram summarizes what we know thus far. (We leave as an exercise the proof that if is and limit point compact, then it is countably compact.)   Compactness implications   Compactness implications      now follows from a diagram chase and the fact that second countable implies first countable. (See .)   Compactness equivalences   Let be and second countable. The following are equivalent.    is compact.     is limit point compact.     is sequentially compact.       Finally, we are ready to prove . Since any metric space is and first countable, we have . To show it suffices to prove that any sequentially compact metric space is second countable. This is the result of our last theorem.   Metrizable+sequentially compact implies second countable   Let be a metric space. If is sequentially compact, then is second countable.    We show first that if is a sequentially compact metric space, then it is totally bounded: , given any , we have for some elements . Indeed, suppose by contradiction that there is an for which this is not true. Construct a sequence as follows: choose any ; since , we can find an element ; in general, given choices , choose . Since is sequentially compact the the sequence has a convergent subsequence . This is a contradiction since this sequence would not be Cauchy: indeed by construction, for any and with , we have .  Since is totally bounded, for each we have . Let , a countable set. It is easy to see that is dense in : , . As we will show in , any metric space containing a countable dense subset is second countable.     "
},
{
  "id": "d_limit_point_compact",
  "level": "2",
  "url": "s_compact_metric.html#d_limit_point_compact",
  "type": "Definition",
  "number": "1.16.1",
  "title": "Limit point compact.",
  "body": " Limit point compact   A topological space is limit point compact if all infinite subsets of have a limit point.   "
},
{
  "id": "d_sequentially_compact",
  "level": "2",
  "url": "s_compact_metric.html#d_sequentially_compact",
  "type": "Definition",
  "number": "1.16.2",
  "title": "Sequentially compact.",
  "body": " Sequentially compact   A topological space is sequentially compact if every sequences of elements of has a convergent subsequence.   "
},
{
  "id": "th_compact_metric",
  "level": "2",
  "url": "s_compact_metric.html#th_compact_metric",
  "type": "Theorem",
  "number": "1.16.3",
  "title": "Compactness in metric spaces.",
  "body": " Compactness in metric spaces   Let be a metric space. The following statements are equivalent.    is compact.     is limit point compact.     is sequentially compact.      "
},
{
  "id": "s_compact_metric-8",
  "level": "2",
  "url": "s_compact_metric.html#s_compact_metric-8",
  "type": "Example",
  "number": "1.16.4",
  "title": "",
  "body": " "
},
{
  "id": "th_compact_implies_limitpoint",
  "level": "2",
  "url": "s_compact_metric.html#th_compact_implies_limitpoint",
  "type": "Theorem",
  "number": "1.16.5",
  "title": "Compact implies limit point compact.",
  "body": " Compact implies limit point compact   If is compact, then is limit point compact.    Let be an infinite subset of , and let be any countable infinite subset of . We will show that has a limit point. Assume by contradiction that has no limit point. Since in general the closure of a set is obtained by adding all limit points, we see that is closed. Since is compact, we conclude that is compact. On the other hand, since no element of is a limit point of is a limit point of , it is easy to see that all singletons of are open in the subspace topology. This contradicts the compactness of since the open covering has no finite subcover.   "
},
{
  "id": "rm_countably_compact",
  "level": "2",
  "url": "s_compact_metric.html#rm_countably_compact",
  "type": "Remark",
  "number": "1.16.6",
  "title": "Countably compact space.",
  "body": " Countably compact space  A close look at our proof of reveals that limit point compactness follows from a slightly weaker notion of compactness: namely, countable compactness . A space is countably compact if every countable open subcover has a finite subcover. We have the following implications: . It can be shown that none of these implications is in fact an equivalence. However, if is further assumed to be , then limit point compactness implies countable compactness. We record this fact schematically as follows: .  "
},
{
  "id": "th_seqcompact_implies_limitpoint_compact",
  "level": "2",
  "url": "s_compact_metric.html#th_seqcompact_implies_limitpoint_compact",
  "type": "Theorem",
  "number": "1.16.7",
  "title": "Sequential compactness implies limit point compactness.",
  "body": " Sequential compactness implies limit point compactness   If is sequentially compact, then is limit point compactness.    We will show that sequential compactness implies countable compactness. The result then follows from . Suppose by contradiction that the open covering has no finite subcover. It follows that we can construct a sequence satisfying . By sequential compactness there is a convergent subsequence . Since is a covering, we have for some . But by construction there is an such that for all . A contradiction. Thus there must be a finite subcover of .   "
},
{
  "id": "fig_compactness_I",
  "level": "2",
  "url": "s_compact_metric.html#fig_compactness_I",
  "type": "Figure",
  "number": "1.16.8",
  "title": "",
  "body": " Compactness implications   Compactness implications    "
},
{
  "id": "d_neighborhood_basis",
  "level": "2",
  "url": "s_compact_metric.html#d_neighborhood_basis",
  "type": "Definition",
  "number": "1.16.9",
  "title": "Local basis.",
  "body": " Local basis   Let be a topological space. Given , a local basis at is a collection of open neighborhoods of such that for all open containing there is a such that .   "
},
{
  "id": "d_first_countable",
  "level": "2",
  "url": "s_compact_metric.html#d_first_countable",
  "type": "Definition",
  "number": "1.16.10",
  "title": "First countable.",
  "body": " First countable   A topological space is first countable if every has a countable local basis.   "
},
{
  "id": "th_limitpoint_implies_sequential",
  "level": "2",
  "url": "s_compact_metric.html#th_limitpoint_implies_sequential",
  "type": "Theorem",
  "number": "1.16.11",
  "title": "",
  "body": "  Limit point compact+ +first countable implies sequentially compact  Assume is and first countable. If is limit point compact, then is sequentially compact.    Assume is , second countable, and limit point compact. Let be a sequence in and let , the set of entries of . If is finite, then it is easy to see that there is a constant subsequence of , and such a subsequence clearly converges. If is infinite, then since is limit point compact, there is a limit point of . Let be a countable local basis at . Replacing with , we may assume that for all .   "
},
{
  "id": "d_second_countable",
  "level": "2",
  "url": "s_compact_metric.html#d_second_countable",
  "type": "Definition",
  "number": "1.16.12",
  "title": "",
  "body": "  A topological space is second countable if it has a countable basis.   "
},
{
  "id": "th_sequential_implies_compact",
  "level": "2",
  "url": "s_compact_metric.html#th_sequential_implies_compact",
  "type": "Theorem",
  "number": "1.16.13",
  "title": "Sequentially compact+second countable implies compact.",
  "body": " Sequentially compact+second countable implies compact   Let be a second countable space. If is sequentially compact, then is compact.    Assume is second countable, and let . As we will show in , since is second countable, there is a countable subcovering , where for some . If the countable covering had no finite subcovering, then we could construct a sequence satisfying for all . Since is sequentially compact, the sequence would have a convergent subsequence . We must have for some . But by construction for all , whence it follows that eventually. A contradiction. We conclude that , and hence has a finite subcovering, as desired.   "
},
{
  "id": "fig_compactness_II",
  "level": "2",
  "url": "s_compact_metric.html#fig_compactness_II",
  "type": "Figure",
  "number": "1.16.14",
  "title": "",
  "body": " Compactness implications   Compactness implications    "
},
{
  "id": "cor_compact_limitpoint_sequential",
  "level": "2",
  "url": "s_compact_metric.html#cor_compact_limitpoint_sequential",
  "type": "Corollary",
  "number": "1.16.15",
  "title": "Compactness equivalences.",
  "body": " Compactness equivalences   Let be and second countable. The following are equivalent.    is compact.     is limit point compact.     is sequentially compact.      "
},
{
  "id": "th_metric_sequential_second_countable",
  "level": "2",
  "url": "s_compact_metric.html#th_metric_sequential_second_countable",
  "type": "Theorem",
  "number": "1.16.16",
  "title": "Metrizable+sequentially compact implies second countable.",
  "body": " Metrizable+sequentially compact implies second countable   Let be a metric space. If is sequentially compact, then is second countable.    We show first that if is a sequentially compact metric space, then it is totally bounded: , given any , we have for some elements . Indeed, suppose by contradiction that there is an for which this is not true. Construct a sequence as follows: choose any ; since , we can find an element ; in general, given choices , choose . Since is sequentially compact the the sequence has a convergent subsequence . This is a contradiction since this sequence would not be Cauchy: indeed by construction, for any and with , we have .  Since is totally bounded, for each we have . Let , a countable set. It is easy to see that is dense in : , . As we will show in , any metric space containing a countable dense subset is second countable.   "
},
{
  "id": "s_locally",
  "level": "1",
  "url": "s_locally.html",
  "type": "Section",
  "number": "1.17",
  "title": "Locally compact spaces and compactification",
  "body": " Locally compact spaces and compactification   Locally compact space   A topological space is locally compact at if there is a compact neighborhood of : , if there is a compact set and open set containing such that . The space is locally compact if it is locally compact at all points .     Local compactness equivalence   Let be a topological space. The following are equivalent.    is locally compact Hausdorff.    For all , and for all open sets containing , there is an open neighborhood of such that and is compact.       It is clear that (2) implies (1): for any , taking , we get an open neighborhood such that is compact. Thus is a compact neighborhood of .  We now show (1) implies (2). Fix an and open set containing . Since is locally compact, we have for some open set and compact set . Taking we may assume further that . The set is a closed subset of the compact set , hence compact. Since is Hausdorff, we can find disjoint open sets containing and , respectively. (See .) Let . Since , we have ; since is compact, it follows that is compact. To show , it suffices to show that is empty. Given any , the open set contains and is disjoint from ; we conclude that . In all we have shown that for any and open set containing , there is an open set with compact closure satisfying , as desired.     Embedding   An embedding between topological spaces and is an injective continuous function such that is a homeomorphism (with respect to the subspace topology on ).  An embedding is open (resp., closed ) if is an open (resp. closed) subset of : equivalently, if the embedding is an open (resp., a closed) map.     One-point compactification  Let be a topological space, and let be a disjoint union of and a single element that is not an element of . The collection defines a topology on with respect to which the inclusion map is an open immersion. We call along with the the inclusion map the Alexandroff extension of . When is locally compact Hausdorff, we call the one-point compactification of .     A compactification of a topological space is an embedding , where is compact and .  A compactification is a one-point compactification if is a single point.     One-point compactification   Let be a topological space, and let the Alexandroff extension of as defined in .    is a topology, and the inclusion map is an open immersion with respect to this topology.     is compact.    The following statements are equivalent.    is open in .     is not dense in      is compact.       The following statements are equivalent.    is Hausdorff.     is locally compact Hausdorff and not compact.           Proof of (1)  Assuming is a topology, it is easy too see that the inclusion map is both continuous (for open we have open in ) and an open map, and hence an open immersion.  We show each topology axiom in turn.   Since , we have . Furthermore, since is closed and compact, we have .    Let be a collection of elements of , and let . If , then . Suppose with closed and compact for some . The set is a closed subset of and hence compact. We claim , in which case . Indeed, we have .    Assume and are elements of . We have three cases: , where in the last line we've used the fact the a finite union of compact sets is compact.       Proof of (2)  Let be an open covering. We must have for some , in which case for some closed compact . Next, we have where is open in . Since is compact, there is a finite subcovering ; then we have , a finite subcovering of .    Proof of (3)  Since , we see that or . It follows that if and only if if and only if if and only if is open if and only if is closed. Now since is compact, if is closed, then is compact. Suppose conversely that is compact; then by definition of the set is open. The stated equivalences now follow.    Proof of (4)  If is Hausdorff, then since is also compact, we see that is an open subspace of a locally compact Hausdorff space. The claim now follows from the general fact that an open subspace of a locally compact Hausdorff space is locally compact Hausdorff. This is easy to prove using , and is left to the reader.  Assume conversely that is locally compact Hausdorff. Since itself is Hausdorff and is an open subspace of , to show is Hausdorff it suffices to show that given any , there are open disjoint sets such that and . Since is locally compact Hausdorff, there a closed compact neighborhood of . It follows that the open sets and meet the desired conditions.      One-point compactification   Let be locally compact Hausdorff.   If is not compact, then the inclusion map is a one-point compactification of , and is Hausdorff.    If is not compact, and is a one-point compactification where is Hausdorff, then there exists a unique homeomorphism such that .        Locally compact Hausdorff spaces   Let be a Hausdorff space. The following statements are equivalent.    is locally compact.     is a homeomorphic to an open subspace of a compact Hausdorff space.       That (1) implies (2) follows from . For the converse, assume is homeomorphic to the open set , where is compact and Hausdorff. We may use the homeomorphism to identify with : thus we think of as an open subspace of . Now, since is compact, it is locally compact. Hence by , given any we can find an open such that and is compact. This shows that every has a compact neighborhood , as desired.     One-point compactification of   We consider with the standard topology.   Produce a one-point compactification of where is a familiar space.    Produce a one-point compactification of where is a familiar space.    Use (2) to identify the one-point compactification of as a subspace of a familiar space.          The map defined as is an open embedding of onto . Thus this is a realization of the one-point compactification of .    Since is a homeomorphism, the map defined as the composition is an open embedding of onto , providing a realization of the one-point compactification of . Note that we have by definition .    Since the inclusion is a closed embedding, the restriction is an embedding (neither open nor closed) of into . Restricting the codomain to the closed (hence compact) subset we get a one-point compactification .        Stereographic projection  Let , the north pole of . Given any the line passing through and intersects the -plane in the unique point . The corresponding map can easily be shown to be a homeomorphism, with inverse . The map is called the stereographic projection onto . The open embedding realizes as the one-point compactification of .  Not surprisingly, this result generalizes easily to . There is a homeomorphism from to mapping to , whose inverse realizes as the one-point compactification of .   "
},
{
  "id": "d_locally_compact",
  "level": "2",
  "url": "s_locally.html#d_locally_compact",
  "type": "Definition",
  "number": "1.17.1",
  "title": "Locally compact space.",
  "body": " Locally compact space   A topological space is locally compact at if there is a compact neighborhood of : , if there is a compact set and open set containing such that . The space is locally compact if it is locally compact at all points .   "
},
{
  "id": "th_locally_compact_equivalence",
  "level": "2",
  "url": "s_locally.html#th_locally_compact_equivalence",
  "type": "Theorem",
  "number": "1.17.2",
  "title": "Local compactness equivalence.",
  "body": " Local compactness equivalence   Let be a topological space. The following are equivalent.    is locally compact Hausdorff.    For all , and for all open sets containing , there is an open neighborhood of such that and is compact.       It is clear that (2) implies (1): for any , taking , we get an open neighborhood such that is compact. Thus is a compact neighborhood of .  We now show (1) implies (2). Fix an and open set containing . Since is locally compact, we have for some open set and compact set . Taking we may assume further that . The set is a closed subset of the compact set , hence compact. Since is Hausdorff, we can find disjoint open sets containing and , respectively. (See .) Let . Since , we have ; since is compact, it follows that is compact. To show , it suffices to show that is empty. Given any , the open set contains and is disjoint from ; we conclude that . In all we have shown that for any and open set containing , there is an open set with compact closure satisfying , as desired.   "
},
{
  "id": "d_embedding",
  "level": "2",
  "url": "s_locally.html#d_embedding",
  "type": "Definition",
  "number": "1.17.3",
  "title": "Embedding.",
  "body": " Embedding   An embedding between topological spaces and is an injective continuous function such that is a homeomorphism (with respect to the subspace topology on ).  An embedding is open (resp., closed ) if is an open (resp. closed) subset of : equivalently, if the embedding is an open (resp., a closed) map.   "
},
{
  "id": "top_eg_onepoint_compact",
  "level": "2",
  "url": "s_locally.html#top_eg_onepoint_compact",
  "type": "Topological specimen",
  "number": "16",
  "title": "One-point compactification.",
  "body": " One-point compactification  Let be a topological space, and let be a disjoint union of and a single element that is not an element of . The collection defines a topology on with respect to which the inclusion map is an open immersion. We call along with the the inclusion map the Alexandroff extension of . When is locally compact Hausdorff, we call the one-point compactification of .  "
},
{
  "id": "d_compactification",
  "level": "2",
  "url": "s_locally.html#d_compactification",
  "type": "Definition",
  "number": "1.17.4",
  "title": "",
  "body": "  A compactification of a topological space is an embedding , where is compact and .  A compactification is a one-point compactification if is a single point.   "
},
{
  "id": "th_onepoint_compactification",
  "level": "2",
  "url": "s_locally.html#th_onepoint_compactification",
  "type": "Theorem",
  "number": "1.17.5",
  "title": "One-point compactification.",
  "body": " One-point compactification   Let be a topological space, and let the Alexandroff extension of as defined in .    is a topology, and the inclusion map is an open immersion with respect to this topology.     is compact.    The following statements are equivalent.    is open in .     is not dense in      is compact.       The following statements are equivalent.    is Hausdorff.     is locally compact Hausdorff and not compact.           Proof of (1)  Assuming is a topology, it is easy too see that the inclusion map is both continuous (for open we have open in ) and an open map, and hence an open immersion.  We show each topology axiom in turn.   Since , we have . Furthermore, since is closed and compact, we have .    Let be a collection of elements of , and let . If , then . Suppose with closed and compact for some . The set is a closed subset of and hence compact. We claim , in which case . Indeed, we have .    Assume and are elements of . We have three cases: , where in the last line we've used the fact the a finite union of compact sets is compact.       Proof of (2)  Let be an open covering. We must have for some , in which case for some closed compact . Next, we have where is open in . Since is compact, there is a finite subcovering ; then we have , a finite subcovering of .    Proof of (3)  Since , we see that or . It follows that if and only if if and only if if and only if is open if and only if is closed. Now since is compact, if is closed, then is compact. Suppose conversely that is compact; then by definition of the set is open. The stated equivalences now follow.    Proof of (4)  If is Hausdorff, then since is also compact, we see that is an open subspace of a locally compact Hausdorff space. The claim now follows from the general fact that an open subspace of a locally compact Hausdorff space is locally compact Hausdorff. This is easy to prove using , and is left to the reader.  Assume conversely that is locally compact Hausdorff. Since itself is Hausdorff and is an open subspace of , to show is Hausdorff it suffices to show that given any , there are open disjoint sets such that and . Since is locally compact Hausdorff, there a closed compact neighborhood of . It follows that the open sets and meet the desired conditions.    "
},
{
  "id": "cor_onepoint_compact",
  "level": "2",
  "url": "s_locally.html#cor_onepoint_compact",
  "type": "Corollary",
  "number": "1.17.6",
  "title": "One-point compactification.",
  "body": " One-point compactification   Let be locally compact Hausdorff.   If is not compact, then the inclusion map is a one-point compactification of , and is Hausdorff.    If is not compact, and is a one-point compactification where is Hausdorff, then there exists a unique homeomorphism such that .      "
},
{
  "id": "cor_locallycompact_char",
  "level": "2",
  "url": "s_locally.html#cor_locallycompact_char",
  "type": "Corollary",
  "number": "1.17.7",
  "title": "Locally compact Hausdorff spaces.",
  "body": " Locally compact Hausdorff spaces   Let be a Hausdorff space. The following statements are equivalent.    is locally compact.     is a homeomorphic to an open subspace of a compact Hausdorff space.       That (1) implies (2) follows from . For the converse, assume is homeomorphic to the open set , where is compact and Hausdorff. We may use the homeomorphism to identify with : thus we think of as an open subspace of . Now, since is compact, it is locally compact. Hence by , given any we can find an open such that and is compact. This shows that every has a compact neighborhood , as desired.   "
},
{
  "id": "eg_onepoint_compact_in_R",
  "level": "2",
  "url": "s_locally.html#eg_onepoint_compact_in_R",
  "type": "Example",
  "number": "1.17.8",
  "title": "One-point compactification of <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " One-point compactification of   We consider with the standard topology.   Produce a one-point compactification of where is a familiar space.    Produce a one-point compactification of where is a familiar space.    Use (2) to identify the one-point compactification of as a subspace of a familiar space.          The map defined as is an open embedding of onto . Thus this is a realization of the one-point compactification of .    Since is a homeomorphism, the map defined as the composition is an open embedding of onto , providing a realization of the one-point compactification of . Note that we have by definition .    Since the inclusion is a closed embedding, the restriction is an embedding (neither open nor closed) of into . Restricting the codomain to the closed (hence compact) subset we get a one-point compactification .      "
},
{
  "id": "top_eg_stereographic_projection",
  "level": "2",
  "url": "s_locally.html#top_eg_stereographic_projection",
  "type": "Topological specimen",
  "number": "17",
  "title": "Stereographic projection.",
  "body": " Stereographic projection  Let , the north pole of . Given any the line passing through and intersects the -plane in the unique point . The corresponding map can easily be shown to be a homeomorphism, with inverse . The map is called the stereographic projection onto . The open embedding realizes as the one-point compactification of .  Not surprisingly, this result generalizes easily to . There is a homeomorphism from to mapping to , whose inverse realizes as the one-point compactification of .  "
},
{
  "id": "s_countability_axioms",
  "level": "1",
  "url": "s_countability_axioms.html",
  "type": "Section",
  "number": "1.18",
  "title": "Countability axioms",
  "body": " Countability axioms  We introduced the notions of first countability and second countability during our discussion of compactness in metric spaces ( ). In this section we will look more closely at these and related properties.   Countability properties  Since we will be dealing with countability questions, it will be useful to record some important countability properties. You may use the following facts in your arguments without any justification.   A countable union of countable sets is countable.    A finite product of countable sets is countable.    If is countable, then the set of all finite subsets of is countable.    If is countable and is a surjection, then is countable.       Metric spaces are first countable  Let be a metric space. For any the collection is a countable local basis at . Thus is first countable.    First countable cofinite spaces   Let be a topological space with the cofinite topology. Prove: is first countable if and only if is countable.    Assume is countable. A nonempty open set of is of the form for some . It follows that the nonempty open sets of are in bijection with the set of all finite subsets of . By , this collection is countable. Thus has countably many open sets. Thus for any the set of all open sets containing is countable.  Assume is first countable. Take any and let be a countable local basis at . By definition we have finite for each , in which case is countable, being a countable union of countable sets. I claim , proving is countable. Indeed, take any . The set is an open set containing . Thus we have for some , in which case , or equivalently, , as desired.     Sequentially closed\/continuous   Let and be topological spaces.  Given a set , its sequential closure is the set of all for which there is a a sequence of elements of with . The set is sequentially closed if .  A function is sequentially continuous if it maps convergent sequences to convergent sequences: , if in , then in .     First countable and sequential properties   Let be a first countable space.   For any there is a nested countable local basis : , for all we have .    A set is closed if and only if it is sequentially closed.    A function is continuous if and only if it is sequentially continuous.          Given let be a countable local basis at . For each , define . (Note that since .) We have for all . Furthermore, given any open , we have . Thus forms a nested local basis.    First, it is easy to see that in any space we have . Thus in any topological space, if is closed, then we have , and thus is sequentially closed. Now assume is sequentially closed, and take . Using (1), we pick a a local basis at that is nested: , for all , . Now, for each pick an element . We have : indeed, if is any open set containing , then for some , in which case for all . Since is sequentially compact, we have . Thus , and we conclude that .    The forward direction is true in any topological space, as we have shown before. Let's prove the reverse direction. Assume is sequentially continuous. Fix any and open set containing . Assume by way of contradiction that there is no open set such that . Let be a nested local basis at . Since for all , we can find an such that . The sequence converges to : indeed, given any open containing there is an such that . Since the local basis is nested, we have for all , and hence for all . However, it is clear that does not converge to , since by construction no lies in the open set . This contradicts the fact that is sequentially compact. We conclude that is continuous.       We now re-introduce second countability along with two related notions.   Second countable, Lindelöf, separable   Let be a topological space. A set is dense if .    is second countable if it has a countable basis.     is Lindelöf if every open cover of has a countable subcover.     is separable if it has a countable dense subset.        The four countability axioms  We will call the properties of being first countable, second countable, Lindelöf, and separable the four countability axioms .    Second countable: strongest countability axiom   Let be a topological space.   If is second countable, then is first countable, Lindelöf, and separable.    If is a metric space, then being second countable, Lindelöf, and separable are all equivalent properties.          Assume is second countable and let be a countable basis.  For each , the set is easily seen to be a countable local basis at . This proves is first countable.  Let be an open cover of . Let . Since is countable, so is . Write . For each , pick an index such that . We claim that , and thus that a countable subcovering of . Indeed, for any , we have for some and . It follows that for some , in which case , as desired.    This is a (classic) homework exercise. Enjoy!        Implications among countability axioms  Without further assumptions on the space , the implications described in (1) of are the only ones guaranteed. Figure summarizes this situation. By contrast indicates the logical relations between the countability axioms when is a metric space. Notice that even in this case, first countable is strictly weaker than second countable.   Implications among countability axioms   Implications among countability axioms      Countability axioms in metric spaces   Countability axioms in metric spaces       is second countable   Prove that is second countable with respect to the Euclidean topology.    First observe that the set of all -tuples is countable. According to (2) of it would suffice to show that is dense in . We take the hard route and show directly that has a countable basis.  For each , let . The set , being a countable union of countable sets, is countable. I claim it is a basis. It suffices to show that given any and , we can find a such that . To this end pick such that and pick such that , so that . It follows that , as desired.     is not metrizable   Let . Show that is first countable, Lindelöf, separable, but not second countable. Conclude that is not metrizable.    For each , the set forms a countable local basis at . Thus is first countable.  It is easy to see further that is dense with respect to the left limit topology.  To see that is not second countable, consider any basis of . For each , we can find a basis element such that . Note that since for such a , the map defines an injection of into : . This proves that is uncountable.  At this point, by (2) of we know that is not metrizable, since it is separable but not second countable. See Munkres for a proof that is also Lindelöf.     First\/second countable: subspaces, images, and products      If is first countable (resp. second countable) and is a subspace, then is first countable (resp. second countable).    If is open, continuous and surjective, then if is first countable (resp. second countable), is first countable (resp. second countable).    Let be a product of topological spaces. The following statements are equivalent.    is first countable (resp. second countable).     is first countable (resp. second countable) for all and the set of all such that does not have the trivial topology is countable.   As a result, a countable product of first countable (resp. second countable) spaces is first countable.          This is an easy consequence of the fact that for any basis (or local basis) of the corresponding set is a basis (or local basis) in .    It is easy to see that such a function maps bases (or local bases) in to bases (or local bases) in .    Homework exercise. Enjoy!        First countable: continuous image   Give an example of a first countable space and continuous function such that is not first countable.    Consider the identity function , where the codomain is given the cofinite topology and the domain is given the standard topology. (This is continuous since the standard topology is finer than the cofinite topology.) Since the standard topology is metrizable, the domain is first countable. On the other hand, we saw in that any uncountable set is not first countable with respect to the cofinite topology.     is not metrizable.  Let . Show that is not metrizable.   According to (3) of an uncountable product of nontrivial spaces is not first countable. Thus is not first countable, in which case it is also not metrizable.   "
},
{
  "id": "rm_countable",
  "level": "2",
  "url": "s_countability_axioms.html#rm_countable",
  "type": "Remark",
  "number": "1.18.1",
  "title": "Countability properties.",
  "body": " Countability properties  Since we will be dealing with countability questions, it will be useful to record some important countability properties. You may use the following facts in your arguments without any justification.   A countable union of countable sets is countable.    A finite product of countable sets is countable.    If is countable, then the set of all finite subsets of is countable.    If is countable and is a surjection, then is countable.     "
},
{
  "id": "eg_metric_first_countable",
  "level": "2",
  "url": "s_countability_axioms.html#eg_metric_first_countable",
  "type": "Example",
  "number": "1.18.2",
  "title": "Metric spaces are first countable.",
  "body": " Metric spaces are first countable  Let be a metric space. For any the collection is a countable local basis at . Thus is first countable.  "
},
{
  "id": "eg_cofinite_first_countable",
  "level": "2",
  "url": "s_countability_axioms.html#eg_cofinite_first_countable",
  "type": "Example",
  "number": "1.18.3",
  "title": "First countable cofinite spaces.",
  "body": " First countable cofinite spaces   Let be a topological space with the cofinite topology. Prove: is first countable if and only if is countable.    Assume is countable. A nonempty open set of is of the form for some . It follows that the nonempty open sets of are in bijection with the set of all finite subsets of . By , this collection is countable. Thus has countably many open sets. Thus for any the set of all open sets containing is countable.  Assume is first countable. Take any and let be a countable local basis at . By definition we have finite for each , in which case is countable, being a countable union of countable sets. I claim , proving is countable. Indeed, take any . The set is an open set containing . Thus we have for some , in which case , or equivalently, , as desired.   "
},
{
  "id": "d_sequentially_closed_continuous",
  "level": "2",
  "url": "s_countability_axioms.html#d_sequentially_closed_continuous",
  "type": "Definition",
  "number": "1.18.4",
  "title": "Sequentially closed\/continuous.",
  "body": " Sequentially closed\/continuous   Let and be topological spaces.  Given a set , its sequential closure is the set of all for which there is a a sequence of elements of with . The set is sequentially closed if .  A function is sequentially continuous if it maps convergent sequences to convergent sequences: , if in , then in .   "
},
{
  "id": "th_first_countable_sequences",
  "level": "2",
  "url": "s_countability_axioms.html#th_first_countable_sequences",
  "type": "Theorem",
  "number": "1.18.5",
  "title": "First countable and sequential properties.",
  "body": " First countable and sequential properties   Let be a first countable space.   For any there is a nested countable local basis : , for all we have .    A set is closed if and only if it is sequentially closed.    A function is continuous if and only if it is sequentially continuous.          Given let be a countable local basis at . For each , define . (Note that since .) We have for all . Furthermore, given any open , we have . Thus forms a nested local basis.    First, it is easy to see that in any space we have . Thus in any topological space, if is closed, then we have , and thus is sequentially closed. Now assume is sequentially closed, and take . Using (1), we pick a a local basis at that is nested: , for all , . Now, for each pick an element . We have : indeed, if is any open set containing , then for some , in which case for all . Since is sequentially compact, we have . Thus , and we conclude that .    The forward direction is true in any topological space, as we have shown before. Let's prove the reverse direction. Assume is sequentially continuous. Fix any and open set containing . Assume by way of contradiction that there is no open set such that . Let be a nested local basis at . Since for all , we can find an such that . The sequence converges to : indeed, given any open containing there is an such that . Since the local basis is nested, we have for all , and hence for all . However, it is clear that does not converge to , since by construction no lies in the open set . This contradicts the fact that is sequentially compact. We conclude that is continuous.      "
},
{
  "id": "d_second_countable_lind_separable",
  "level": "2",
  "url": "s_countability_axioms.html#d_second_countable_lind_separable",
  "type": "Definition",
  "number": "1.18.6",
  "title": "Second countable, Lindelöf, separable.",
  "body": " Second countable, Lindelöf, separable   Let be a topological space. A set is dense if .    is second countable if it has a countable basis.     is Lindelöf if every open cover of has a countable subcover.     is separable if it has a countable dense subset.      "
},
{
  "id": "rm_4_countable_axioms",
  "level": "2",
  "url": "s_countability_axioms.html#rm_4_countable_axioms",
  "type": "Remark",
  "number": "1.18.7",
  "title": "The four countability axioms.",
  "body": " The four countability axioms  We will call the properties of being first countable, second countable, Lindelöf, and separable the four countability axioms .  "
},
{
  "id": "th_second_countable",
  "level": "2",
  "url": "s_countability_axioms.html#th_second_countable",
  "type": "Theorem",
  "number": "1.18.8",
  "title": "Second countable: strongest countability axiom.",
  "body": " Second countable: strongest countability axiom   Let be a topological space.   If is second countable, then is first countable, Lindelöf, and separable.    If is a metric space, then being second countable, Lindelöf, and separable are all equivalent properties.          Assume is second countable and let be a countable basis.  For each , the set is easily seen to be a countable local basis at . This proves is first countable.  Let be an open cover of . Let . Since is countable, so is . Write . For each , pick an index such that . We claim that , and thus that a countable subcovering of . Indeed, for any , we have for some and . It follows that for some , in which case , as desired.    This is a (classic) homework exercise. Enjoy!      "
},
{
  "id": "s_countability_axioms-12",
  "level": "2",
  "url": "s_countability_axioms.html#s_countability_axioms-12",
  "type": "Remark",
  "number": "1.18.9",
  "title": "Implications among countability axioms.",
  "body": " Implications among countability axioms  Without further assumptions on the space , the implications described in (1) of are the only ones guaranteed. Figure summarizes this situation. By contrast indicates the logical relations between the countability axioms when is a metric space. Notice that even in this case, first countable is strictly weaker than second countable.   Implications among countability axioms   Implications among countability axioms      Countability axioms in metric spaces   Countability axioms in metric spaces     "
},
{
  "id": "eg_Euclidean_second_countable",
  "level": "2",
  "url": "s_countability_axioms.html#eg_Euclidean_second_countable",
  "type": "Example",
  "number": "1.18.12",
  "title": "<span class=\"process-math\">\\(\\R^n\\)<\/span> is second countable.",
  "body": " is second countable   Prove that is second countable with respect to the Euclidean topology.    First observe that the set of all -tuples is countable. According to (2) of it would suffice to show that is dense in . We take the hard route and show directly that has a countable basis.  For each , let . The set , being a countable union of countable sets, is countable. I claim it is a basis. It suffices to show that given any and , we can find a such that . To this end pick such that and pick such that , so that . It follows that , as desired.   "
},
{
  "id": "eg_Leftlimit_nonmetrizable",
  "level": "2",
  "url": "s_countability_axioms.html#eg_Leftlimit_nonmetrizable",
  "type": "Example",
  "number": "1.18.13",
  "title": "<span class=\"process-math\">\\(\\R_\\ell\\)<\/span> is not metrizable.",
  "body": " is not metrizable   Let . Show that is first countable, Lindelöf, separable, but not second countable. Conclude that is not metrizable.    For each , the set forms a countable local basis at . Thus is first countable.  It is easy to see further that is dense with respect to the left limit topology.  To see that is not second countable, consider any basis of . For each , we can find a basis element such that . Note that since for such a , the map defines an injection of into : . This proves that is uncountable.  At this point, by (2) of we know that is not metrizable, since it is separable but not second countable. See Munkres for a proof that is also Lindelöf.   "
},
{
  "id": "th_first_second_countable_subspace_product",
  "level": "2",
  "url": "s_countability_axioms.html#th_first_second_countable_subspace_product",
  "type": "Theorem",
  "number": "1.18.14",
  "title": "First\/second countable: subspaces, images, and products.",
  "body": " First\/second countable: subspaces, images, and products      If is first countable (resp. second countable) and is a subspace, then is first countable (resp. second countable).    If is open, continuous and surjective, then if is first countable (resp. second countable), is first countable (resp. second countable).    Let be a product of topological spaces. The following statements are equivalent.    is first countable (resp. second countable).     is first countable (resp. second countable) for all and the set of all such that does not have the trivial topology is countable.   As a result, a countable product of first countable (resp. second countable) spaces is first countable.          This is an easy consequence of the fact that for any basis (or local basis) of the corresponding set is a basis (or local basis) in .    It is easy to see that such a function maps bases (or local bases) in to bases (or local bases) in .    Homework exercise. Enjoy!      "
},
{
  "id": "eg_first_countable_continuous_image",
  "level": "2",
  "url": "s_countability_axioms.html#eg_first_countable_continuous_image",
  "type": "Example",
  "number": "1.18.15",
  "title": "First countable: continuous image.",
  "body": " First countable: continuous image   Give an example of a first countable space and continuous function such that is not first countable.    Consider the identity function , where the codomain is given the cofinite topology and the domain is given the standard topology. (This is continuous since the standard topology is finer than the cofinite topology.) Since the standard topology is metrizable, the domain is first countable. On the other hand, we saw in that any uncountable set is not first countable with respect to the cofinite topology.   "
},
{
  "id": "eg_uncountable_product",
  "level": "2",
  "url": "s_countability_axioms.html#eg_uncountable_product",
  "type": "Example",
  "number": "1.18.16",
  "title": "<span class=\"process-math\">\\(\\R^\\R\\)<\/span> is not metrizable..",
  "body": " is not metrizable.  Let . Show that is not metrizable.   According to (3) of an uncountable product of nontrivial spaces is not first countable. Thus is not first countable, in which case it is also not metrizable.  "
},
{
  "id": "s_regular",
  "level": "1",
  "url": "s_regular.html",
  "type": "Section",
  "number": "1.19",
  "title": "Regular and normal spaces",
  "body": " Regular and normal spaces   Separated by open sets   Let be a topological space. Subsets are separated by open sets if there exist disjoint open sets such that and .     Regular and normal spaces   Let be a topological space.    is regular if is , and given any closed set and any , the sets and can be separated by open sets.     is normal if is , and any two disjoint closed sets of can be separated by open sets.        Separation axioms  The properties of being , Hausdorff, regular, or normal are called separation axioms as they articulate how various subsets can be separated by open sets. Below you find the descriptions of these properties using the Trennungsaxiom schema. A further remark about the use of regular and normal in the literature: some texts do not include the condition in these notions, and describe the properties we define as regular Hausdorff and normal regular . There is considerably less ambiguity in the literature when using the descriptions, but you should still be careful.    Trennungsaxiom implications  It is easy to see that . Furthermore, your argument for the first two implications will reveal why the condition is needed.    Elementary examples      Discrete spaces are regular and normal.    An infinite space with the cofinite topology is neither regular nor normal.       (1) is clear since all sets are both open and closed. (2) follows from the fact that in this space any two nonempty open sets intersect nontrivially.     Metric spaces are normal   If is a metric space, then is normal.    Let be disjoint closed subsets of . For each we can find an such that . Similarly for each we can find an such that . I claim the open sets are disjoint, proving and are separated by open sets. Indeed if , then for some and . Without loss of generality we may assume that . But then we would have . This is a contradiction since we assumed .     is not regular   Prove: is Hausdorff, but not regular.    Since the -topology is finer than the standard topology on , is Hausdorff. To see that it is not regular, recall that is closed. I'll show that we cannot separate and with open sets. Indeed, suppose we have open disjoint sets containing respectively. Since is open, it must contain an open basis element containing ; and since , this basis element can be chosen of the form . Now choose such that . Since we can find a basis element of the form that is contained in . Furthermore, shrinking if necessary, we can assume that . But then clearly , and hence also . Contradiction!     Regular and normal equivalences   Let be a -space.    is regular if and only if for every and every open set containing , there is an open set satisfying .     is normal if and only if for every closed subset and open set containing , there is an open set satisfying .          First, assume is regular. Given and as described, we can separate and the closed set by open sets and . It follows that : indeed, given any , the open set contains and does not intersect with .  Conversely, assume for all and open sets we can find an open set satisfying . Given any closed set and element , letting , we see that there is an open set satisfying . The open sets and are then easily seen to separate and .    This proof is very similar to the last. Essenially you need only replace with a closed set throughout.        Locally compact implies regular   If is locally compact Hausdorff, then is regular.    This is an easy consequence of and .     Locally compact and non-normal  Yes, there are examples of locally compact Hausdorff spaces that are not normal. They are not particularly easy to build, however. Look it up!    is regular   Prove: is regular.    Since has a finer topology than , it is . We will use the equivalence (1) from . Given any and open set , we can find such that . But is closed! (Prove this.) Thus we have found an open containing such that .     Basis of clopen sets  The argument from is easily generalized to show that any -space that has a basis consisting of sets that are both open and closed ( , clopen sets) is regular.    Regularity: subspace and product properties      Subspaces of regular spaces are regular.    Products of regular spaces are regular.          Assume is a subspace of the regular space . We know already that subspaces of -spaces are , so is . Next take any and any set not containing that is closed in . We have for some closed set . Since and is regular, we can find disjoint open sets that separate and in . The disjoint open (in ) sets and are then a separation of and in .    We use (1) from . Given and open set containing , choose a basis element of the form containing . Since each is regular, we can find open sets satisfying . Letting , we have .        Interestingly, neither of the statements of are true if regular is replaced with normal . It is worthwhile to examine what goes wrong in our arguments above if the element is replaced with a closed set throughout.    is normal   Prove: is normal.    Let be disjoint closed subsets of . We can find open coverings satisfying for all . First observe that for all . Indeed, otherwise we'd have , in which case either or : both are impossible since and . We conclude that , proving that and can be separated by open sets.     is not normal   Prove: is not normal.    See Munkres for the full proof. I'll content myself with a discussion of some of the key elements. First, let . This set is closed in , and hence closed in , since the left limit product topology is finer than the standard topology. Next, as we saw on a previous homework, is discrete as a subspace of : if follows that every subset of , being itself closed in , is closed in , using transitivity. In particular the two sets . By what we said above, the disjoint sets and are closed in , but as it turns out you cannot separate them by open sets. The proof is not terribly difficult, but will seem somewhat convoluted without knowing about the Baire category theorem. As such, I omit it. (Munkres doesn't use this approach, choosing instead a proof by contradiction, but he outlines a proof in one of his exercises.)     Regular+second countable normal   If is regular and second countable, then is normal.    Assume is regular and second countable. Let be a countable basis for . Let and be disjoint closed sets. By regularity, for each we can find disjoint open sets containing and respectively. Since is a basis, we can find a basis element such that . The set of all such is a countable subset of , giving rise to a countable cover satisfying for all . Similarly, we can construct an open covering satisfying for all . The corresponding open sets are not necessarily disjoint. However the sets and , where , still cover and respectively, are still open, and are disjoint.     Compact+Hausdorff normal   If is a compact Hausdorff space, then is normal.    Since is compact Hausdorff, it is locally compact Hausdorff, and hence regular by . We use the equivalent condition of normality from . To this end, let be closed, and let be any open set containing . Since is regular, for all we can find an open set containing such that . We have . Since is compact and is closed, is compact. Hence there is a finite subcovering . We have , as desired.    "
},
{
  "id": "d_separated",
  "level": "2",
  "url": "s_regular.html#d_separated",
  "type": "Definition",
  "number": "1.19.1",
  "title": "Separated by open sets.",
  "body": " Separated by open sets   Let be a topological space. Subsets are separated by open sets if there exist disjoint open sets such that and .   "
},
{
  "id": "d_regular_normal",
  "level": "2",
  "url": "s_regular.html#d_regular_normal",
  "type": "Definition",
  "number": "1.19.2",
  "title": "Regular and normal spaces.",
  "body": " Regular and normal spaces   Let be a topological space.    is regular if is , and given any closed set and any , the sets and can be separated by open sets.     is normal if is , and any two disjoint closed sets of can be separated by open sets.      "
},
{
  "id": "rm_separated",
  "level": "2",
  "url": "s_regular.html#rm_separated",
  "type": "Remark",
  "number": "1.19.3",
  "title": "Separation axioms.",
  "body": " Separation axioms  The properties of being , Hausdorff, regular, or normal are called separation axioms as they articulate how various subsets can be separated by open sets. Below you find the descriptions of these properties using the Trennungsaxiom schema. A further remark about the use of regular and normal in the literature: some texts do not include the condition in these notions, and describe the properties we define as regular Hausdorff and normal regular . There is considerably less ambiguity in the literature when using the descriptions, but you should still be careful.  "
},
{
  "id": "s_regular-5",
  "level": "2",
  "url": "s_regular.html#s_regular-5",
  "type": "Remark",
  "number": "1.19.4",
  "title": "Trennungsaxiom implications.",
  "body": " Trennungsaxiom implications  It is easy to see that . Furthermore, your argument for the first two implications will reveal why the condition is needed.  "
},
{
  "id": "eg_regular",
  "level": "2",
  "url": "s_regular.html#eg_regular",
  "type": "Example",
  "number": "1.19.5",
  "title": "Elementary examples.",
  "body": " Elementary examples      Discrete spaces are regular and normal.    An infinite space with the cofinite topology is neither regular nor normal.       (1) is clear since all sets are both open and closed. (2) follows from the fact that in this space any two nonempty open sets intersect nontrivially.   "
},
{
  "id": "th_metrizable_implies_normal",
  "level": "2",
  "url": "s_regular.html#th_metrizable_implies_normal",
  "type": "Theorem",
  "number": "1.19.6",
  "title": "Metric spaces are normal.",
  "body": " Metric spaces are normal   If is a metric space, then is normal.    Let be disjoint closed subsets of . For each we can find an such that . Similarly for each we can find an such that . I claim the open sets are disjoint, proving and are separated by open sets. Indeed if , then for some and . Without loss of generality we may assume that . But then we would have . This is a contradiction since we assumed .   "
},
{
  "id": "eg_RK_not_regular",
  "level": "2",
  "url": "s_regular.html#eg_RK_not_regular",
  "type": "Example",
  "number": "1.19.7",
  "title": "<span class=\"process-math\">\\(\\R_K\\)<\/span> is not regular.",
  "body": " is not regular   Prove: is Hausdorff, but not regular.    Since the -topology is finer than the standard topology on , is Hausdorff. To see that it is not regular, recall that is closed. I'll show that we cannot separate and with open sets. Indeed, suppose we have open disjoint sets containing respectively. Since is open, it must contain an open basis element containing ; and since , this basis element can be chosen of the form . Now choose such that . Since we can find a basis element of the form that is contained in . Furthermore, shrinking if necessary, we can assume that . But then clearly , and hence also . Contradiction!   "
},
{
  "id": "th_regular_normal_equivalence",
  "level": "2",
  "url": "s_regular.html#th_regular_normal_equivalence",
  "type": "Theorem",
  "number": "1.19.8",
  "title": "Regular and normal equivalences.",
  "body": " Regular and normal equivalences   Let be a -space.    is regular if and only if for every and every open set containing , there is an open set satisfying .     is normal if and only if for every closed subset and open set containing , there is an open set satisfying .          First, assume is regular. Given and as described, we can separate and the closed set by open sets and . It follows that : indeed, given any , the open set contains and does not intersect with .  Conversely, assume for all and open sets we can find an open set satisfying . Given any closed set and element , letting , we see that there is an open set satisfying . The open sets and are then easily seen to separate and .    This proof is very similar to the last. Essenially you need only replace with a closed set throughout.      "
},
{
  "id": "th_locally_compact_regular",
  "level": "2",
  "url": "s_regular.html#th_locally_compact_regular",
  "type": "Theorem",
  "number": "1.19.9",
  "title": "Locally compact implies regular.",
  "body": " Locally compact implies regular   If is locally compact Hausdorff, then is regular.    This is an easy consequence of and .   "
},
{
  "id": "s_regular-11",
  "level": "2",
  "url": "s_regular.html#s_regular-11",
  "type": "Remark",
  "number": "1.19.10",
  "title": "Locally compact and non-normal.",
  "body": " Locally compact and non-normal  Yes, there are examples of locally compact Hausdorff spaces that are not normal. They are not particularly easy to build, however. Look it up!  "
},
{
  "id": "eg_Rl_regular",
  "level": "2",
  "url": "s_regular.html#eg_Rl_regular",
  "type": "Example",
  "number": "1.19.11",
  "title": "<span class=\"process-math\">\\(\\R_\\ell\\)<\/span> is regular.",
  "body": " is regular   Prove: is regular.    Since has a finer topology than , it is . We will use the equivalence (1) from . Given any and open set , we can find such that . But is closed! (Prove this.) Thus we have found an open containing such that .   "
},
{
  "id": "rm_regular_open_closed_basis",
  "level": "2",
  "url": "s_regular.html#rm_regular_open_closed_basis",
  "type": "Remark",
  "number": "1.19.12",
  "title": "Basis of clopen sets.",
  "body": " Basis of clopen sets  The argument from is easily generalized to show that any -space that has a basis consisting of sets that are both open and closed ( , clopen sets) is regular.  "
},
{
  "id": "th_regular_props",
  "level": "2",
  "url": "s_regular.html#th_regular_props",
  "type": "Theorem",
  "number": "1.19.13",
  "title": "Regularity: subspace and product properties.",
  "body": " Regularity: subspace and product properties      Subspaces of regular spaces are regular.    Products of regular spaces are regular.          Assume is a subspace of the regular space . We know already that subspaces of -spaces are , so is . Next take any and any set not containing that is closed in . We have for some closed set . Since and is regular, we can find disjoint open sets that separate and in . The disjoint open (in ) sets and are then a separation of and in .    We use (1) from . Given and open set containing , choose a basis element of the form containing . Since each is regular, we can find open sets satisfying . Letting , we have .      "
},
{
  "id": "s_regular-15",
  "level": "2",
  "url": "s_regular.html#s_regular-15",
  "type": "Remark",
  "number": "1.19.14",
  "title": "",
  "body": " Interestingly, neither of the statements of are true if regular is replaced with normal . It is worthwhile to examine what goes wrong in our arguments above if the element is replaced with a closed set throughout.  "
},
{
  "id": "eg_Rl_normal",
  "level": "2",
  "url": "s_regular.html#eg_Rl_normal",
  "type": "Example",
  "number": "1.19.15",
  "title": "<span class=\"process-math\">\\(\\R_\\ell\\)<\/span> is normal.",
  "body": " is normal   Prove: is normal.    Let be disjoint closed subsets of . We can find open coverings satisfying for all . First observe that for all . Indeed, otherwise we'd have , in which case either or : both are impossible since and . We conclude that , proving that and can be separated by open sets.   "
},
{
  "id": "s_regular-17",
  "level": "2",
  "url": "s_regular.html#s_regular-17",
  "type": "Example",
  "number": "1.19.16",
  "title": "<span class=\"process-math\">\\(R_\\ell\\times R_\\ell\\)<\/span> is not normal.",
  "body": " is not normal   Prove: is not normal.    See Munkres for the full proof. I'll content myself with a discussion of some of the key elements. First, let . This set is closed in , and hence closed in , since the left limit product topology is finer than the standard topology. Next, as we saw on a previous homework, is discrete as a subspace of : if follows that every subset of , being itself closed in , is closed in , using transitivity. In particular the two sets . By what we said above, the disjoint sets and are closed in , but as it turns out you cannot separate them by open sets. The proof is not terribly difficult, but will seem somewhat convoluted without knowing about the Baire category theorem. As such, I omit it. (Munkres doesn't use this approach, choosing instead a proof by contradiction, but he outlines a proof in one of his exercises.)   "
},
{
  "id": "th_regular_separable_normal",
  "level": "2",
  "url": "s_regular.html#th_regular_separable_normal",
  "type": "Theorem",
  "number": "1.19.17",
  "title": "Regular+second countable <span class=\"process-math\">\\(\\implies\\)<\/span> normal.",
  "body": " Regular+second countable normal   If is regular and second countable, then is normal.    Assume is regular and second countable. Let be a countable basis for . Let and be disjoint closed sets. By regularity, for each we can find disjoint open sets containing and respectively. Since is a basis, we can find a basis element such that . The set of all such is a countable subset of , giving rise to a countable cover satisfying for all . Similarly, we can construct an open covering satisfying for all . The corresponding open sets are not necessarily disjoint. However the sets and , where , still cover and respectively, are still open, and are disjoint.   "
},
{
  "id": "th_compact_Hausdorff_normal",
  "level": "2",
  "url": "s_regular.html#th_compact_Hausdorff_normal",
  "type": "Theorem",
  "number": "1.19.18",
  "title": "Compact+Hausdorff <span class=\"process-math\">\\(\\implies\\)<\/span> normal.",
  "body": " Compact+Hausdorff normal   If is a compact Hausdorff space, then is normal.    Since is compact Hausdorff, it is locally compact Hausdorff, and hence regular by . We use the equivalent condition of normality from . To this end, let be closed, and let be any open set containing . Since is regular, for all we can find an open set containing such that . We have . Since is compact and is closed, is compact. Hence there is a finite subcovering . We have , as desired.   "
},
{
  "id": "s_Urysohn_lemma",
  "level": "1",
  "url": "s_Urysohn_lemma.html",
  "type": "Section",
  "number": "1.20",
  "title": "Urysohn lemma",
  "body": " Urysohn lemma   Urysohn lemma   Let be a normal space. Given two nonempty disjoint closed sets and there is a continuous function such that and .  It follows easily that the result is still true if we replace the interval with any closed interval .    It would be difficult to improve upon Munkres' exposition of this. I give essentially a full proof below nonetheless.   Step 1: construction of open sets  The first crucial step in the proof is to build a collection of open sets satisfying if . This is done by first picking an enumeration of where for convenience and . We use the enumeration to define open sets for each recursively as follows. Set . Since , by we can find an open containing such that . Now take any and assume by induction that we constructed open sets satisfying the desired inclusion condition. Write where and are the immediate predecessor and successor, respectively, of among the set . By induction we have . Pick to be any open set satisfying . Lastly define for all and for all . It is easy to see that thus defined, our collection satisfies the desired inclusion condition.    Step 2: definition of and continuity  Define as . Some easy properties of :    for all .     for all .     for all .   We prove continuity by showing that is continuous at each . Given and open set containing , choose rational numbers satisfying . I claim is an open set containing satisfying . First, it is clear that is open, and it follows easily from the elementary properties of quoted above that . Next, given any , since , we have , and since , we have . This concludes the proof.      Separated by a continuous function   Let be a topological space. Subsets are separated by a continuous function if there is a continuous function such that and .     Separation in normal spaces  If the closed sets are separated by the continuous function , they are separated by the open sets and . The Urysohn lemma tells us that in normal spaces the two notions are equivalent!   We can explore this idea of separated by a continuous function in relation to some of the other Trennnungsaxiome . For example, taking the regularity axiom ( ) and replacing the separated by open sets condition with a separated by a continuous function condition, we obtain the notion of complete regularity .   Completely regular   A -space is completely regular (or ) if for any closed set and element , there is a continuous function , such that and .     Complete regularity  With respect to regularity, separation by a continuous function is truly a stronger notion: , there are spaces that are regular but not completely regular. This is in contrast to the situation with normality: by Urysohn's lemma a space is normal if and only if disjoint closed sets are separated by a continuous function. Note also that by Urysohn's lemma, any normal space is completely regular. Thus adding to our list of Trennungsaxiome we still have a list of properties that satisfies if .    The notion of complete regularity strikes a nice balance between regularity and normality. In particular, it is stronger than regularity, but still behaves well with respect to subspaces and products.   Complete regularity: subspace and product properties      Subspaces of completely regular spaces are completely regular.    Products of completely regular spaces are completely regular.       The proof of (1) is elementary. (See text.) The proof of (2) is more interesting. Assume is a collection of completely regular spaces, and let . Let be a closed set, and let be any element not contained in . Since is open, we can find a base open neighborhood of of the form . For each let be a continuous function satisfying . The function is continuous (product of continuous functions) and satisfies and .    "
},
{
  "id": "th_Urysohn_lemma",
  "level": "2",
  "url": "s_Urysohn_lemma.html#th_Urysohn_lemma",
  "type": "Theorem",
  "number": "1.20.1",
  "title": "Urysohn lemma.",
  "body": " Urysohn lemma   Let be a normal space. Given two nonempty disjoint closed sets and there is a continuous function such that and .  It follows easily that the result is still true if we replace the interval with any closed interval .    It would be difficult to improve upon Munkres' exposition of this. I give essentially a full proof below nonetheless.   Step 1: construction of open sets  The first crucial step in the proof is to build a collection of open sets satisfying if . This is done by first picking an enumeration of where for convenience and . We use the enumeration to define open sets for each recursively as follows. Set . Since , by we can find an open containing such that . Now take any and assume by induction that we constructed open sets satisfying the desired inclusion condition. Write where and are the immediate predecessor and successor, respectively, of among the set . By induction we have . Pick to be any open set satisfying . Lastly define for all and for all . It is easy to see that thus defined, our collection satisfies the desired inclusion condition.    Step 2: definition of and continuity  Define as . Some easy properties of :    for all .     for all .     for all .   We prove continuity by showing that is continuous at each . Given and open set containing , choose rational numbers satisfying . I claim is an open set containing satisfying . First, it is clear that is open, and it follows easily from the elementary properties of quoted above that . Next, given any , since , we have , and since , we have . This concludes the proof.    "
},
{
  "id": "d_separated_continuous_function",
  "level": "2",
  "url": "s_Urysohn_lemma.html#d_separated_continuous_function",
  "type": "Definition",
  "number": "1.20.2",
  "title": "Separated by a continuous function.",
  "body": " Separated by a continuous function   Let be a topological space. Subsets are separated by a continuous function if there is a continuous function such that and .   "
},
{
  "id": "rm_Urysohn_lemma",
  "level": "2",
  "url": "s_Urysohn_lemma.html#rm_Urysohn_lemma",
  "type": "Remark",
  "number": "1.20.3",
  "title": "Separation in normal spaces.",
  "body": " Separation in normal spaces  If the closed sets are separated by the continuous function , they are separated by the open sets and . The Urysohn lemma tells us that in normal spaces the two notions are equivalent!  "
},
{
  "id": "d_completely_regular_normal",
  "level": "2",
  "url": "s_Urysohn_lemma.html#d_completely_regular_normal",
  "type": "Definition",
  "number": "1.20.4",
  "title": "Completely regular.",
  "body": " Completely regular   A -space is completely regular (or ) if for any closed set and element , there is a continuous function , such that and .   "
},
{
  "id": "rm_complete_regularity",
  "level": "2",
  "url": "s_Urysohn_lemma.html#rm_complete_regularity",
  "type": "Remark",
  "number": "1.20.5",
  "title": "Complete regularity.",
  "body": " Complete regularity  With respect to regularity, separation by a continuous function is truly a stronger notion: , there are spaces that are regular but not completely regular. This is in contrast to the situation with normality: by Urysohn's lemma a space is normal if and only if disjoint closed sets are separated by a continuous function. Note also that by Urysohn's lemma, any normal space is completely regular. Thus adding to our list of Trennungsaxiome we still have a list of properties that satisfies if .   "
},
{
  "id": "th_complete_regularity",
  "level": "2",
  "url": "s_Urysohn_lemma.html#th_complete_regularity",
  "type": "Theorem",
  "number": "1.20.6",
  "title": "Complete regularity: subspace and product properties.",
  "body": " Complete regularity: subspace and product properties      Subspaces of completely regular spaces are completely regular.    Products of completely regular spaces are completely regular.       The proof of (1) is elementary. (See text.) The proof of (2) is more interesting. Assume is a collection of completely regular spaces, and let . Let be a closed set, and let be any element not contained in . Since is open, we can find a base open neighborhood of of the form . For each let be a continuous function satisfying . The function is continuous (product of continuous functions) and satisfies and .   "
},
{
  "id": "s_Urysohn_metrization",
  "level": "1",
  "url": "s_Urysohn_metrization.html",
  "type": "Section",
  "number": "1.21",
  "title": "Urysohn metrization theorem",
  "body": " Urysohn metrization theorem   Urysohn metrization theorem   If is a regular second countable space, then is metrizable.    The main step in the proof, one that uses , is the construction of a countable family of continuous functions satisfying the following property: for all and for all open sets containing , there is an such that and . It then follows from that the map defined as is an embedding into the metric space . Since subspaces of metric spaces are metric spaces, we conclude that is metrizable.  We now proceed with the construction. Let be a countable basis of . For all satisfying , let be a continuous function satisfying and : this guaranteed to exist by since , being regular and second countable, is normal. Since the collection is countable we can enumerate it as . Now, for any and any open set , we have for some . Since is regular, we can find a basis element such that . We have for some , , and , as desired.     Embedding theorem   Let be a -space. Given any collection of continuous functions satisfying the property that for all and for all open sets containing there is an such that and , the map defined as is an embedding into .     is injective  Since is , given any we can find an open set such that and . By assumption, there is some such that and . It follows that and hence that .    is continuous  This follows immediately from since each is continuous.    is embedding  Lastly, we prove that is an embedding mapping homeomorphically onto . Let be an open set containing an element , and let . Pick any such that and . Let be the projection map onto the -th coordinate, and define . Since is continuous and is open, the set is open in the subspace topology of . We claim that , proving that is an embedding. Since , we have . Similarly, if , then , from whence it follows that : otherwise we'd have .      Urysohn metrization theorem  Munkres gives an alternative proof that shows any regular second countable space can be embedded into with respect to the uniform metric. This argument is then generalized later to prove the Nagata-Smirnov metrization theorem, which states that is metrizable if and only if it is regular and has countable locally finite basis.     A space is completely regular if and only if it is homeomorphic to a subspace of for some set .    Implication: . Assume is completely regular. Recall that in particular this means is . Define to be the set of all pairs where and is an open neighborhood of . For each , let be a function satisfying and . (Such a function exists since is completely regular.) Now, for all and for all open sets containing , corresponding to the index we have the function which satisfies and . We conclude by that the map is an embedding of into , and thus that is homeomorphic to a subspace of .  Implication: . Since is completely regular, and since complete regularity is preserved under arbitrary products, the space is completely regular for any set . Furthermore, since complete regularity is inherited by subspaces, any subspace of is completely regular. Thus, if embeds into , then it is homeomorphic to a subspace of , and hence is completely regular.    "
},
{
  "id": "th_Urysohn_metrization",
  "level": "2",
  "url": "s_Urysohn_metrization.html#th_Urysohn_metrization",
  "type": "Theorem",
  "number": "1.21.1",
  "title": "Urysohn metrization theorem.",
  "body": " Urysohn metrization theorem   If is a regular second countable space, then is metrizable.    The main step in the proof, one that uses , is the construction of a countable family of continuous functions satisfying the following property: for all and for all open sets containing , there is an such that and . It then follows from that the map defined as is an embedding into the metric space . Since subspaces of metric spaces are metric spaces, we conclude that is metrizable.  We now proceed with the construction. Let be a countable basis of . For all satisfying , let be a continuous function satisfying and : this guaranteed to exist by since , being regular and second countable, is normal. Since the collection is countable we can enumerate it as . Now, for any and any open set , we have for some . Since is regular, we can find a basis element such that . We have for some , , and , as desired.   "
},
{
  "id": "th_embedding_theorem",
  "level": "2",
  "url": "s_Urysohn_metrization.html#th_embedding_theorem",
  "type": "Theorem",
  "number": "1.21.2",
  "title": "Embedding theorem.",
  "body": " Embedding theorem   Let be a -space. Given any collection of continuous functions satisfying the property that for all and for all open sets containing there is an such that and , the map defined as is an embedding into .     is injective  Since is , given any we can find an open set such that and . By assumption, there is some such that and . It follows that and hence that .    is continuous  This follows immediately from since each is continuous.    is embedding  Lastly, we prove that is an embedding mapping homeomorphically onto . Let be an open set containing an element , and let . Pick any such that and . Let be the projection map onto the -th coordinate, and define . Since is continuous and is open, the set is open in the subspace topology of . We claim that , proving that is an embedding. Since , we have . Similarly, if , then , from whence it follows that : otherwise we'd have .    "
},
{
  "id": "s_Urysohn_metrization-4",
  "level": "2",
  "url": "s_Urysohn_metrization.html#s_Urysohn_metrization-4",
  "type": "Remark",
  "number": "1.21.3",
  "title": "Urysohn metrization theorem.",
  "body": " Urysohn metrization theorem  Munkres gives an alternative proof that shows any regular second countable space can be embedded into with respect to the uniform metric. This argument is then generalized later to prove the Nagata-Smirnov metrization theorem, which states that is metrizable if and only if it is regular and has countable locally finite basis.  "
},
{
  "id": "cor_completely_regular_embedding",
  "level": "2",
  "url": "s_Urysohn_metrization.html#cor_completely_regular_embedding",
  "type": "Corollary",
  "number": "1.21.4",
  "title": "",
  "body": "  A space is completely regular if and only if it is homeomorphic to a subspace of for some set .    Implication: . Assume is completely regular. Recall that in particular this means is . Define to be the set of all pairs where and is an open neighborhood of . For each , let be a function satisfying and . (Such a function exists since is completely regular.) Now, for all and for all open sets containing , corresponding to the index we have the function which satisfies and . We conclude by that the map is an embedding of into , and thus that is homeomorphic to a subspace of .  Implication: . Since is completely regular, and since complete regularity is preserved under arbitrary products, the space is completely regular for any set . Furthermore, since complete regularity is inherited by subspaces, any subspace of is completely regular. Thus, if embeds into , then it is homeomorphic to a subspace of , and hence is completely regular.   "
},
{
  "id": "s_Tietze_extension",
  "level": "1",
  "url": "s_Tietze_extension.html",
  "type": "Section",
  "number": "1.22",
  "title": "Further applications of Urysohn",
  "body": " Further applications of Urysohn   Tietze extension theorem   Let be a closed subset of the normal space .   Any continuous function can be extended to a continuous function .    Any continuous function can be extended to a continuous function .       Proof of (1)  First we show that for any continuous function , we can find a continuous function such that (i) and (ii) for all . To do so, subdivide as define and , and, using Urysohn's lemma, choose a continuous function such that and . It is easily verified that this does the trick.  Now assume we have a continuous function . Letting , we see that extends continuously to if and only if extends continuously to . Thus, we may assume . We can build a sequence of continuous functions satisfying the following properties:    for all .     for all .   It follows from some convergence of infinite sums arguments that is a well-defined continuous function from to satisfying for all . (See Munkres for these details. Basically just the Weierstrass M-test, if that is familiar to you.)  How dow we build this sequence? From our first paragraph, we can pick to be any function satisfying and . Next assume we have constructed as specified for all . Apply the same reasoning to the function , which by assumption maps to to find . By the recursion principle we get a sequence satisfying (i) and (ii) for all .    Proof of (2)  Let be a homeomorphism. A continuous function extends continuously to a function if and only if extends continuously to a function . Thus we may assume . Since , by (1) there is a function . Let . If is nonempty, then , as desired. Otherwise, since is closed and , there is a continuous function such that and . The function is an extension of on that maps into , as desired.     Space-filling curve  We will show that there is a continuous surjective function . This is thus a path or curve, whose image is all of . This called a space-filling curve , or Peano curve .   Let be the Cantor set, and choose a homeomorphism , where is given the discrete topology and is given the product topology. (We proved is homeomorphic to in discussion.) Now define functions as Both functions are easily seen to be continuous; we prove this for . Let and let . For any , pick such that . Let . For any , we have , as desired.  Now using our homeomorphism , we see that the functions and are continuous functions from to . By the Tietze extension theorem , we obtain continuous extensions and . The function defined as is then a continuous function to .  It remains only to show that is surjective. Given any , let and be binary expansions of and . Let , and let . We have . This proves in fact that is surjective.     Partition of unity   Let . The {\\bf support} of a continuous function is defined as .  A partition of unity dominated by the open cover  is a collection of continuous functions satisfying (i) for all , and (ii) for all .     Partition of unity (finite)   Let be a normal space. Given any finite open covering of , there is a partition of unity dominated by .    Not covered in WQ23 course. See Munkres if interested.     Compact manifold embedding   Let be a compact -manifold. There is an embedding for some .    Not covered in WQ23 course. See Munkres if interested.    "
},
{
  "id": "th_Tietze_extension",
  "level": "2",
  "url": "s_Tietze_extension.html#th_Tietze_extension",
  "type": "Theorem",
  "number": "1.22.1",
  "title": "Tietze extension theorem.",
  "body": " Tietze extension theorem   Let be a closed subset of the normal space .   Any continuous function can be extended to a continuous function .    Any continuous function can be extended to a continuous function .       Proof of (1)  First we show that for any continuous function , we can find a continuous function such that (i) and (ii) for all . To do so, subdivide as define and , and, using Urysohn's lemma, choose a continuous function such that and . It is easily verified that this does the trick.  Now assume we have a continuous function . Letting , we see that extends continuously to if and only if extends continuously to . Thus, we may assume . We can build a sequence of continuous functions satisfying the following properties:    for all .     for all .   It follows from some convergence of infinite sums arguments that is a well-defined continuous function from to satisfying for all . (See Munkres for these details. Basically just the Weierstrass M-test, if that is familiar to you.)  How dow we build this sequence? From our first paragraph, we can pick to be any function satisfying and . Next assume we have constructed as specified for all . Apply the same reasoning to the function , which by assumption maps to to find . By the recursion principle we get a sequence satisfying (i) and (ii) for all .    Proof of (2)  Let be a homeomorphism. A continuous function extends continuously to a function if and only if extends continuously to a function . Thus we may assume . Since , by (1) there is a function . Let . If is nonempty, then , as desired. Otherwise, since is closed and , there is a continuous function such that and . The function is an extension of on that maps into , as desired.   "
},
{
  "id": "top_eg_space_filling",
  "level": "2",
  "url": "s_Tietze_extension.html#top_eg_space_filling",
  "type": "Topological specimen",
  "number": "18",
  "title": "Space-filling curve.",
  "body": " Space-filling curve  We will show that there is a continuous surjective function . This is thus a path or curve, whose image is all of . This called a space-filling curve , or Peano curve .   Let be the Cantor set, and choose a homeomorphism , where is given the discrete topology and is given the product topology. (We proved is homeomorphic to in discussion.) Now define functions as Both functions are easily seen to be continuous; we prove this for . Let and let . For any , pick such that . Let . For any , we have , as desired.  Now using our homeomorphism , we see that the functions and are continuous functions from to . By the Tietze extension theorem , we obtain continuous extensions and . The function defined as is then a continuous function to .  It remains only to show that is surjective. Given any , let and be binary expansions of and . Let , and let . We have . This proves in fact that is surjective.   "
},
{
  "id": "d_partition_of_unity",
  "level": "2",
  "url": "s_Tietze_extension.html#d_partition_of_unity",
  "type": "Definition",
  "number": "1.22.2",
  "title": "Partition of unity.",
  "body": " Partition of unity   Let . The {\\bf support} of a continuous function is defined as .  A partition of unity dominated by the open cover  is a collection of continuous functions satisfying (i) for all , and (ii) for all .   "
},
{
  "id": "th_partition_of_unity",
  "level": "2",
  "url": "s_Tietze_extension.html#th_partition_of_unity",
  "type": "Theorem",
  "number": "1.22.3",
  "title": "Partition of unity (finite).",
  "body": " Partition of unity (finite)   Let be a normal space. Given any finite open covering of , there is a partition of unity dominated by .    Not covered in WQ23 course. See Munkres if interested.   "
},
{
  "id": "cor_manifold_embedding",
  "level": "2",
  "url": "s_Tietze_extension.html#cor_manifold_embedding",
  "type": "Corollary",
  "number": "1.22.4",
  "title": "Compact manifold embedding.",
  "body": " Compact manifold embedding   Let be a compact -manifold. There is an embedding for some .    Not covered in WQ23 course. See Munkres if interested.   "
},
{
  "id": "s_nets",
  "level": "1",
  "url": "s_nets.html",
  "type": "Section",
  "number": "1.23",
  "title": "Nets",
  "body": " Nets   Partial ordering axioms   Let denote a binary relation on the set . We write to assert that the relation holds between elements . The relation is a partial ordering if it satisfies the following three axioms.   Reflexive (PO1)  For all , we have .    Transitive (PO2)  For all , if and , then .    Antisymmetric (PO3)  For all , if and , then .   The relation is a quasiordering (or preordering ) if it satisfies axioms PO1 and PO2. When is a partial ordering or a quasiordering, we will often write for .  A partially ordered set (POSET, for short) is a pair , where is a partial ordering on . Similarly,a quasiordered set is a pair , where is a a quasiordering on .     Common examples     The usual less than or equal to relation is a partial ordering on .    Let be a set, and let be the power set of of . The relation defines a partial ordering on .    Let be a set, and let be the power set of of . The relation also defines a partial ordering on .    For an element in a topological space the set of all open neighborhoods of is a partially ordered set under reverse inclusion: , .    Recall that an integer divides an integer , written , if there is an integer such that . The relation defines a quasiordering on , but not a partial ordering: and , but . The same relation does define a partial ordering on .       Directed set   A directed set is a pair , where is a quasiordering on that satisfies the following axiom.   Directed (D)  For all , there is a such that and .   A subset of a directed set is cofinal if for all there is a such that .     Common examples  Each quasiordered (and\/or partially ordered) set in is easily seen to satisfy the further axiom (D), and is thus a directed set.    Nets and convergent nets   Let be a set. A net in is a function where is a directed set. In particular, a net is a tuple, and accordingly we may use the coordinate notation , where .  A net is eventually in a subset if there is an element such that for all .  Assume is a topological space. A net  converges to an element , denoted , if for all open sets containing the net is eventually in .  A net is cofinally in a subset if the set is cofinal: equivalently, if for all there is a such that .  An element is a limit point of the net if is cofinally in every open neighborhood of .     Riemann integral  A careful examination of the Riemann integral of a function over an interval reveals that it is a statement about a convergent net. Indeed, let be the set of all pointed partitions of into subintervals: , an element of is a pair , where is a subinterval partition and is a choice of sample points in each subinterval of . The relation is a quasiordering on satisfying (D). To any function we can associate the net , where for each we define to be the corresponding Riemann sum of . The statement that the Riemann integral exists and is equal to is then equivalent to the statement that if and the net converges to .    Nets and topology   Let be a topological space.   The closure of any set is the set of all for which there is a net such that .  It follows that a subset is closed if and only if it contains all limits of all convergent nets in .    A function is continuous if and only if for all convergent nets the net is convergent.    The space is Hausdorff if and only if every net in converges to at most one element in .          Assume . For all open sets containing , choose . Let be the set of all open neighborhoods of , considered as a directed set with reverse inclusion. Define as . The net converges to . Indeed, for any open set containing , we set : if , then (by definition of our ordering), and hence .  Assume for some net in . Given any open set containing , there is an such that for all . In particular, we have . Since is a net in , we conclude that .  Note: the argument for the forward direction uses the axiom of choice potentially. If that bugs you, consider the following alternative: let with quasiordering . (This is no longer a partial ordering necessarily.) Define as . This net also converges to .    Assume is continuous and is a net satisfying . Given any open set containing , the net is eventually in , since this is an open set containing . But then clearly is eventually in .  Inversely, if is not continuous, then there is an and open set containing such that for all open sets containing , there is an element . Let be the set of all open neighborhoods of with partial ordering given by reverse inclusion, and consider the net , where is the element described above. We have , using a similar argument as in (1), and yet . Indeed, by construction the net never lies in the open neighoborhood of .    Assume is Hausdorff and that the net converges to . Given any , pick disjoint open sets containing and , respectively. I claim that is not eventually in . Indeed, since , there is an such that for all . If, similarly, there were a such that for all , then we could find an index satisfying and , in which case . Contradiction! We conclude that is not eventually in , and hence that does not converge to .  Now assume that is not Hausdorff, as witnessed by elements : this means for all open sets containing and , respectively, we have have . Let be the set of all triples , where are open neighborhoods of and , respectively, and . Declare if and only if and . The set is directed: given , we can take , for some . Now, let be the net in defined as follows: given , define . I claim that and . Indeed given any open set containing and open set containing , there is an element . Let . For any we have . Thus is eventually in and eventually in , as desired.        Subnets   Let and be quasiordered sets. An order-preserving map is a function satisfying the following property: if , then .  Let be a net in . A subnet of is a net of the form , where is a directed set, and is an order-preserving map, and the image is cofinal in . Using tuple notation, we will write for the subnet .     Limit points of nets   Let be a topological space, and let be a net in . An element is a limit point of if and only if there is a subnet of converging to .    Let be a limit point of the net . By definition of limit point, the collection of all open neighborhoods of satisfies condition (i) of Kelley's lemma ; condition (ii) follows from properties of open sets. We conclude that there is a subnet which is eventually in for all open sets containing , and thus that this subnet converges to .  Assume is not a limit point of . Let be an open neighborhood of such that is not cofinal; then there exists an such that for all with . Let be a subnet of . We can write . I claim that . Indeed, since is cofinal in we can find a such that , in which case for all all we have , and thus . This shows that in fact is eventually in ; in particular it is definitely not eventually in .     Kelley's lemma   Let be a net. If is a nonempty collection of subsets of satisfying the conditions   for all the set is cofinal,    for all there is an such that ,   then there is a subnet of which is eventually in for all .    Assume is a collection of subsets of satisfying conditions (i)-(ii). Define to be the set of pairs where and . Given , , we declare if and only if and . It is clear that this is a quasiordering. We now show is directed. Given and , by property (ii) there is an such that . Since is cofinal, there is an such that , and . Setting , we see that and .  Define as . It is clear that is order preserving. We show that is cofinal in . Given any , pick any . Since is cofinal, there is an such that . We have .  Lastly, we show that the subnet is eventually in for all . Indeed, given , let for any . If for , then we have and . It follows that . This proves for all , and thus that is eventually in .    "
},
{
  "id": "d_partial_order",
  "level": "2",
  "url": "s_nets.html#d_partial_order",
  "type": "Definition",
  "number": "1.23.1",
  "title": "Partial ordering axioms.",
  "body": " Partial ordering axioms   Let denote a binary relation on the set . We write to assert that the relation holds between elements . The relation is a partial ordering if it satisfies the following three axioms.   Reflexive (PO1)  For all , we have .    Transitive (PO2)  For all , if and , then .    Antisymmetric (PO3)  For all , if and , then .   The relation is a quasiordering (or preordering ) if it satisfies axioms PO1 and PO2. When is a partial ordering or a quasiordering, we will often write for .  A partially ordered set (POSET, for short) is a pair , where is a partial ordering on . Similarly,a quasiordered set is a pair , where is a a quasiordering on .   "
},
{
  "id": "eg_poset",
  "level": "2",
  "url": "s_nets.html#eg_poset",
  "type": "Example",
  "number": "1.23.2",
  "title": "Common examples.",
  "body": " Common examples     The usual less than or equal to relation is a partial ordering on .    Let be a set, and let be the power set of of . The relation defines a partial ordering on .    Let be a set, and let be the power set of of . The relation also defines a partial ordering on .    For an element in a topological space the set of all open neighborhoods of is a partially ordered set under reverse inclusion: , .    Recall that an integer divides an integer , written , if there is an integer such that . The relation defines a quasiordering on , but not a partial ordering: and , but . The same relation does define a partial ordering on .     "
},
{
  "id": "d_directed_set",
  "level": "2",
  "url": "s_nets.html#d_directed_set",
  "type": "Definition",
  "number": "1.23.3",
  "title": "Directed set.",
  "body": " Directed set   A directed set is a pair , where is a quasiordering on that satisfies the following axiom.   Directed (D)  For all , there is a such that and .   A subset of a directed set is cofinal if for all there is a such that .   "
},
{
  "id": "s_nets-5",
  "level": "2",
  "url": "s_nets.html#s_nets-5",
  "type": "Example",
  "number": "1.23.4",
  "title": "Common examples.",
  "body": " Common examples  Each quasiordered (and\/or partially ordered) set in is easily seen to satisfy the further axiom (D), and is thus a directed set.  "
},
{
  "id": "d_nets",
  "level": "2",
  "url": "s_nets.html#d_nets",
  "type": "Definition",
  "number": "1.23.5",
  "title": "Nets and convergent nets.",
  "body": " Nets and convergent nets   Let be a set. A net in is a function where is a directed set. In particular, a net is a tuple, and accordingly we may use the coordinate notation , where .  A net is eventually in a subset if there is an element such that for all .  Assume is a topological space. A net  converges to an element , denoted , if for all open sets containing the net is eventually in .  A net is cofinally in a subset if the set is cofinal: equivalently, if for all there is a such that .  An element is a limit point of the net if is cofinally in every open neighborhood of .   "
},
{
  "id": "eg_Riemann_integral",
  "level": "2",
  "url": "s_nets.html#eg_Riemann_integral",
  "type": "Example",
  "number": "1.23.6",
  "title": "Riemann integral.",
  "body": " Riemann integral  A careful examination of the Riemann integral of a function over an interval reveals that it is a statement about a convergent net. Indeed, let be the set of all pointed partitions of into subintervals: , an element of is a pair , where is a subinterval partition and is a choice of sample points in each subinterval of . The relation is a quasiordering on satisfying (D). To any function we can associate the net , where for each we define to be the corresponding Riemann sum of . The statement that the Riemann integral exists and is equal to is then equivalent to the statement that if and the net converges to .  "
},
{
  "id": "th_nets_topology",
  "level": "2",
  "url": "s_nets.html#th_nets_topology",
  "type": "Theorem",
  "number": "1.23.7",
  "title": "Nets and topology.",
  "body": " Nets and topology   Let be a topological space.   The closure of any set is the set of all for which there is a net such that .  It follows that a subset is closed if and only if it contains all limits of all convergent nets in .    A function is continuous if and only if for all convergent nets the net is convergent.    The space is Hausdorff if and only if every net in converges to at most one element in .          Assume . For all open sets containing , choose . Let be the set of all open neighborhoods of , considered as a directed set with reverse inclusion. Define as . The net converges to . Indeed, for any open set containing , we set : if , then (by definition of our ordering), and hence .  Assume for some net in . Given any open set containing , there is an such that for all . In particular, we have . Since is a net in , we conclude that .  Note: the argument for the forward direction uses the axiom of choice potentially. If that bugs you, consider the following alternative: let with quasiordering . (This is no longer a partial ordering necessarily.) Define as . This net also converges to .    Assume is continuous and is a net satisfying . Given any open set containing , the net is eventually in , since this is an open set containing . But then clearly is eventually in .  Inversely, if is not continuous, then there is an and open set containing such that for all open sets containing , there is an element . Let be the set of all open neighborhoods of with partial ordering given by reverse inclusion, and consider the net , where is the element described above. We have , using a similar argument as in (1), and yet . Indeed, by construction the net never lies in the open neighoborhood of .    Assume is Hausdorff and that the net converges to . Given any , pick disjoint open sets containing and , respectively. I claim that is not eventually in . Indeed, since , there is an such that for all . If, similarly, there were a such that for all , then we could find an index satisfying and , in which case . Contradiction! We conclude that is not eventually in , and hence that does not converge to .  Now assume that is not Hausdorff, as witnessed by elements : this means for all open sets containing and , respectively, we have have . Let be the set of all triples , where are open neighborhoods of and , respectively, and . Declare if and only if and . The set is directed: given , we can take , for some . Now, let be the net in defined as follows: given , define . I claim that and . Indeed given any open set containing and open set containing , there is an element . Let . For any we have . Thus is eventually in and eventually in , as desired.      "
},
{
  "id": "d_order_preserving_subnets",
  "level": "2",
  "url": "s_nets.html#d_order_preserving_subnets",
  "type": "Definition",
  "number": "1.23.8",
  "title": "Subnets.",
  "body": " Subnets   Let and be quasiordered sets. An order-preserving map is a function satisfying the following property: if , then .  Let be a net in . A subnet of is a net of the form , where is a directed set, and is an order-preserving map, and the image is cofinal in . Using tuple notation, we will write for the subnet .   "
},
{
  "id": "th_nets_limit_points",
  "level": "2",
  "url": "s_nets.html#th_nets_limit_points",
  "type": "Theorem",
  "number": "1.23.9",
  "title": "Limit points of nets.",
  "body": " Limit points of nets   Let be a topological space, and let be a net in . An element is a limit point of if and only if there is a subnet of converging to .    Let be a limit point of the net . By definition of limit point, the collection of all open neighborhoods of satisfies condition (i) of Kelley's lemma ; condition (ii) follows from properties of open sets. We conclude that there is a subnet which is eventually in for all open sets containing , and thus that this subnet converges to .  Assume is not a limit point of . Let be an open neighborhood of such that is not cofinal; then there exists an such that for all with . Let be a subnet of . We can write . I claim that . Indeed, since is cofinal in we can find a such that , in which case for all all we have , and thus . This shows that in fact is eventually in ; in particular it is definitely not eventually in .   "
},
{
  "id": "lem_Kelleys_lemma",
  "level": "2",
  "url": "s_nets.html#lem_Kelleys_lemma",
  "type": "Lemma",
  "number": "1.23.10",
  "title": "Kelley’s lemma.",
  "body": " Kelley's lemma   Let be a net. If is a nonempty collection of subsets of satisfying the conditions   for all the set is cofinal,    for all there is an such that ,   then there is a subnet of which is eventually in for all .    Assume is a collection of subsets of satisfying conditions (i)-(ii). Define to be the set of pairs where and . Given , , we declare if and only if and . It is clear that this is a quasiordering. We now show is directed. Given and , by property (ii) there is an such that . Since is cofinal, there is an such that , and . Setting , we see that and .  Define as . It is clear that is order preserving. We show that is cofinal in . Given any , pick any . Since is cofinal, there is an such that . We have .  Lastly, we show that the subnet is eventually in for all . Indeed, given , let for any . If for , then we have and . It follows that . This proves for all , and thus that is eventually in .   "
},
{
  "id": "s_Tychonoff",
  "level": "1",
  "url": "s_Tychonoff.html",
  "type": "Section",
  "number": "1.24",
  "title": "Tychonoff theorem via nets",
  "body": " Tychonoff theorem via nets   Our main application of the theory of nets is (a) to give a characterization of compactness in terms of convergence and limit points of nets ( ), and (b) to use this characterization to prove the Tychonoff theorem     Nets and compactness   Nets and compactness   Let be a topological space. The following statements are equivalent.    is compact.    Every net in has a limit point.    Every net in has a convergent subnet.       Statements (ii) and (iii) are immediately seen to be equivalent thanks to . We will show that (i) and (ii) are equivalent.   Implication: (i) (ii)  Let be a net in . For each define . Clearly each is closed and nonempty. Furthermore, for any finite collection we have , since we can find a such that for all , and hence . Since is assumed to be compact, there is an element . We show that is a limit point of . Indeed, given any open set containing and any , since , there is an element with such that . This proves that is cofinally in , as desired.    Implication: (ii) (i)  We prove the contrapositive. Suppose is not compact, and let be a cover with no finite cover. Define to the be the set of all pairs , where is a finite subset of and . (Note that since has no finite subcover.) It is easy to see that is a directed set under the quasiordering defined as if and only if . Define the net as . We show that has no limit point. To this end, given any , we have for some . We will show that the net is not cofinally in . To this end consider the index , where . For all with , we have , in which case . Thus there is no satisfying .       Tychonoff's theorem   We now give a proof of Tychonoff's theorem using nets. The first such proof was given by UC Berkeley mathematician John L. Kelley in his 1950 paper Convergence in topology . Our proof draws from a couple of slight improvements to Kelley's original argument, both proffered by additional UC Berkeley mathematicians. (Go Bears!) Paul Chernoff's A simple proof of Tychonoff's theorem via nets removed the need for universal nets in Kelley's argument; Charles Pugh is credited for , which removes the argument's reliance on subnets. All of these various proofs invoke Zorn's lemma , which as it turns out is equivalent to the axiom of choice. You may be asking: Is there a proof of the Tychonoff theorem that does not rely on the axiom of choice? Amazingly, the answer is no! In fact, Kelley himself proved that Tychonoff's theorem is equivalent to the axiom of choice in another paper from 1950: The Tychonoff product theorem implies the axiom of choice . His argument is simply too elegant not to include here. (Note: Kelley's original argument had a minor flaw that is corrected in the proof below. I encourage you to look at the original article and see if you can find the invalid step.)    Tychonoff implies AC (Kelley)   If Tychonoff's theorem is true, then the axiom of choice is true.    Assume Tychonoff's theorem is true. We will prove the following equivalent formulation of the axiom of choice: . Given a collection of nonempty sets, let the result of adding one additional point, , to each . Why do we do this? Add the marked point to the -th component space gives us a foothold, as it were, allowing us to find elements in the product without invoking the axiom of choice in the process: we can always choose the -th entry to be this special element . We will use Tychonoff's theorem to show that is a nonempty subset of . To do so, we need to give the sets a compact topological structure: this is accomplished by declaring the topology on to be . (Check that this is a topology.) This clearly makes compact, since only contains four open sets. Note also that is closed with respect to this topology.  Since each is compact, by Tychonoff's theorem so is . For each , let be the th projection map and define . Since is closed in , and since is continuous, the set is closed for each . Furthermore given any finite set , the set is nonempty: indeed, by the finite axiom of choice principle (which is implied by ZF set theory) there exists a tuple , and thus the element defined as is an element of . Now since is compact, we have , using the finite intersection characterization of compactness. But clearly . Thus .    Now on to a net-based proof of Tychonoff's theorem. As mentioned we use Zorn's lemma, the statement of which involves some extra jargon.   Upper bounds, maximal elements, chains   Let be a partially ordered set.  An upper bound on a subset is an element such that for all .  An element is maximal if given any , if , then .  A subset is a chain (or totally ordered ) if for all we have or .     Zorn's lemma   Let be a partially ordered set. If every chain has an upper bound, then has a maximal element: , there is an such that for all , if , then .    As stated above, Zorn's lemma is equivalent to the axiom of choice. You can find a proof of this fact in most introductory set theory texts.    Lastly, before moving to the main attraction, we record a useful lemma that will simplify our main argument. The proof idea, due to Charles Pugh, avoids all mention of subnets, providing a path to proving Tychonoff's theorem that does not require subnets. There is a fairly direct alternative proof of the lemma using convergent subnets. See if you can figure it out!   Nets in products   Let be topological spaces, and assume is compact. Let be a net in , and let be the projection onto map. If is a limit point of the net , then there is a such that is a limit point of .    Let be a limit point of . Define to be the set of all pairs , where is an open neighborhood of , and . For elements we declare if and only if and . It is easy to see that is a partially ordered set with respect to this ordering. To see that it is directed, given indices and in , since is a limit point of , we can find a where and . This satisfies and , as desired.  Now define the net as . (Recall, our original net is .) Since is compact, the net has a limit point . We claim that is a limit point of our original net . To prove this, it is enough to show that given any basic opens set containing , and any , we can find an index such that . Given containing and index , first pick an index such that . This is possible since is a limit point of . By definition the pair is an element of . Since is a limit point of the net , and since is an open neighborhood of , we can find an element such that and . By definition of and its partial ordering, we have , , and . We conclude that , as desired.     Tychonoff theorem   Given any collection of compact spaces the product space is compact.    Proof (following P. Chernoff)  We show that any net in has a limit point . In an effort to distinguish between the different types of tuple objects at play here, I will exclusively use tuple notation for nets and exclusively use function notation for elements of . This is already in force above: the net specifies an element for each index ; but each is itself a function satisfying .  Now define to be the set of all pairs , where and is a limit point of the net . Note how we are exploiting the function notation here: since elements of are just functions with domain , restricting the domain yields a map from to defined as . This map is in fact just the projection map defined as . It follows from this that this map is continuous.  Next, we define the relation on as follows: if and only if and . It is easy to see that is a partial ordering. We now proceed in two steps: (1) we will show that satisfies the conditions of Zorn's lemma, and hence that it has a maximal element ; (2) we will show that and hence that is a limit point of . It then follows that is compact, as desired.   Step 1: has a maximal element  First observe that is nonempty. Indeed, given any , the net is just a net in the compact space , and hence has a limit point . It follows that . (There is a slight subtlety here, which is that the space is homeomorphic to the (somewhat funny looking) product space via the map .)  Next we show that any chain in has an upper bound in . To this end, given any chain in , we define as follows:    ;    the function is defined as , where is any element of for which .   First observe that is a well-defined function: if , where , then since is a chain either or ; assuming without loss of generality that we have by definition, and hence that . Next we must show that , understood as an element of , is a limit point of the net . Using the usual product topology basis, it suffices to show that given any finite set and open set of the form , and given any , there is an such that . Since is finite, we have for some sets satisfying . Since is a chain, there is an index such that for all . Thus we may assume there is an element such that . By definition is a limit point of the net . Since , it follows that . Thus there is an such that . It follows easily that . This proves is a limit point of , and hence that . It is clear from the definition of , that it is an upper bound of .  Having shown that satisfies the chain condition for Zorn's lemma, we conclude that it contains a maximal element .    Step 2:  Let be a maximal element of , so that is a limit point of the net . We show that and hence that is a limit point of .  Assume by contradiction that , and let . Since is compact, by the net in has a limit point of the form . But then the element defined as and satisfies and , contradicting the fact that is a maximal element.       "
},
{
  "id": "th_nets_compactness",
  "level": "2",
  "url": "s_Tychonoff.html#th_nets_compactness",
  "type": "Theorem",
  "number": "1.24.1",
  "title": "Nets and compactness.",
  "body": " Nets and compactness   Let be a topological space. The following statements are equivalent.    is compact.    Every net in has a limit point.    Every net in has a convergent subnet.       Statements (ii) and (iii) are immediately seen to be equivalent thanks to . We will show that (i) and (ii) are equivalent.   Implication: (i) (ii)  Let be a net in . For each define . Clearly each is closed and nonempty. Furthermore, for any finite collection we have , since we can find a such that for all , and hence . Since is assumed to be compact, there is an element . We show that is a limit point of . Indeed, given any open set containing and any , since , there is an element with such that . This proves that is cofinally in , as desired.    Implication: (ii) (i)  We prove the contrapositive. Suppose is not compact, and let be a cover with no finite cover. Define to the be the set of all pairs , where is a finite subset of and . (Note that since has no finite subcover.) It is easy to see that is a directed set under the quasiordering defined as if and only if . Define the net as . We show that has no limit point. To this end, given any , we have for some . We will show that the net is not cofinally in . To this end consider the index , where . For all with , we have , in which case . Thus there is no satisfying .    "
},
{
  "id": "th_Tychonoff_choice",
  "level": "2",
  "url": "s_Tychonoff.html#th_Tychonoff_choice",
  "type": "Theorem",
  "number": "1.24.2",
  "title": "Tychonoff implies AC (Kelley).",
  "body": " Tychonoff implies AC (Kelley)   If Tychonoff's theorem is true, then the axiom of choice is true.    Assume Tychonoff's theorem is true. We will prove the following equivalent formulation of the axiom of choice: . Given a collection of nonempty sets, let the result of adding one additional point, , to each . Why do we do this? Add the marked point to the -th component space gives us a foothold, as it were, allowing us to find elements in the product without invoking the axiom of choice in the process: we can always choose the -th entry to be this special element . We will use Tychonoff's theorem to show that is a nonempty subset of . To do so, we need to give the sets a compact topological structure: this is accomplished by declaring the topology on to be . (Check that this is a topology.) This clearly makes compact, since only contains four open sets. Note also that is closed with respect to this topology.  Since each is compact, by Tychonoff's theorem so is . For each , let be the th projection map and define . Since is closed in , and since is continuous, the set is closed for each . Furthermore given any finite set , the set is nonempty: indeed, by the finite axiom of choice principle (which is implied by ZF set theory) there exists a tuple , and thus the element defined as is an element of . Now since is compact, we have , using the finite intersection characterization of compactness. But clearly . Thus .   "
},
{
  "id": "d_chain",
  "level": "2",
  "url": "s_Tychonoff.html#d_chain",
  "type": "Definition",
  "number": "1.24.3",
  "title": "Upper bounds, maximal elements, chains.",
  "body": " Upper bounds, maximal elements, chains   Let be a partially ordered set.  An upper bound on a subset is an element such that for all .  An element is maximal if given any , if , then .  A subset is a chain (or totally ordered ) if for all we have or .   "
},
{
  "id": "th_Zorns_lemma",
  "level": "2",
  "url": "s_Tychonoff.html#th_Zorns_lemma",
  "type": "Theorem",
  "number": "1.24.4",
  "title": "Zorn’s lemma.",
  "body": " Zorn's lemma   Let be a partially ordered set. If every chain has an upper bound, then has a maximal element: , there is an such that for all , if , then .    As stated above, Zorn's lemma is equivalent to the axiom of choice. You can find a proof of this fact in most introductory set theory texts.   "
},
{
  "id": "lemma_product_nets",
  "level": "2",
  "url": "s_Tychonoff.html#lemma_product_nets",
  "type": "Lemma",
  "number": "1.24.5",
  "title": "Nets in products.",
  "body": " Nets in products   Let be topological spaces, and assume is compact. Let be a net in , and let be the projection onto map. If is a limit point of the net , then there is a such that is a limit point of .    Let be a limit point of . Define to be the set of all pairs , where is an open neighborhood of , and . For elements we declare if and only if and . It is easy to see that is a partially ordered set with respect to this ordering. To see that it is directed, given indices and in , since is a limit point of , we can find a where and . This satisfies and , as desired.  Now define the net as . (Recall, our original net is .) Since is compact, the net has a limit point . We claim that is a limit point of our original net . To prove this, it is enough to show that given any basic opens set containing , and any , we can find an index such that . Given containing and index , first pick an index such that . This is possible since is a limit point of . By definition the pair is an element of . Since is a limit point of the net , and since is an open neighborhood of , we can find an element such that and . By definition of and its partial ordering, we have , , and . We conclude that , as desired.   "
},
{
  "id": "th_Tychonoff_general",
  "level": "2",
  "url": "s_Tychonoff.html#th_Tychonoff_general",
  "type": "Theorem",
  "number": "1.24.6",
  "title": "Tychonoff theorem.",
  "body": " Tychonoff theorem   Given any collection of compact spaces the product space is compact.    Proof (following P. Chernoff)  We show that any net in has a limit point . In an effort to distinguish between the different types of tuple objects at play here, I will exclusively use tuple notation for nets and exclusively use function notation for elements of . This is already in force above: the net specifies an element for each index ; but each is itself a function satisfying .  Now define to be the set of all pairs , where and is a limit point of the net . Note how we are exploiting the function notation here: since elements of are just functions with domain , restricting the domain yields a map from to defined as . This map is in fact just the projection map defined as . It follows from this that this map is continuous.  Next, we define the relation on as follows: if and only if and . It is easy to see that is a partial ordering. We now proceed in two steps: (1) we will show that satisfies the conditions of Zorn's lemma, and hence that it has a maximal element ; (2) we will show that and hence that is a limit point of . It then follows that is compact, as desired.   Step 1: has a maximal element  First observe that is nonempty. Indeed, given any , the net is just a net in the compact space , and hence has a limit point . It follows that . (There is a slight subtlety here, which is that the space is homeomorphic to the (somewhat funny looking) product space via the map .)  Next we show that any chain in has an upper bound in . To this end, given any chain in , we define as follows:    ;    the function is defined as , where is any element of for which .   First observe that is a well-defined function: if , where , then since is a chain either or ; assuming without loss of generality that we have by definition, and hence that . Next we must show that , understood as an element of , is a limit point of the net . Using the usual product topology basis, it suffices to show that given any finite set and open set of the form , and given any , there is an such that . Since is finite, we have for some sets satisfying . Since is a chain, there is an index such that for all . Thus we may assume there is an element such that . By definition is a limit point of the net . Since , it follows that . Thus there is an such that . It follows easily that . This proves is a limit point of , and hence that . It is clear from the definition of , that it is an upper bound of .  Having shown that satisfies the chain condition for Zorn's lemma, we conclude that it contains a maximal element .    Step 2:  Let be a maximal element of , so that is a limit point of the net . We show that and hence that is a limit point of .  Assume by contradiction that , and let . Since is compact, by the net in has a limit point of the form . But then the element defined as and satisfies and , contradicting the fact that is a maximal element.    "
},
{
  "id": "s_homotopy",
  "level": "1",
  "url": "s_homotopy.html",
  "type": "Section",
  "number": "2.1",
  "title": "Homotopy",
  "body": " Homotopy    Throughout this course will denote the interval .    Homotopy of maps   Let be continuous maps. A homotopy from to is a continuous map satisfying for all . We say is homotopic to in this case, written .     Given a homotopy from to , for each we get a function defined as . In this way we can think of a homotopy as a family of functions that varies continuously with (a shorthand way of saying that is continuous), and which continuously deforms the function to the function as ranges over .    Homotopic functions to   A subset is convex if for any elements and any , we have : , given any pair of points in , the line segment between them lies within .  If is convex, then given any continuous functions , the function defines a homotopy from to . Thus any two continuous functions from a space into are homotopic.     Nullhomotopic map   A continuous map is nullhomotopic if it is homotopic to a constant function from to .     Path homotopy   Given elements in the topological space , we denoted by the set of all paths with initial point and terminal point .  Given , a path homotopy from to is a continuous function satisfying . In other words, is a homotopy from to that further satisfies and for all . We say that is path homotopic to in this case, written .     Homotopic paths in  Let be a convex subset of , and let . Given two paths , the straight-line homotopy is easily seen to be a path homotopy: . Thus any two paths to between any two points are path homotopic.    Paths with non-convex codomain   Consider the the nonconvex set and the paths . Both are paths that begin and end at ; it is intuitively clear that cannot be continuously deformed to (while staying tethered at ) without passing through the origin at some point. In other words, the two paths are not path homotopic. This is surprisingly difficult to prove rigorously; we will get to this in the coming sections. On the other hand and are in fact homotopic: consider   Interestingly, the situation is different if we take and . Intuitively, it seems we should be able to lift the graph of up over the origin, then shrink it down to the point . Here is one explicit realization of this idea. Consider the family of curves lying on the upper hemisphere of , whose projection onto the -plane is the circle . Such a curve has parametrization , giving rise to a path homotopy from to . The Sage cell below provides a nice visualization of this family of curves.      Homotopy equivalence relation   Let and be topological spaces. Fix .    is an equivalence relation on the set of all continuous functions from to .     is an equivalence relation on .       We give a proof for (a). It is then easy to check that the same homotopies provided in this proof are path homotopies ( , satisfy ) in the context of paths in .   Reflexive  Given a continuous function , the map defined as for all is clearly a homotopy from to .    Symmetric  Let be continuous maps from to , and assume . By definition this means there is a homotopy from to , so that in particular for all . Define as . It is clear that is continuous, and we have . Thus is a homotopy from to , showing .    Transitive  Let be continuous maps from to . We assume and . By definition there is a homotopy from to , and a homotopy from to . Define . The functions and are continuous on the closed sets and , respectively, and agree on the intersection since and for all , by definition of homotopy. By the closed pasting lemma, we conclude that is well-defined and continuous. Lastly, we have for all .      Homotopy equivalence  For topological spaces , let be the set of all continuous functions. For a function we let denote its equivalence class with respect to . The set of all equivalence classes is denoted .  For , we will also use to denote its equivalence class with respect to .    Path product   Let be a topological space, and let . We define a path product operation as follows: .  The function defined is a path from to . Furthermore, if and , then . In other words, we get a well-defined operation on homotopy classes defined as .    It is easy to see, using the closed pasting lemma, that is well-defined and continuous. We show that it is well-defined on homotopy classes, as claimed.  Suppose that as witnessed by the path homotopy , and that as witnessed by the path homotopy . Define . Note first that and , since and are path homotopies. Since is continuous on and is continuous on , and since they agree on the intersection of these sets, the closed pasting lemma implies is a well-defined continuous function.  Next, we have , showing that is a homotopy from to .  Lastly, we have for all , showing that is a path homotopy.     Path product properties   Let be a topological space. For any element , we let denote the constant function for all .   Associativity  If , then .    Identities  Given , we have     Inverses  Given , let be its reverse : , . We have .        Associativity . Let and . After unpacking the definitions for iterated path products, we see that Define as . The pasting lemma implies is continuous, and by definition we have and . A computation shows that . In other words, . By we conclude that and thus that .   Identities . Using the definition of path product, we have Define as    Inverses . First compute      Reparametrization of path   Let . If is a continuous map satisfying and , then . In other words, a reparametrized path is homotopic to the original path.    Homework exercise.     Partitions of   Let , let be a subdivision of into subintervals , , and let , where is any continuous map satisfying and . We have .    Homework exercise.    "
},
{
  "id": "s_homotopy-2",
  "level": "2",
  "url": "s_homotopy.html#s_homotopy-2",
  "type": "Notation",
  "number": "2.1.1",
  "title": "<span class=\"process-math\">\\(I=[0,1]\\)<\/span>.",
  "body": "  Throughout this course will denote the interval .  "
},
{
  "id": "d_homotopy",
  "level": "2",
  "url": "s_homotopy.html#d_homotopy",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Homotopy of maps.",
  "body": " Homotopy of maps   Let be continuous maps. A homotopy from to is a continuous map satisfying for all . We say is homotopic to in this case, written .   "
},
{
  "id": "s_homotopy-4",
  "level": "2",
  "url": "s_homotopy.html#s_homotopy-4",
  "type": "Remark",
  "number": "2.1.3",
  "title": "",
  "body": " Given a homotopy from to , for each we get a function defined as . In this way we can think of a homotopy as a family of functions that varies continuously with (a shorthand way of saying that is continuous), and which continuously deforms the function to the function as ranges over .  "
},
{
  "id": "eg_homotopy_convex",
  "level": "2",
  "url": "s_homotopy.html#eg_homotopy_convex",
  "type": "Example",
  "number": "2.1.4",
  "title": "Homotopic functions to <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Homotopic functions to   A subset is convex if for any elements and any , we have : , given any pair of points in , the line segment between them lies within .  If is convex, then given any continuous functions , the function defines a homotopy from to . Thus any two continuous functions from a space into are homotopic.   "
},
{
  "id": "d_nullhomotopic",
  "level": "2",
  "url": "s_homotopy.html#d_nullhomotopic",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Nullhomotopic map.",
  "body": " Nullhomotopic map   A continuous map is nullhomotopic if it is homotopic to a constant function from to .   "
},
{
  "id": "d_homotopy_paths",
  "level": "2",
  "url": "s_homotopy.html#d_homotopy_paths",
  "type": "Definition",
  "number": "2.1.6",
  "title": "Path homotopy.",
  "body": " Path homotopy   Given elements in the topological space , we denoted by the set of all paths with initial point and terminal point .  Given , a path homotopy from to is a continuous function satisfying . In other words, is a homotopy from to that further satisfies and for all . We say that is path homotopic to in this case, written .   "
},
{
  "id": "eg_path_homotopy",
  "level": "2",
  "url": "s_homotopy.html#eg_path_homotopy",
  "type": "Example",
  "number": "2.1.7",
  "title": "Homotopic paths in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Homotopic paths in  Let be a convex subset of , and let . Given two paths , the straight-line homotopy is easily seen to be a path homotopy: . Thus any two paths to between any two points are path homotopic.  "
},
{
  "id": "eg_homotopy_nonconvex",
  "level": "2",
  "url": "s_homotopy.html#eg_homotopy_nonconvex",
  "type": "Example",
  "number": "2.1.8",
  "title": "Paths with non-convex codomain.",
  "body": " Paths with non-convex codomain   Consider the the nonconvex set and the paths . Both are paths that begin and end at ; it is intuitively clear that cannot be continuously deformed to (while staying tethered at ) without passing through the origin at some point. In other words, the two paths are not path homotopic. This is surprisingly difficult to prove rigorously; we will get to this in the coming sections. On the other hand and are in fact homotopic: consider   Interestingly, the situation is different if we take and . Intuitively, it seems we should be able to lift the graph of up over the origin, then shrink it down to the point . Here is one explicit realization of this idea. Consider the family of curves lying on the upper hemisphere of , whose projection onto the -plane is the circle . Such a curve has parametrization , giving rise to a path homotopy from to . The Sage cell below provides a nice visualization of this family of curves.    "
},
{
  "id": "th_homotopy_equivalence",
  "level": "2",
  "url": "s_homotopy.html#th_homotopy_equivalence",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "Homotopy equivalence relation.",
  "body": " Homotopy equivalence relation   Let and be topological spaces. Fix .    is an equivalence relation on the set of all continuous functions from to .     is an equivalence relation on .       We give a proof for (a). It is then easy to check that the same homotopies provided in this proof are path homotopies ( , satisfy ) in the context of paths in .   Reflexive  Given a continuous function , the map defined as for all is clearly a homotopy from to .    Symmetric  Let be continuous maps from to , and assume . By definition this means there is a homotopy from to , so that in particular for all . Define as . It is clear that is continuous, and we have . Thus is a homotopy from to , showing .    Transitive  Let be continuous maps from to . We assume and . By definition there is a homotopy from to , and a homotopy from to . Define . The functions and are continuous on the closed sets and , respectively, and agree on the intersection since and for all , by definition of homotopy. By the closed pasting lemma, we conclude that is well-defined and continuous. Lastly, we have for all .    "
},
{
  "id": "s_homotopy-11",
  "level": "2",
  "url": "s_homotopy.html#s_homotopy-11",
  "type": "Notation",
  "number": "2.1.10",
  "title": "Homotopy equivalence.",
  "body": " Homotopy equivalence  For topological spaces , let be the set of all continuous functions. For a function we let denote its equivalence class with respect to . The set of all equivalence classes is denoted .  For , we will also use to denote its equivalence class with respect to .  "
},
{
  "id": "d_path_product",
  "level": "2",
  "url": "s_homotopy.html#d_path_product",
  "type": "Definition",
  "number": "2.1.11",
  "title": "Path product.",
  "body": " Path product   Let be a topological space, and let . We define a path product operation as follows: .  The function defined is a path from to . Furthermore, if and , then . In other words, we get a well-defined operation on homotopy classes defined as .    It is easy to see, using the closed pasting lemma, that is well-defined and continuous. We show that it is well-defined on homotopy classes, as claimed.  Suppose that as witnessed by the path homotopy , and that as witnessed by the path homotopy . Define . Note first that and , since and are path homotopies. Since is continuous on and is continuous on , and since they agree on the intersection of these sets, the closed pasting lemma implies is a well-defined continuous function.  Next, we have , showing that is a homotopy from to .  Lastly, we have for all , showing that is a path homotopy.   "
},
{
  "id": "th_path_product_props",
  "level": "2",
  "url": "s_homotopy.html#th_path_product_props",
  "type": "Theorem",
  "number": "2.1.12",
  "title": "Path product properties.",
  "body": " Path product properties   Let be a topological space. For any element , we let denote the constant function for all .   Associativity  If , then .    Identities  Given , we have     Inverses  Given , let be its reverse : , . We have .        Associativity . Let and . After unpacking the definitions for iterated path products, we see that Define as . The pasting lemma implies is continuous, and by definition we have and . A computation shows that . In other words, . By we conclude that and thus that .   Identities . Using the definition of path product, we have Define as    Inverses . First compute    "
},
{
  "id": "lemma_homotopy_reparameter",
  "level": "2",
  "url": "s_homotopy.html#lemma_homotopy_reparameter",
  "type": "Lemma",
  "number": "2.1.13",
  "title": "Reparametrization of path.",
  "body": " Reparametrization of path   Let . If is a continuous map satisfying and , then . In other words, a reparametrized path is homotopic to the original path.    Homework exercise.   "
},
{
  "id": "th_homotopy_partition",
  "level": "2",
  "url": "s_homotopy.html#th_homotopy_partition",
  "type": "Theorem",
  "number": "2.1.14",
  "title": "Partitions of <span class=\"process-math\">\\(I\\)<\/span>.",
  "body": " Partitions of   Let , let be a subdivision of into subintervals , , and let , where is any continuous map satisfying and . We have .    Homework exercise.   "
},
{
  "id": "s_fundamental_group",
  "level": "1",
  "url": "s_fundamental_group.html",
  "type": "Section",
  "number": "2.2",
  "title": "Fundamental group",
  "body": " Fundamental group   Group compendium   A group is a set together with a binary operation such that (i) the operation is associative, (ii) there is an identity element satisfying for all , and (iii) for all there is an inverse element satisfying .  A subgroup of a group is a subset that contains the identity element , and which is closed under the group operation: , if , then . We write in this case.  A normal subgroup of is a subgroup that satisfies for all : , is closed under conjugation . We write in this case.  Given a subgroup , we denote by the set of all left cosets of : , . Given a normal subgroup the set of cosets has a group structure given by the operation . We call the quotient of by .  A homomorphism between groups is a function satisfying for all . (Here we use subscript notation to differentiate the two different group operations at play.)  An isomorphism is an invertible homomorphism . We say and are isomorphic , denoted , if there is an isomorphism between them. (As it turns out, the inverse of an invertible group homomorphism is automatically a group homomorphism.)     Fundamental group   Given a topological space and element , the fundamental group of based at , denoted , is defined as . In other words, is the set of all path homotopy equivalence classes , where is a closed path (or loop) beginning and ending at .  The path product operation endows with the structure of a group.   Identity element  The identity element of is given by , where is the constant function for all .    Inverse elements  Given an element its group inverse is , where is the reverse of .     That the path product operation endows with the structure of a group follows directly from .     Simply connected   A topological space is simply connected if it is path connected and is trivial for all .     Fundamental group and path components   Assume . The map is an isomorphism. As a consequence, if is a path component of , then for any .    Note that the formula for is defined in terms of the path product operation. We showed in that this operation is well-defined on equivalence classes, making well defined.  We now show is a homomorphism of groups. Given , we have .  Lastly one easily shows that is invertible, with inverse .     Pointed space   Given a topological space and element , the pair is called a pointed space with base point  . Given pointed spaces and , a map of pointed spaces (or based map ) is a continuous function satisfying . We write in this case.     Fundamental group functor      Let be a map of pointed spaces. The rule defines a group homomorphism .    Given maps of pointed spaces and , we have .    Let be the identity function for all . For any , we have , the identity group homomorphism on .          It is clear that the rule defines a map from to . We must show that it is well defined on equivalence classes. Assume are path homotopic, and let be a path homotopy from to . It is easy to see that is a path homotopy from to . Thus implies , showing is a well-defined map from to .  Now we show is a homomorphism of groups. We will use the (easy to show fact) general fact that given and continuous , we have . Now, given , we have .    For any we have . This proves .    For any we have . This proves is the identity homomorphism on .        Fundamental group invariance   Let be a homemorphism, let , and let . The map is an isomorphism of groups.    If is a homemorphism, then defines a map of pointed spaces from to . Since and we have . This shows that is the inverse of , and thus that is an isomorphism.    "
},
{
  "id": "d_group_defs",
  "level": "2",
  "url": "s_fundamental_group.html#d_group_defs",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Group compendium.",
  "body": " Group compendium   A group is a set together with a binary operation such that (i) the operation is associative, (ii) there is an identity element satisfying for all , and (iii) for all there is an inverse element satisfying .  A subgroup of a group is a subset that contains the identity element , and which is closed under the group operation: , if , then . We write in this case.  A normal subgroup of is a subgroup that satisfies for all : , is closed under conjugation . We write in this case.  Given a subgroup , we denote by the set of all left cosets of : , . Given a normal subgroup the set of cosets has a group structure given by the operation . We call the quotient of by .  A homomorphism between groups is a function satisfying for all . (Here we use subscript notation to differentiate the two different group operations at play.)  An isomorphism is an invertible homomorphism . We say and are isomorphic , denoted , if there is an isomorphism between them. (As it turns out, the inverse of an invertible group homomorphism is automatically a group homomorphism.)   "
},
{
  "id": "d_fundamental_group",
  "level": "2",
  "url": "s_fundamental_group.html#d_fundamental_group",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Fundamental group.",
  "body": " Fundamental group   Given a topological space and element , the fundamental group of based at , denoted , is defined as . In other words, is the set of all path homotopy equivalence classes , where is a closed path (or loop) beginning and ending at .  The path product operation endows with the structure of a group.   Identity element  The identity element of is given by , where is the constant function for all .    Inverse elements  Given an element its group inverse is , where is the reverse of .     That the path product operation endows with the structure of a group follows directly from .   "
},
{
  "id": "d_simply_connected",
  "level": "2",
  "url": "s_fundamental_group.html#d_simply_connected",
  "type": "Definition",
  "number": "2.2.3",
  "title": "Simply connected.",
  "body": " Simply connected   A topological space is simply connected if it is path connected and is trivial for all .   "
},
{
  "id": "th_fund_group_path_connected",
  "level": "2",
  "url": "s_fundamental_group.html#th_fund_group_path_connected",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "Fundamental group and path components.",
  "body": " Fundamental group and path components   Assume . The map is an isomorphism. As a consequence, if is a path component of , then for any .    Note that the formula for is defined in terms of the path product operation. We showed in that this operation is well-defined on equivalence classes, making well defined.  We now show is a homomorphism of groups. Given , we have .  Lastly one easily shows that is invertible, with inverse .   "
},
{
  "id": "d_pointed_space",
  "level": "2",
  "url": "s_fundamental_group.html#d_pointed_space",
  "type": "Definition",
  "number": "2.2.5",
  "title": "Pointed space.",
  "body": " Pointed space   Given a topological space and element , the pair is called a pointed space with base point  . Given pointed spaces and , a map of pointed spaces (or based map ) is a continuous function satisfying . We write in this case.   "
},
{
  "id": "th_fund_group_function",
  "level": "2",
  "url": "s_fundamental_group.html#th_fund_group_function",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "Fundamental group functor.",
  "body": " Fundamental group functor      Let be a map of pointed spaces. The rule defines a group homomorphism .    Given maps of pointed spaces and , we have .    Let be the identity function for all . For any , we have , the identity group homomorphism on .          It is clear that the rule defines a map from to . We must show that it is well defined on equivalence classes. Assume are path homotopic, and let be a path homotopy from to . It is easy to see that is a path homotopy from to . Thus implies , showing is a well-defined map from to .  Now we show is a homomorphism of groups. We will use the (easy to show fact) general fact that given and continuous , we have . Now, given , we have .    For any we have . This proves .    For any we have . This proves is the identity homomorphism on .      "
},
{
  "id": "cor_fund_group",
  "level": "2",
  "url": "s_fundamental_group.html#cor_fund_group",
  "type": "Corollary",
  "number": "2.2.7",
  "title": "Fundamental group invariance.",
  "body": " Fundamental group invariance   Let be a homemorphism, let , and let . The map is an isomorphism of groups.    If is a homemorphism, then defines a map of pointed spaces from to . Since and we have . This shows that is the inverse of , and thus that is an isomorphism.   "
},
{
  "id": "s_covering_spaces",
  "level": "1",
  "url": "s_covering_spaces.html",
  "type": "Section",
  "number": "2.3",
  "title": "Covering spaces",
  "body": " Covering spaces   Covering map   Let be a surjective continuous map. A set is evenly covered by if can be written as a disjoint union of open sets . The collection and is a homeomorphism for all .  The collection is called a partition of into slices .  If every has an open neighborhood that is evenly covered by , then is called a covering map and is called a covering space of .     Trivial covering   Let be topological spaces, and suppose is discrete. The projection is a covering map. We call this a trivial covering of .    Since is discrete, is open for any . Given any open , the preimage is the disjoint union of the open sets , each of which is homeomorphic to by the map sending to . Thus all open sets of are evenly covered by .  This is called a trivial covering because the space is homeomorphic to a a disjoint union of copies of Alternatively, since is discrete, the map is a homeomorphism of with the disjoint union , where is a copy of .     Covering map   The open map defined as is a covering map.    Let , and let . We have      Covering map properties   Let be a covering map.    For all , the preimage is a discrete subspace of .    For all there exists an open set containing such that is a homeomorphism: , is a local homeomorphism .     is an open map.     is a quotient map.    If is connected and for some and , then for all . We call a -fold covering in this case.      The proofs of these statements are left as exercises.     -fold covering of   The map sending a point to is an -fold cover of .    Homework exercise.     Covering of   Recall that is the quotient space obtained by identifying elements of that are scalar multiples of one another. We showed in a homeowork that is homeomorphic to the quotient of obtained by identifying antipodal points. The corresponding quotient map is a covering map.    For a point , let be its antipode: using the vector space structure of , if , then . It is easy to see that the map defines a homeomorphism on .  First we show that is an open map. Let be open. Since is a quotient map, the set is open if and only if its preimage is open. Since if and only if , we see that , where . Since the antipodal map is a homeomorphism, and since is open, is open. It follows that is open. We conclude that is open.  We now show that is a double covering of . Given any , let , and let . By the argument above, we have , where and are both open sets. Furthermore, since , we have . Finally, since is an open map, and since is a bijection onto (since ) we conclude that is a homeomorphism onto . This proves is a covering map. Since for all , we see that is a double covering.   A double cover of   A double cover of       Not all quotient maps are covering maps   The map , defined as is not a covering.    The given map is not open ( is not open in ), hence cannot be a covering map by (3) of . Alternatively, we have and , in violation of (5) of .     Local homeomorphism not sufficient   The map defined as satisfies (1)-(4) of , but is not a covering map.    Since is just the restriction of the covering map from to the open set , we easily see that it satisfies (1)-(4). However, there is no open neighborhood of that is evenly covered by . Indeed, assume by contradiction that was such an open neighborhood. Shrinking if necessary, we can assume that , where . But then among the slices in the preimage of we would have the set , and is not a homeomorphism onto .     Covering map constructions      If and are covering maps, then the map defined as is a covering map.    If is a covering map and is a subpace, then is a covering map.    If is a covering map and and are homeomorphisms, then and are covering maps.       We prove (1). It is clear that the map is continuous and surjective. Given , let be open neighborhoods of and , respectively, that are evenly covered by and , respectively. Let and be the corresponding partitions of their respective preimages into slices. We have . It is easy to see that this is a disjoint union of open sets, and that is a homeomorphism onto for all . Thus every element of has an open neighborhood that is evenly covered by .     Covering of torus   Let be the usual covering of the circle. The map is a covering of the torus.   A covering of the torus   A covering of the torus       Covering of figure eight  The figure eight is the subpsace of defined as , and let , the preimage of under the covering map from . By , is a covering map.   A cover of the figure eight   A cover of the figure eight     "
},
{
  "id": "d_evenly_covered",
  "level": "2",
  "url": "s_covering_spaces.html#d_evenly_covered",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Covering map.",
  "body": " Covering map   Let be a surjective continuous map. A set is evenly covered by if can be written as a disjoint union of open sets . The collection and is a homeomorphism for all .  The collection is called a partition of into slices .  If every has an open neighborhood that is evenly covered by , then is called a covering map and is called a covering space of .   "
},
{
  "id": "eg_trivial_cover",
  "level": "2",
  "url": "s_covering_spaces.html#eg_trivial_cover",
  "type": "Example",
  "number": "2.3.2",
  "title": "Trivial covering.",
  "body": " Trivial covering   Let be topological spaces, and suppose is discrete. The projection is a covering map. We call this a trivial covering of .    Since is discrete, is open for any . Given any open , the preimage is the disjoint union of the open sets , each of which is homeomorphic to by the map sending to . Thus all open sets of are evenly covered by .  This is called a trivial covering because the space is homeomorphic to a a disjoint union of copies of Alternatively, since is discrete, the map is a homeomorphism of with the disjoint union , where is a copy of .   "
},
{
  "id": "eg_covering_circle",
  "level": "2",
  "url": "s_covering_spaces.html#eg_covering_circle",
  "type": "Example",
  "number": "2.3.3",
  "title": "Covering map <span class=\"process-math\">\\(\\R\\rightarrow S^1\\)<\/span>.",
  "body": " Covering map   The open map defined as is a covering map.    Let , and let . We have    "
},
{
  "id": "th_covering_map_props",
  "level": "2",
  "url": "s_covering_spaces.html#th_covering_map_props",
  "type": "Theorem",
  "number": "2.3.4",
  "title": "Covering map properties.",
  "body": " Covering map properties   Let be a covering map.    For all , the preimage is a discrete subspace of .    For all there exists an open set containing such that is a homeomorphism: , is a local homeomorphism .     is an open map.     is a quotient map.    If is connected and for some and , then for all . We call a -fold covering in this case.      The proofs of these statements are left as exercises.   "
},
{
  "id": "eg_nfold_covering",
  "level": "2",
  "url": "s_covering_spaces.html#eg_nfold_covering",
  "type": "Example",
  "number": "2.3.5",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-fold covering of <span class=\"process-math\">\\(S^1\\)<\/span>.",
  "body": " -fold covering of   The map sending a point to is an -fold cover of .    Homework exercise.   "
},
{
  "id": "eg_covering_P2",
  "level": "2",
  "url": "s_covering_spaces.html#eg_covering_P2",
  "type": "Example",
  "number": "2.3.6",
  "title": "Covering of <span class=\"process-math\">\\(\\mathbb{P}^2\\)<\/span>.",
  "body": " Covering of   Recall that is the quotient space obtained by identifying elements of that are scalar multiples of one another. We showed in a homeowork that is homeomorphic to the quotient of obtained by identifying antipodal points. The corresponding quotient map is a covering map.    For a point , let be its antipode: using the vector space structure of , if , then . It is easy to see that the map defines a homeomorphism on .  First we show that is an open map. Let be open. Since is a quotient map, the set is open if and only if its preimage is open. Since if and only if , we see that , where . Since the antipodal map is a homeomorphism, and since is open, is open. It follows that is open. We conclude that is open.  We now show that is a double covering of . Given any , let , and let . By the argument above, we have , where and are both open sets. Furthermore, since , we have . Finally, since is an open map, and since is a bijection onto (since ) we conclude that is a homeomorphism onto . This proves is a covering map. Since for all , we see that is a double covering.   A double cover of   A double cover of     "
},
{
  "id": "s_covering_spaces-8",
  "level": "2",
  "url": "s_covering_spaces.html#s_covering_spaces-8",
  "type": "Example",
  "number": "2.3.8",
  "title": "Not all quotient maps are covering maps.",
  "body": " Not all quotient maps are covering maps   The map , defined as is not a covering.    The given map is not open ( is not open in ), hence cannot be a covering map by (3) of . Alternatively, we have and , in violation of (5) of .   "
},
{
  "id": "s_covering_spaces-9",
  "level": "2",
  "url": "s_covering_spaces.html#s_covering_spaces-9",
  "type": "Example",
  "number": "2.3.9",
  "title": "Local homeomorphism not sufficient.",
  "body": " Local homeomorphism not sufficient   The map defined as satisfies (1)-(4) of , but is not a covering map.    Since is just the restriction of the covering map from to the open set , we easily see that it satisfies (1)-(4). However, there is no open neighborhood of that is evenly covered by . Indeed, assume by contradiction that was such an open neighborhood. Shrinking if necessary, we can assume that , where . But then among the slices in the preimage of we would have the set , and is not a homeomorphism onto .   "
},
{
  "id": "th_covering_map_construction",
  "level": "2",
  "url": "s_covering_spaces.html#th_covering_map_construction",
  "type": "Theorem",
  "number": "2.3.10",
  "title": "Covering map constructions.",
  "body": " Covering map constructions      If and are covering maps, then the map defined as is a covering map.    If is a covering map and is a subpace, then is a covering map.    If is a covering map and and are homeomorphisms, then and are covering maps.       We prove (1). It is clear that the map is continuous and surjective. Given , let be open neighborhoods of and , respectively, that are evenly covered by and , respectively. Let and be the corresponding partitions of their respective preimages into slices. We have . It is easy to see that this is a disjoint union of open sets, and that is a homeomorphism onto for all . Thus every element of has an open neighborhood that is evenly covered by .   "
},
{
  "id": "eg_cover_torus",
  "level": "2",
  "url": "s_covering_spaces.html#eg_cover_torus",
  "type": "Example",
  "number": "2.3.11",
  "title": "Covering of torus.",
  "body": " Covering of torus   Let be the usual covering of the circle. The map is a covering of the torus.   A covering of the torus   A covering of the torus     "
},
{
  "id": "eg_cover_figure8",
  "level": "2",
  "url": "s_covering_spaces.html#eg_cover_figure8",
  "type": "Example",
  "number": "2.3.13",
  "title": "Covering of figure eight.",
  "body": " Covering of figure eight  The figure eight is the subpsace of defined as , and let , the preimage of under the covering map from . By , is a covering map.   A cover of the figure eight   A cover of the figure eight    "
},
{
  "id": "s_coveringmaps_fundgroups",
  "level": "1",
  "url": "s_coveringmaps_fundgroups.html",
  "type": "Section",
  "number": "2.4",
  "title": "Lifting correspondence",
  "body": " Lifting correspondence   Lifting   Let and be continuous maps. A lifting of to is a continuous map satisfying .  Lifting diagram        Uniqueness of liftings   Let be a covering map, let be connected, and let be a continuous map. If are liftings of to , and if for some , then . In other words, if is connected and is a covering map, then a lifting of to , if it exists, is uniquely determined by its value at any element of .  Unique lifting diagram       Assume are liftings of to , satisfying . Let . We will show that is open and closed. Since ( ) and is connected, it follows that ( ) and hence that .  Take any , and let . Since is a covering map, we can find an open neighborhood that is evenly covered by . Let be the partition of into slices. We will show that if , then there is an open set with ; and if , then there is an open set with . It will follow that is both open and closed, as desired.   Case: . Since , and since (by definition of ), we have for some . Consider the open set . We have , since . Furthermore, for any , since , since , and since is a homeomorphism, we conclude that . Thus , as desired.   Case: . By definition of , this means . Since , there are such that , and . Let . This is an open set containing , and for all we have and . Since , we have . Thus .     Lifting to covering spaces   Let be a covering map. Fix and let .   Every path satisfying lifts uniquely to a path satisfying .    Every continuous map satisfying lifts uniquely to a continuous map satisfying . Furthermore, if is a path homotopy, then is a path homotopy.    Let , and let the corresponding liftings to satisfying . If , then .       Proof of (1)  Uniqueness of the lifting follows from . We now prove that there is such a lifting.  Let be a cover of by open sets evenly covered by . Since is an open cover of the compact metric space , the existence of a Lebesgue number ensures that we can find a subdivision of  that is fine enough to ensure that for all , we have for some .  We now show by induction that for all , the restriction has a lifting satisfying . It will follow that is the lifting we are after.   Base case: . The function , defined as is a lifting of .   Induction step . Assume is a lifting of satisfying . Recall that we have for some open set evenly covered by . Let . Since , there is a unique slice in this partition containing . Since is a homeomorphism, we can define a continuous function as . Since is 1-1 on and since , we have . By the closed pasting lemma, the function defined as is continuous. That is a lifting of satisfying follows from the assumed properties of and the definition of as .    Proof of (2)  The argument here is essentially isomorphic to the one given above, though some minor subtleties creep in due to the slightly more complex domain in play ( as opposed to ). Note first that once again the uniqueness property described follows immediately from .  Let be a cover of by open sets evenly covered by . Since is compact, the open cover has a Lebesgue number  . Pick a subdivision of  fine enough so that the diameter of each subrectangle in the resulting subdivision of is less than . It follows that for all we have for some .  We now endeavor to build a lifting of subrectangle by subrectangle, from the bottom row of subrectangles to the top, working from left to right along each row. In more detail for each pair let the region be the union of the rectangle along with all rectangles to the left or below it. We will show by induction that for all there is a lifting of satisfying . Since the lifting gives us what we want.   Base case . We have , the lower left corner of . By construction, we have , where is an open set evenly covered by . Let be the corresponding partition into slices, and let be the slice containing . Define as . It is easy to see that for all . Since is 1-1 on and , we see that .   Induction step . Pick any pair with and assume that is a lifting of that satisfies . The next region in our procedure is either (a) if ( move to right if you can ), or (b) ( move up a row and start at left ). We show in case (a) that we can extend to this larger region; the argument for case (b) is very similar.  In case (a) we have . Let , a connected set formed as the union of the left and bottom edges of . By construction we have for some open set evenly covered by . Let be its partition into slices. Since and is connected , we must have for one of the slices . (Otherwise we would have a separation of the connected set .) Define as . Arguments very similar to the ones in the previous proof show that and thus the two functions can be pasted together to form the desired lifting of .  Lastly we show that if is a path homotopy, then is a path homotopy. Assume and for all . We have by assumption; let . We must show that and for all . Let . This is a continuous function from to the preimage . Since its image is connected, and since is discrete , this image must be a singleton. Since We conclude that for all . A similar argument, using shows that for all .    Proof of (3)  Assume and let be the path homotopy that witnesses this fact. From (2) we know that lifts uniquely to a path homotopy satisfying for all . Since is a lifting of , we have and . Thus the paths and are liftings of and to . Since and , we conclude from the uniqueness property of liftings that and , as desired.     Lifting correspondence   Let be a covering map. Fix and let . The function , where is the unique lifting of to satisfying , is called the lifting correspondence arising from the covering and choice of .    The fact that the rule gives rise to a well-defined function of sets follows from   Statement (1) of this theorem guarantees the existence and uniqueness of . Note also that since , the value is indeed an element of .  Statement (3) of the theorem ensures that if , then . Indeed, since , we conclude that . In particular, being path homotopic, we must have .     Lifting correspondence   Let be a covering map. Fix , let , and let be the resulting lifting correspondence.    The group homomorphism is an injection.    Let . We have if and only if .    The lifting correspondence gives rise to an injective map . Here is the set of all right cosets of : , . Furthermore the map is bijective if is path connected.      Proof of (1)  Since is a group homomorphism, to show it is injective it suffices to show that . (Recall that the identity element of a fundamental group is .) To this end, suppose satisfies . It follows from the uniqueness property of liftings that and . Since , it follows from (3) of that , and thus . This proves that if , then : , .    Proof of (2)  We prove both implications separately.   Implication: . Assume . By definition of this means the unique lifting satisfying also satisfies . Thus , and we have . Thus .   Implication: . If , then for some . As argued in (1), we have . Thus .    Proof of (3)  First observe that if is path connected, then given any , there is a path . Since , we have , and thus . We conclude that (and ) are surjective in this case.  Next, we show that if , then . Let be the unique liftings of satisfying . Since and , the assumption is equivalent to for some common element . Let be the reverse of . Since this begins where ends, we can take the path product , which is an element of . Now we have . It follows that . Since , we have , as desired.  Lastly, assume , in which case for some , where . We see easily that is well-defined (in terms of the path product) and the usual uniqueness argument shows . We conclude that , as desired.     Fundamental group of   Consider the covering defined as . Let and consider the map . Since is path connected, and since is trivial, we have , and it follows from (3) of that the lifting correspondence is a bijection onto .  We will show that is in fact a group homomorphism hence an isomorphism, but before we do, it is worth making the bijective correspondence between and more explicit. Consider the family of loops defined as . Note that is a path that traverses the circle complete times traveling counterclockwise if and clockwise if . By the paths lift uniquely to paths satisfying . We see easily that is such a lifting for each ; uniqueness then implies that for all . The liftings are just the usual straight line segment parametrizations from to , and thus the lifting correspondence applied to is . The bijective nature of now implies that for , and that . In other words every loop in is path homotopic to for a unique choice of .  To show is a group homomorphism it now suffices to show that . To do so we explicitly identify the unique lifting of . You might have guessed that would do the trick, but notice that this path product is not even well defined since ends at , and begins at 0. This is easily remedied by replacing with the function , where is the translation by operation on . Let . Since and , we see by uniqueness that . Lastly we conclude that , as desired.     Fundamental group of   Let defined as , let . As in the previous example, it follows easily from (3) of that the lifting correspondence associated to the map of pointed sets is a bijection . Consider the family of loops defined as . You find a sketch of some of these loops (and their lifts) in , where I have identified with an embedded surface of in the usual way.  As in , it is easy to see that for all we have , which is the usual line segment parametrization from to . We conclude that , from whence it follows that all loops in starting and ending at are homotopic to for a unique pair . This fact is useful in its own right, but also allows us to show that is in fact a group homomorphism, and hence an isomorphism. The proof proceeds in exactly the same manner as with : again, the only subtlety is finding the unique lift of for any two pairs . This lift turns out to be , where is the translation by operation on .  Some loops on the torus and their lifts   Some loops on the torus       "
},
{
  "id": "d_lifting",
  "level": "2",
  "url": "s_coveringmaps_fundgroups.html#d_lifting",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Lifting.",
  "body": " Lifting   Let and be continuous maps. A lifting of to is a continuous map satisfying .  Lifting diagram      "
},
{
  "id": "lemma_unique_lift",
  "level": "2",
  "url": "s_coveringmaps_fundgroups.html#lemma_unique_lift",
  "type": "Lemma",
  "number": "2.4.2",
  "title": "Uniqueness of liftings.",
  "body": " Uniqueness of liftings   Let be a covering map, let be connected, and let be a continuous map. If are liftings of to , and if for some , then . In other words, if is connected and is a covering map, then a lifting of to , if it exists, is uniquely determined by its value at any element of .  Unique lifting diagram       Assume are liftings of to , satisfying . Let . We will show that is open and closed. Since ( ) and is connected, it follows that ( ) and hence that .  Take any , and let . Since is a covering map, we can find an open neighborhood that is evenly covered by . Let be the partition of into slices. We will show that if , then there is an open set with ; and if , then there is an open set with . It will follow that is both open and closed, as desired.   Case: . Since , and since (by definition of ), we have for some . Consider the open set . We have , since . Furthermore, for any , since , since , and since is a homeomorphism, we conclude that . Thus , as desired.   Case: . By definition of , this means . Since , there are such that , and . Let . This is an open set containing , and for all we have and . Since , we have . Thus .   "
},
{
  "id": "th_lift_cover",
  "level": "2",
  "url": "s_coveringmaps_fundgroups.html#th_lift_cover",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "Lifting to covering spaces.",
  "body": " Lifting to covering spaces   Let be a covering map. Fix and let .   Every path satisfying lifts uniquely to a path satisfying .    Every continuous map satisfying lifts uniquely to a continuous map satisfying . Furthermore, if is a path homotopy, then is a path homotopy.    Let , and let the corresponding liftings to satisfying . If , then .       Proof of (1)  Uniqueness of the lifting follows from . We now prove that there is such a lifting.  Let be a cover of by open sets evenly covered by . Since is an open cover of the compact metric space , the existence of a Lebesgue number ensures that we can find a subdivision of  that is fine enough to ensure that for all , we have for some .  We now show by induction that for all , the restriction has a lifting satisfying . It will follow that is the lifting we are after.   Base case: . The function , defined as is a lifting of .   Induction step . Assume is a lifting of satisfying . Recall that we have for some open set evenly covered by . Let . Since , there is a unique slice in this partition containing . Since is a homeomorphism, we can define a continuous function as . Since is 1-1 on and since , we have . By the closed pasting lemma, the function defined as is continuous. That is a lifting of satisfying follows from the assumed properties of and the definition of as .    Proof of (2)  The argument here is essentially isomorphic to the one given above, though some minor subtleties creep in due to the slightly more complex domain in play ( as opposed to ). Note first that once again the uniqueness property described follows immediately from .  Let be a cover of by open sets evenly covered by . Since is compact, the open cover has a Lebesgue number  . Pick a subdivision of  fine enough so that the diameter of each subrectangle in the resulting subdivision of is less than . It follows that for all we have for some .  We now endeavor to build a lifting of subrectangle by subrectangle, from the bottom row of subrectangles to the top, working from left to right along each row. In more detail for each pair let the region be the union of the rectangle along with all rectangles to the left or below it. We will show by induction that for all there is a lifting of satisfying . Since the lifting gives us what we want.   Base case . We have , the lower left corner of . By construction, we have , where is an open set evenly covered by . Let be the corresponding partition into slices, and let be the slice containing . Define as . It is easy to see that for all . Since is 1-1 on and , we see that .   Induction step . Pick any pair with and assume that is a lifting of that satisfies . The next region in our procedure is either (a) if ( move to right if you can ), or (b) ( move up a row and start at left ). We show in case (a) that we can extend to this larger region; the argument for case (b) is very similar.  In case (a) we have . Let , a connected set formed as the union of the left and bottom edges of . By construction we have for some open set evenly covered by . Let be its partition into slices. Since and is connected , we must have for one of the slices . (Otherwise we would have a separation of the connected set .) Define as . Arguments very similar to the ones in the previous proof show that and thus the two functions can be pasted together to form the desired lifting of .  Lastly we show that if is a path homotopy, then is a path homotopy. Assume and for all . We have by assumption; let . We must show that and for all . Let . This is a continuous function from to the preimage . Since its image is connected, and since is discrete , this image must be a singleton. Since We conclude that for all . A similar argument, using shows that for all .    Proof of (3)  Assume and let be the path homotopy that witnesses this fact. From (2) we know that lifts uniquely to a path homotopy satisfying for all . Since is a lifting of , we have and . Thus the paths and are liftings of and to . Since and , we conclude from the uniqueness property of liftings that and , as desired.   "
},
{
  "id": "d_lifting_correspondence",
  "level": "2",
  "url": "s_coveringmaps_fundgroups.html#d_lifting_correspondence",
  "type": "Definition",
  "number": "2.4.4",
  "title": "Lifting correspondence.",
  "body": " Lifting correspondence   Let be a covering map. Fix and let . The function , where is the unique lifting of to satisfying , is called the lifting correspondence arising from the covering and choice of .    The fact that the rule gives rise to a well-defined function of sets follows from   Statement (1) of this theorem guarantees the existence and uniqueness of . Note also that since , the value is indeed an element of .  Statement (3) of the theorem ensures that if , then . Indeed, since , we conclude that . In particular, being path homotopic, we must have .   "
},
{
  "id": "th_lifting_correspondence",
  "level": "2",
  "url": "s_coveringmaps_fundgroups.html#th_lifting_correspondence",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "Lifting correspondence.",
  "body": " Lifting correspondence   Let be a covering map. Fix , let , and let be the resulting lifting correspondence.    The group homomorphism is an injection.    Let . We have if and only if .    The lifting correspondence gives rise to an injective map . Here is the set of all right cosets of : , . Furthermore the map is bijective if is path connected.      Proof of (1)  Since is a group homomorphism, to show it is injective it suffices to show that . (Recall that the identity element of a fundamental group is .) To this end, suppose satisfies . It follows from the uniqueness property of liftings that and . Since , it follows from (3) of that , and thus . This proves that if , then : , .    Proof of (2)  We prove both implications separately.   Implication: . Assume . By definition of this means the unique lifting satisfying also satisfies . Thus , and we have . Thus .   Implication: . If , then for some . As argued in (1), we have . Thus .    Proof of (3)  First observe that if is path connected, then given any , there is a path . Since , we have , and thus . We conclude that (and ) are surjective in this case.  Next, we show that if , then . Let be the unique liftings of satisfying . Since and , the assumption is equivalent to for some common element . Let be the reverse of . Since this begins where ends, we can take the path product , which is an element of . Now we have . It follows that . Since , we have , as desired.  Lastly, assume , in which case for some , where . We see easily that is well-defined (in terms of the path product) and the usual uniqueness argument shows . We conclude that , as desired.   "
},
{
  "id": "eg_fund_grp_S1",
  "level": "2",
  "url": "s_coveringmaps_fundgroups.html#eg_fund_grp_S1",
  "type": "Example",
  "number": "2.4.6",
  "title": "Fundamental group of <span class=\"process-math\">\\(S^1\\)<\/span>.",
  "body": " Fundamental group of   Consider the covering defined as . Let and consider the map . Since is path connected, and since is trivial, we have , and it follows from (3) of that the lifting correspondence is a bijection onto .  We will show that is in fact a group homomorphism hence an isomorphism, but before we do, it is worth making the bijective correspondence between and more explicit. Consider the family of loops defined as . Note that is a path that traverses the circle complete times traveling counterclockwise if and clockwise if . By the paths lift uniquely to paths satisfying . We see easily that is such a lifting for each ; uniqueness then implies that for all . The liftings are just the usual straight line segment parametrizations from to , and thus the lifting correspondence applied to is . The bijective nature of now implies that for , and that . In other words every loop in is path homotopic to for a unique choice of .  To show is a group homomorphism it now suffices to show that . To do so we explicitly identify the unique lifting of . You might have guessed that would do the trick, but notice that this path product is not even well defined since ends at , and begins at 0. This is easily remedied by replacing with the function , where is the translation by operation on . Let . Since and , we see by uniqueness that . Lastly we conclude that , as desired.   "
},
{
  "id": "eg_fund_grp_T",
  "level": "2",
  "url": "s_coveringmaps_fundgroups.html#eg_fund_grp_T",
  "type": "Example",
  "number": "2.4.7",
  "title": "Fundamental group of <span class=\"process-math\">\\(T=S^1\\times S^1\\)<\/span>.",
  "body": " Fundamental group of   Let defined as , let . As in the previous example, it follows easily from (3) of that the lifting correspondence associated to the map of pointed sets is a bijection . Consider the family of loops defined as . You find a sketch of some of these loops (and their lifts) in , where I have identified with an embedded surface of in the usual way.  As in , it is easy to see that for all we have , which is the usual line segment parametrization from to . We conclude that , from whence it follows that all loops in starting and ending at are homotopic to for a unique pair . This fact is useful in its own right, but also allows us to show that is in fact a group homomorphism, and hence an isomorphism. The proof proceeds in exactly the same manner as with : again, the only subtlety is finding the unique lift of for any two pairs . This lift turns out to be , where is the translation by operation on .  Some loops on the torus and their lifts   Some loops on the torus      "
},
{
  "id": "s_retract_Brouwer",
  "level": "1",
  "url": "s_retract_Brouwer.html",
  "type": "Section",
  "number": "2.5",
  "title": "Retractions and Brouwer fixed point",
  "body": " Retractions and Brouwer fixed point   Retraction   Let be a subspace of and let be the corresponding inclusion map. A retraction of onto is a continuous map satisfying , or equivalently, . The subspace is called a retract of in this case.     is retract of   Show that is a retract of .         -Ball   Fix a positive integer . We denote by the closed unit ball centered at : , .     is not a retract of   There is no retraction of onto .    Let be the inclusion map. Assume by contradiction that there is a retraction . Let . Since , we have . Let and be the corresponding homomorphisms of fundamental groups. Since , we have by . This implies is a surjection: a contradiction since ( is convex) and .     Nullhomotopies from   Let be a continuous map. The following statements are equivalent.    is nullhomotpic.     extends to a continuous map .    For all the map is the trivial homomorphism.       Proof:  Assume is nullhomotopic to the constant function , and let be a homotopy from to . Our basic approach is to (a) show that is a quotient of , and use the to produce the desired extension .  To realize as a quotient of we wish to map each copy of to the circle for each . The map defined as accomplishes this for us. We see by the usual arguments that is continuous, and our conceptual description of shows that it is surjective. Since is compact and is Hausdorff, the map is closed, and hence a quotient map. Lastly, observe that is bijective for all , and collapses all points of to . It follows that . Now return to the homotopy . Since for it satisfies , we see from that it is well-defined on the fibers of . By there is a continuous map satisfying . Observe that for all , and hence we have for all . This proves is an extension of , as desired.     Some non-nullhomotopies   The following maps from are not nullhomotpic:   the inclusion map     the identity map .        Nonvanishing vector fields on   Let be a continuous function: , is a continuous vector field on . If for all ( , is nonvanishing ), then there exist nonzero elements such that for some positive and for some positive . In other words, there is a point in where the vector field points directly outward, and a point where the vector field points directly inward.    Suppose first by contradiction that there is no point where points inward. By assumption we have , which restricts to continuous function . By  is nullhomotpic. We will show that is also homotopic to the inclusion : a contradiction since is not nullhomotpic by .  By abuse of notation, we denote . To see , consider the function . It is clear that defines a continuous function to , and we have and . Thus it appears we have our homotopy. However, we must show that : that is, we must show for all and . But if were an element satisfying for some , then we would have (since ) and , where . This is impossible by our original assumption, since then would point directly inward at .  We've shown that {\\em any} nonvanishing vector field on must point directly inward at some point. Thus for any nonvanishing vector field , the nonvanishing vector field has a point in where it points directly inward. The vector field then points directly outward at , as desired.     Brouwer fixed-point theorem (disc)   If is continuous, then has a fixed point: , we have for some point .    Assume by contradiction that for all . The map is a then a nonvanishing vector field on . By there is a point such that for some positive . But then : a contradiction! Thus must have a fixed point.     Eigenvalues of positive matrices   If is a matrix with positive entries, then has a positive real eigenvalue.    "
},
{
  "id": "d_retract",
  "level": "2",
  "url": "s_retract_Brouwer.html#d_retract",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Retraction.",
  "body": " Retraction   Let be a subspace of and let be the corresponding inclusion map. A retraction of onto is a continuous map satisfying , or equivalently, . The subspace is called a retract of in this case.   "
},
{
  "id": "s_retract_Brouwer-3",
  "level": "2",
  "url": "s_retract_Brouwer.html#s_retract_Brouwer-3",
  "type": "Example",
  "number": "2.5.2",
  "title": "<span class=\"process-math\">\\(S^1\\)<\/span> is retract of <span class=\"process-math\">\\(\\R^2-\\{\\boldzero\\}\\)<\/span>.",
  "body": " is retract of   Show that is a retract of .       "
},
{
  "id": "d_Bn",
  "level": "2",
  "url": "s_retract_Brouwer.html#d_Bn",
  "type": "Definition",
  "number": "2.5.3",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-Ball.",
  "body": " -Ball   Fix a positive integer . We denote by the closed unit ball centered at : , .   "
},
{
  "id": "th_S1_not_retract",
  "level": "2",
  "url": "s_retract_Brouwer.html#th_S1_not_retract",
  "type": "Theorem",
  "number": "2.5.4",
  "title": "<span class=\"process-math\">\\(S^1\\)<\/span> is not a retract of <span class=\"process-math\">\\(B^2\\)<\/span>.",
  "body": " is not a retract of   There is no retraction of onto .    Let be the inclusion map. Assume by contradiction that there is a retraction . Let . Since , we have . Let and be the corresponding homomorphisms of fundamental groups. Since , we have by . This implies is a surjection: a contradiction since ( is convex) and .   "
},
{
  "id": "th_nullhomotopic_S1",
  "level": "2",
  "url": "s_retract_Brouwer.html#th_nullhomotopic_S1",
  "type": "Theorem",
  "number": "2.5.5",
  "title": "Nullhomotopies from <span class=\"process-math\">\\(S^1\\)<\/span>.",
  "body": " Nullhomotopies from   Let be a continuous map. The following statements are equivalent.    is nullhomotpic.     extends to a continuous map .    For all the map is the trivial homomorphism.       Proof:  Assume is nullhomotopic to the constant function , and let be a homotopy from to . Our basic approach is to (a) show that is a quotient of , and use the to produce the desired extension .  To realize as a quotient of we wish to map each copy of to the circle for each . The map defined as accomplishes this for us. We see by the usual arguments that is continuous, and our conceptual description of shows that it is surjective. Since is compact and is Hausdorff, the map is closed, and hence a quotient map. Lastly, observe that is bijective for all , and collapses all points of to . It follows that . Now return to the homotopy . Since for it satisfies , we see from that it is well-defined on the fibers of . By there is a continuous map satisfying . Observe that for all , and hence we have for all . This proves is an extension of , as desired.   "
},
{
  "id": "cor_nullhomotopic_S1",
  "level": "2",
  "url": "s_retract_Brouwer.html#cor_nullhomotopic_S1",
  "type": "Corollary",
  "number": "2.5.6",
  "title": "Some non-nullhomotopies.",
  "body": " Some non-nullhomotopies   The following maps from are not nullhomotpic:   the inclusion map     the identity map .      "
},
{
  "id": "th_nonvanishing_vectorfield",
  "level": "2",
  "url": "s_retract_Brouwer.html#th_nonvanishing_vectorfield",
  "type": "Theorem",
  "number": "2.5.7",
  "title": "Nonvanishing vector fields on <span class=\"process-math\">\\(B^2\\)<\/span>.",
  "body": " Nonvanishing vector fields on   Let be a continuous function: , is a continuous vector field on . If for all ( , is nonvanishing ), then there exist nonzero elements such that for some positive and for some positive . In other words, there is a point in where the vector field points directly outward, and a point where the vector field points directly inward.    Suppose first by contradiction that there is no point where points inward. By assumption we have , which restricts to continuous function . By  is nullhomotpic. We will show that is also homotopic to the inclusion : a contradiction since is not nullhomotpic by .  By abuse of notation, we denote . To see , consider the function . It is clear that defines a continuous function to , and we have and . Thus it appears we have our homotopy. However, we must show that : that is, we must show for all and . But if were an element satisfying for some , then we would have (since ) and , where . This is impossible by our original assumption, since then would point directly inward at .  We've shown that {\\em any} nonvanishing vector field on must point directly inward at some point. Thus for any nonvanishing vector field , the nonvanishing vector field has a point in where it points directly inward. The vector field then points directly outward at , as desired.   "
},
{
  "id": "th_Brouwer_fixed_point",
  "level": "2",
  "url": "s_retract_Brouwer.html#th_Brouwer_fixed_point",
  "type": "Theorem",
  "number": "2.5.8",
  "title": "Brouwer fixed-point theorem (disc).",
  "body": " Brouwer fixed-point theorem (disc)   If is continuous, then has a fixed point: , we have for some point .    Assume by contradiction that for all . The map is a then a nonvanishing vector field on . By there is a point such that for some positive . But then : a contradiction! Thus must have a fixed point.   "
},
{
  "id": "cor_positive_eigenvalues",
  "level": "2",
  "url": "s_retract_Brouwer.html#cor_positive_eigenvalues",
  "type": "Corollary",
  "number": "2.5.9",
  "title": "Eigenvalues of positive matrices.",
  "body": " Eigenvalues of positive matrices   If is a matrix with positive entries, then has a positive real eigenvalue.   "
},
{
  "id": "s_deformation_retract",
  "level": "1",
  "url": "s_deformation_retract.html",
  "type": "Section",
  "number": "2.6",
  "title": "Deformation retract",
  "body": " Deformation retract   Homotopic maps and fundamental groups   Let be maps of pointed spaces. If there is a homotopy from to satisfying for all , then we have as group homomorphisms from to .    By definition of , we must show that for all loops : equivalently, we must show . This of course is where comes in. Define as . We see that , showing that is a homotopy from to . It remains to show it is a path homotopy. This follows since for all .     Fundamental groups: and   Let , let be the inclusion map, and let . The function is a retraction map that induces an isomorphism .    It is clear that the given is a retraction. Letting be the inclusion, we have and hence .  We are halfway to showing . It remains to show , and to do this we use the lemmma. Specifically we show that and are homotopic via a homotopy as described in . Since , it is easy to see that  is a homoto\\boldx_0y from to . Furthermore, we have , using the fact that .     Deformation retract   Let be a subspace of . A deformation retraction from to is a homotopy satisfying the conditions below. (It will help to think of in the usual way.)    for all ( );     for all ( );     for all and ( for all ).   In this case is called a deformation retract of .  Letting be defined as , we see that is a retraction from to , and is a homotopy from to , where is the inclusion map.     Deformation retract  Loosely is a deformation retract of if there is a retraction , and this retraction is homotopic to the identity function on .    Deformation retract and fundamental groups   Let be a deformation retract of . The inclusion gives rise to an isomorphism for any .    The proof is essentially identical to the one provided for . As stated in the , the map      minus axis  Let be with the the -axis removed. Show that is a deformation retract of . Conclude that for any .    minus circle and -axis  Let be with the circle in the -plane and the -axis removed. Show that the torus obtained by revolving the circle is a deformation retract of . Conclude that for any .    Doubly punctured plane, figure eight, theta space  Let , where . Show that the given is a deformation retract of :   Figure eight   , where ,     Theta space   ( , circle union diameter)      "
},
{
  "id": "lemma_homotopic_fund_grp",
  "level": "2",
  "url": "s_deformation_retract.html#lemma_homotopic_fund_grp",
  "type": "Lemma",
  "number": "2.6.1",
  "title": "Homotopic maps and fundamental groups.",
  "body": " Homotopic maps and fundamental groups   Let be maps of pointed spaces. If there is a homotopy from to satisfying for all , then we have as group homomorphisms from to .    By definition of , we must show that for all loops : equivalently, we must show . This of course is where comes in. Define as . We see that , showing that is a homotopy from to . It remains to show it is a path homotopy. This follows since for all .   "
},
{
  "id": "th_Sn_Rn_minus_pt",
  "level": "2",
  "url": "s_deformation_retract.html#th_Sn_Rn_minus_pt",
  "type": "Theorem",
  "number": "2.6.2",
  "title": "Fundamental groups: <span class=\"process-math\">\\(S^n\\)<\/span> and <span class=\"process-math\">\\(\\R^{n+1}-\\{\\boldzero\\}\\)<\/span>.",
  "body": " Fundamental groups: and   Let , let be the inclusion map, and let . The function is a retraction map that induces an isomorphism .    It is clear that the given is a retraction. Letting be the inclusion, we have and hence .  We are halfway to showing . It remains to show , and to do this we use the lemmma. Specifically we show that and are homotopic via a homotopy as described in . Since , it is easy to see that  is a homoto\\boldx_0y from to . Furthermore, we have , using the fact that .   "
},
{
  "id": "d_deformation_retract",
  "level": "2",
  "url": "s_deformation_retract.html#d_deformation_retract",
  "type": "Definition",
  "number": "2.6.3",
  "title": "Deformation retract.",
  "body": " Deformation retract   Let be a subspace of . A deformation retraction from to is a homotopy satisfying the conditions below. (It will help to think of in the usual way.)    for all ( );     for all ( );     for all and ( for all ).   In this case is called a deformation retract of .  Letting be defined as , we see that is a retraction from to , and is a homotopy from to , where is the inclusion map.   "
},
{
  "id": "s_deformation_retract-5",
  "level": "2",
  "url": "s_deformation_retract.html#s_deformation_retract-5",
  "type": "Remark",
  "number": "2.6.4",
  "title": "Deformation retract.",
  "body": " Deformation retract  Loosely is a deformation retract of if there is a retraction , and this retraction is homotopic to the identity function on .  "
},
{
  "id": "th_deformation_retract",
  "level": "2",
  "url": "s_deformation_retract.html#th_deformation_retract",
  "type": "Theorem",
  "number": "2.6.5",
  "title": "Deformation retract and fundamental groups.",
  "body": " Deformation retract and fundamental groups   Let be a deformation retract of . The inclusion gives rise to an isomorphism for any .    The proof is essentially identical to the one provided for . As stated in the , the map    "
},
{
  "id": "eg_R2",
  "level": "2",
  "url": "s_deformation_retract.html#eg_R2",
  "type": "Example",
  "number": "2.6.6",
  "title": "<span class=\"process-math\">\\(\\R^3\\)<\/span> minus axis.",
  "body": " minus axis  Let be with the the -axis removed. Show that is a deformation retract of . Conclude that for any .  "
},
{
  "id": "s_deformation_retract-8",
  "level": "2",
  "url": "s_deformation_retract.html#s_deformation_retract-8",
  "type": "Example",
  "number": "2.6.7",
  "title": "<span class=\"process-math\">\\(\\R^3\\)<\/span> minus circle and <span class=\"process-math\">\\(z\\)<\/span>-axis.",
  "body": " minus circle and -axis  Let be with the circle in the -plane and the -axis removed. Show that the torus obtained by revolving the circle is a deformation retract of . Conclude that for any .  "
},
{
  "id": "eg_doubly_eight_theta",
  "level": "2",
  "url": "s_deformation_retract.html#eg_doubly_eight_theta",
  "type": "Example",
  "number": "2.6.8",
  "title": "Doubly punctured plane, figure eight, theta space.",
  "body": " Doubly punctured plane, figure eight, theta space  Let , where . Show that the given is a deformation retract of :   Figure eight   , where ,     Theta space   ( , circle union diameter)     "
},
{
  "id": "s_homotopy_type",
  "level": "1",
  "url": "s_homotopy_type.html",
  "type": "Section",
  "number": "2.7",
  "title": "Homotopty equivalence",
  "body": " Homotopty equivalence   Homotopy equivalence   A continuous function is a homotopy equivalence if there exists a continuous map such that and .  When this is the case and are called homotopy inverses one another; and and are said to be homotopy equivalent and have the same homotopy type .     Deformation retract   Show that if is a deformation retract, then the inclusion map is a homotopy equivalence.    Let be a deformation retraction from to . We have seen that the function is a contraction to satisfying (and hence ) and .    Our goal is to show that if is a homotopy equivalence, then is an isomorphism. To do so we need a strengthening of .   Homotopic maps and fundamental group revisited   Let be homotopic, and let be a homotopy from to . Fix , set and , and let and be the corresponding group homomorphisms. We have , where is the group isomorphism arising from the path defined as .  Commutative diagram        Homotopic maps and fundamental groups   Suppose are homotopic. Fix , let and , and let and be the corresponding group homomorphisms. The group homomorphism is injective (resp. surjective, resp. trivial) if and only if is injective (resp. surjective, resp. trivial). In particular, if is nullhomotopic, then is trivial.     Homotopy equivalence and fundamental groups   Assume is a homotopy equivalence. Given , let . The map is an isomorphism.    "
},
{
  "id": "d_homotopy_equivalence",
  "level": "2",
  "url": "s_homotopy_type.html#d_homotopy_equivalence",
  "type": "Definition",
  "number": "2.7.1",
  "title": "Homotopy equivalence.",
  "body": " Homotopy equivalence   A continuous function is a homotopy equivalence if there exists a continuous map such that and .  When this is the case and are called homotopy inverses one another; and and are said to be homotopy equivalent and have the same homotopy type .   "
},
{
  "id": "eg_deformation_retract",
  "level": "2",
  "url": "s_homotopy_type.html#eg_deformation_retract",
  "type": "Example",
  "number": "2.7.2",
  "title": "Deformation retract.",
  "body": " Deformation retract   Show that if is a deformation retract, then the inclusion map is a homotopy equivalence.    Let be a deformation retraction from to . We have seen that the function is a contraction to satisfying (and hence ) and .   "
},
{
  "id": "lemmma_homotopic_fund_grp_2",
  "level": "2",
  "url": "s_homotopy_type.html#lemmma_homotopic_fund_grp_2",
  "type": "Lemma",
  "number": "2.7.3",
  "title": "Homotopic maps and fundamental group revisited.",
  "body": " Homotopic maps and fundamental group revisited   Let be homotopic, and let be a homotopy from to . Fix , set and , and let and be the corresponding group homomorphisms. We have , where is the group isomorphism arising from the path defined as .  Commutative diagram      "
},
{
  "id": "cor_homotopic_maps",
  "level": "2",
  "url": "s_homotopy_type.html#cor_homotopic_maps",
  "type": "Corollary",
  "number": "2.7.4",
  "title": "Homotopic maps and fundamental groups.",
  "body": " Homotopic maps and fundamental groups   Suppose are homotopic. Fix , let and , and let and be the corresponding group homomorphisms. The group homomorphism is injective (resp. surjective, resp. trivial) if and only if is injective (resp. surjective, resp. trivial). In particular, if is nullhomotopic, then is trivial.   "
},
{
  "id": "th_homotopy_type",
  "level": "2",
  "url": "s_homotopy_type.html#th_homotopy_type",
  "type": "Theorem",
  "number": "2.7.5",
  "title": "Homotopy equivalence and fundamental groups.",
  "body": " Homotopy equivalence and fundamental groups   Assume is a homotopy equivalence. Given , let . The map is an isomorphism.   "
},
{
  "id": "s_Sn_simply_connected",
  "level": "1",
  "url": "s_Sn_simply_connected.html",
  "type": "Section",
  "number": "2.8",
  "title": "Fundamental group of <span class=\"process-math\">\\(S^n\\)<\/span>",
  "body": " Fundamental group of   Weak Seifert-van Kampen   Let be an open covering, and suppose is path connected. Given any , let be the group homomorphisms corresponding to the inclusion maps , . The group is generated by the images and . In other words, for all , we have where for all we have or .     Fundamental group of   For any the -sphere  is defined as    When , we have for any .    For all we have for any .   Since is path connected for all , we conclude that is simply connected for all .    The alternate description of $S^n$ was shown in a homework exercise.     Projective space   Fix . (Real) projective -space  is the quotient space of by the equivalence relation for some .  As an alternative description, we have , where is the antipodal relation: , for all we define if and only if .     Fundamental group of   Fix .    The quotient map is a double covering of .    For all , we have .      "
},
{
  "id": "th_weak_Seifert_vanKampen",
  "level": "2",
  "url": "s_Sn_simply_connected.html#th_weak_Seifert_vanKampen",
  "type": "Theorem",
  "number": "2.8.1",
  "title": "Weak Seifert-van Kampen.",
  "body": " Weak Seifert-van Kampen   Let be an open covering, and suppose is path connected. Given any , let be the group homomorphisms corresponding to the inclusion maps , . The group is generated by the images and . In other words, for all , we have where for all we have or .   "
},
{
  "id": "cor_Sn_simply_connected",
  "level": "2",
  "url": "s_Sn_simply_connected.html#cor_Sn_simply_connected",
  "type": "Corollary",
  "number": "2.8.2",
  "title": "Fundamental group of <span class=\"process-math\">\\(S^n\\)<\/span>.",
  "body": " Fundamental group of   For any the -sphere  is defined as    When , we have for any .    For all we have for any .   Since is path connected for all , we conclude that is simply connected for all .    The alternate description of $S^n$ was shown in a homework exercise.   "
},
{
  "id": "d_Pn",
  "level": "2",
  "url": "s_Sn_simply_connected.html#d_Pn",
  "type": "Definition",
  "number": "2.8.3",
  "title": "Projective space.",
  "body": " Projective space   Fix . (Real) projective -space  is the quotient space of by the equivalence relation for some .  As an alternative description, we have , where is the antipodal relation: , for all we define if and only if .   "
},
{
  "id": "cor_fund_grp_Pn",
  "level": "2",
  "url": "s_Sn_simply_connected.html#cor_fund_grp_Pn",
  "type": "Corollary",
  "number": "2.8.4",
  "title": "Fundamental group of <span class=\"process-math\">\\(\\PP^n\\)<\/span>.",
  "body": " Fundamental group of   Fix .    The quotient map is a double covering of .    For all , we have .     "
},
{
  "id": "s_surface_fund_grps",
  "level": "1",
  "url": "s_surface_fund_grps.html",
  "type": "Section",
  "number": "2.9",
  "title": "Fundamental groups of some surfaces",
  "body": " Fundamental groups of some surfaces   Topological manifold   Let be a nonnegative integer. A topological -manifold is a topological space satisfying the following properties:   Hausdorff   is Hausdorff.    Second countable   is second countable: , has a countable basis.    Locally Euclidean   is locally Euclidean of dimension : , every has an open neighborhood that is homeomorphic to an open subset of . (We define .)   A -manifold is called a curve ; a -manifold is called a surface .     You might be wondering whether an -manifold could also be an -manifold. The answer is no, but hinges on the fact that is not homeomorphic to (invariance of domain), which is difficult to prove in full generality. However, we do know that invariance of domain holds for and (homework exercise), so the in -manifold is well-defined at least for .    Sphere, projective 2-space, torus   Show that , , and are surfaces.         Euclidean balls   Let be an -manifold. A Euclidean ball is an open set that is homeomorphic to an open ball of .  A Euclidean ball is regular if there is a Euclidean ball such that (i) and (ii) there is a homeomorphism of for some , such that .     Connected sum of surfaces   For each let be a surface and let be a regular Euclidean ball. Furthermore, let be a homeomorphism. The connected sum of and is the quotient space obtained from the disjoint union by identifying and for all points .  It is possible to show that is itself a surface.     Double torus   The double torus (or 2-holed torus ) is the connected sum obtained by excising two circular patches on two copies of and glueing the two surfaces together along the circular boundaries. Make this description more precise, using the quotient description of the torus.     Let be the torus realized as the quotient of by the relation and for all , and let be copies of       Fundamental group of the figure eight   Let be your favorite incarnation of the figure eight space.    Show that the diagram below describes a covering map of . Your argument can be somewhat informal (since no formulas are provided).  Cover of figure eight      Let be the intersection of the two circles in the figure eight, and let be the simple paths traversing the left and right hoops of , with orientation as in the diagram. Use the lifting correspondence to show that , and hence that is a nonabelian group.       Double torus fundamental group   Give an informal, yet convincing argument that there is a retraction from the double torus to the figure eight space . Explain why this implies is nonabelian.     Some non-homeomorphic surfaces   The following surfaces are pairwise non-homeomorphic: .    "
},
{
  "id": "d_manifold",
  "level": "2",
  "url": "s_surface_fund_grps.html#d_manifold",
  "type": "Definition",
  "number": "2.9.1",
  "title": "Topological manifold.",
  "body": " Topological manifold   Let be a nonnegative integer. A topological -manifold is a topological space satisfying the following properties:   Hausdorff   is Hausdorff.    Second countable   is second countable: , has a countable basis.    Locally Euclidean   is locally Euclidean of dimension : , every has an open neighborhood that is homeomorphic to an open subset of . (We define .)   A -manifold is called a curve ; a -manifold is called a surface .   "
},
{
  "id": "s_surface_fund_grps-3",
  "level": "2",
  "url": "s_surface_fund_grps.html#s_surface_fund_grps-3",
  "type": "Remark",
  "number": "2.9.2",
  "title": "",
  "body": " You might be wondering whether an -manifold could also be an -manifold. The answer is no, but hinges on the fact that is not homeomorphic to (invariance of domain), which is difficult to prove in full generality. However, we do know that invariance of domain holds for and (homework exercise), so the in -manifold is well-defined at least for .  "
},
{
  "id": "s_surface_fund_grps-4",
  "level": "2",
  "url": "s_surface_fund_grps.html#s_surface_fund_grps-4",
  "type": "Example",
  "number": "2.9.3",
  "title": "Sphere, projective 2-space, torus.",
  "body": " Sphere, projective 2-space, torus   Show that , , and are surfaces.       "
},
{
  "id": "d_euclidean_ball",
  "level": "2",
  "url": "s_surface_fund_grps.html#d_euclidean_ball",
  "type": "Definition",
  "number": "2.9.4",
  "title": "Euclidean balls.",
  "body": " Euclidean balls   Let be an -manifold. A Euclidean ball is an open set that is homeomorphic to an open ball of .  A Euclidean ball is regular if there is a Euclidean ball such that (i) and (ii) there is a homeomorphism of for some , such that .   "
},
{
  "id": "d_connected_sum",
  "level": "2",
  "url": "s_surface_fund_grps.html#d_connected_sum",
  "type": "Definition",
  "number": "2.9.5",
  "title": "Connected sum of surfaces.",
  "body": " Connected sum of surfaces   For each let be a surface and let be a regular Euclidean ball. Furthermore, let be a homeomorphism. The connected sum of and is the quotient space obtained from the disjoint union by identifying and for all points .  It is possible to show that is itself a surface.   "
},
{
  "id": "eg_double_torus",
  "level": "2",
  "url": "s_surface_fund_grps.html#eg_double_torus",
  "type": "Example",
  "number": "2.9.6",
  "title": "Double torus.",
  "body": " Double torus   The double torus (or 2-holed torus ) is the connected sum obtained by excising two circular patches on two copies of and glueing the two surfaces together along the circular boundaries. Make this description more precise, using the quotient description of the torus.     Let be the torus realized as the quotient of by the relation and for all , and let be copies of     "
},
{
  "id": "eg_figure_eight",
  "level": "2",
  "url": "s_surface_fund_grps.html#eg_figure_eight",
  "type": "Example",
  "number": "2.9.7",
  "title": "Fundamental group of the figure eight.",
  "body": " Fundamental group of the figure eight   Let be your favorite incarnation of the figure eight space.    Show that the diagram below describes a covering map of . Your argument can be somewhat informal (since no formulas are provided).  Cover of figure eight      Let be the intersection of the two circles in the figure eight, and let be the simple paths traversing the left and right hoops of , with orientation as in the diagram. Use the lifting correspondence to show that , and hence that is a nonabelian group.     "
},
{
  "id": "eg_double_torus_fund_grp",
  "level": "2",
  "url": "s_surface_fund_grps.html#eg_double_torus_fund_grp",
  "type": "Example",
  "number": "2.9.8",
  "title": "Double torus fundamental group.",
  "body": " Double torus fundamental group   Give an informal, yet convincing argument that there is a retraction from the double torus to the figure eight space . Explain why this implies is nonabelian.   "
},
{
  "id": "th_nonhomeomorphic_surfaces",
  "level": "2",
  "url": "s_surface_fund_grps.html#th_nonhomeomorphic_surfaces",
  "type": "Theorem",
  "number": "2.9.9",
  "title": "Some non-homeomorphic surfaces.",
  "body": " Some non-homeomorphic surfaces   The following surfaces are pairwise non-homeomorphic: .   "
},
{
  "id": "s_jordan_separation",
  "level": "1",
  "url": "s_jordan_separation.html",
  "type": "Section",
  "number": "2.10",
  "title": "Jordan separation theorem",
  "body": " Jordan separation theorem   Arcs and simple closed curves   An arc is a space that is homeomorphic to the unit interval ; a simple closed curve is a space homeomorphic to .     Arcs and simple closed curves  Let be a Hausdorff space. A subspace is an arc if and only if it is the image of an injective path : since is compact and is Hausdorff, the map is guaranteed to be a homeomorphism onto . Similarly, using the fact that is homeomorphic to the quotient of obtained by identifying its endpoints and , we see that is a simple closed curve if and only if it is the image of a path that is injective on and satisfies : again, since is compact and is Hausdorff, the map is guaranteed to be closed, hence a quotient map.     Let be a subspace of the connected space . We say separates if is not connected. Similarly, we say  separates into components if has connected components.    The goal of the next two lectures is to prove the Jordan curve theorem : any simple closed curve separates into two components. That this statement is true seems intuitively clear, painfully obvious even: like the circle, any simple closed curve should have a well-defined inside and outside , giving us exactly two components of . All the more maddening, then, that a proof of this fact turns out to be rather difficult. On the other hand, the seemingly well-behaved notion of a path has surprised us with some pathological behavior on other occasions: forget not the space filling curve ! First we include a useful result (not officially covered last quarter) about locally connected spaces.   Components in locally connected spaces   Let be a locally path connected space.   The connected components and path components of are identical.    The components of are open.        Components of  Let be compact, and let . Let's enumerate some important facts about .    is open, since is closed, and hence locally path connected, since is locally path connected.     is unbounded, since is bounded.     has exactly one unbounded connected component.   To see why (2)-(3) are true, choose such that . The set is connected and unbounded, hence must lie in some unbounded connected component of . Furthermore, if is an unbounded connected component, then we must have (essentially by the definition of unboundedness). But then . Since connected components partition , we must have .    Comparing and components   Fix and let be a homeomorphism. Let be a compact subspace of not containing , and let be a component of .   If , then is a bounded component of .    If , then is an unbounded component of .    If has components, then has components.       Let be a connected component of . We first show that is connected. This is trivial if , so assume . Since is open and is a surface, we can find an open set that is homeomorphic to an open ball in and which satisfies . (In fact, since is a connected component and is connected, if , then we automatically have .) Assume by contradiction that is not connected, and let be a separation. Note that is itself open, and thus so are and . Since is connected (homeomorphic to punctured ball) and , it must be contained in or . Assume without loss of generality that . But then we have is open, and thus is a separation: a contradiction.  Let be the connected components of . By above, the sets are open, connected and disjoint. Thus the sets are open connected and disjoint, and cover . It follows that the are the components of , and the correspondence is a bijection between the components of and the components of .  Lastly, let be the component of containing . Since is compact, is bounded. Thus is the unique unbounded component of .      Fix points . Let be compact, and let . If and lie in the same component of , then is nullhomotopic.    Assume where is compact. Pick a homeomorphism sending to , and let . Observe that if is nullhomotopic via the homotopy , then is nullhomotopic via the homotopy . Furthermore, using , we see that and lie in the same component of if and only if lies in the unbounded component of . Thus it suffices to show that if is compact and , then is nullhomotopic if is in the unbounded component of . We now show that this is the case.  Assume with compact, and that lies in the unbounded component of . Since is compact, it is closed and bounded. Choose such that and any point . Since is an open subspace of the locally path connected space , it is itself locally path connected. It follows that all the components of are open and path connected. Let be the unbounded component of . Since there is a path . The map defined as is a homotopy between and . (Note that for we have , since .) This shows that is homotopic to . Lastly, consider the map on defined as . Since , we have for all and . Since , it follows that . Thus , and it is easily seen that is a homotopy from the constant function to . By transitivity, we conclude that is nullhomotopic.     Jordan separation theorem   If and are closed connected subspaces of satisfying , where , then separates .  In particular, if is a simple closed curve, then separates .    First observe that the second statement follows from the first since any simple closed curve can be written as the union of two arcs intersecting at exactly their two endpoints.  Next, observe that under the given hypotheses we have . Indeed, the space is easily seen to be disconnected, whereas the doubly punctured sphere is connected.  Now assume by contradiction that is connected. We will show that this implies is trivial for any : an absurdity since is homeomorphic to the punctured plane, which has fundamental group isomorphic to .  Let and , in which case we have . Since is connected (by assumption), and since is locally path connected, is path connected. This means we are in the position to use the weak Seifert-van Kampen theorem . Let and be the inclusion maps, and pick any . We will show that are both trivial maps, which would imply has trivial fundamental group: a contradiction.  It will suffice by symmetry to show is trivial. Recall that for any . Since is a loop, letting be the standard quotient map, there is a map making the diagram below commutative.  Factorization of through   Consider the map . Its image lies in . Since is a connected set containing and , we see that these two points lie in the same component of . We conclude from that is nullhomotopic. It now follows from that the map is trivial. But then we have , since is the trivial map. This proves that is trivial, as desired.    "
},
{
  "id": "d_arc_simple_closed",
  "level": "2",
  "url": "s_jordan_separation.html#d_arc_simple_closed",
  "type": "Definition",
  "number": "2.10.1",
  "title": "Arcs and simple closed curves.",
  "body": " Arcs and simple closed curves   An arc is a space that is homeomorphic to the unit interval ; a simple closed curve is a space homeomorphic to .   "
},
{
  "id": "rm_arc_closed_curve",
  "level": "2",
  "url": "s_jordan_separation.html#rm_arc_closed_curve",
  "type": "Remark",
  "number": "2.10.2",
  "title": "Arcs and simple closed curves.",
  "body": " Arcs and simple closed curves  Let be a Hausdorff space. A subspace is an arc if and only if it is the image of an injective path : since is compact and is Hausdorff, the map is guaranteed to be a homeomorphism onto . Similarly, using the fact that is homeomorphic to the quotient of obtained by identifying its endpoints and , we see that is a simple closed curve if and only if it is the image of a path that is injective on and satisfies : again, since is compact and is Hausdorff, the map is guaranteed to be closed, hence a quotient map.  "
},
{
  "id": "d_separates",
  "level": "2",
  "url": "s_jordan_separation.html#d_separates",
  "type": "Definition",
  "number": "2.10.3",
  "title": "",
  "body": "  Let be a subspace of the connected space . We say separates if is not connected. Similarly, we say  separates into components if has connected components.   "
},
{
  "id": "th_locally_connected_components",
  "level": "2",
  "url": "s_jordan_separation.html#th_locally_connected_components",
  "type": "Theorem",
  "number": "2.10.4",
  "title": "Components in locally connected spaces.",
  "body": " Components in locally connected spaces   Let be a locally path connected space.   The connected components and path components of are identical.    The components of are open.      "
},
{
  "id": "s_jordan_separation-7",
  "level": "2",
  "url": "s_jordan_separation.html#s_jordan_separation-7",
  "type": "Remark",
  "number": "2.10.5",
  "title": "Components of <span class=\"process-math\">\\(\\R^2-C\\)<\/span>.",
  "body": " Components of  Let be compact, and let . Let's enumerate some important facts about .    is open, since is closed, and hence locally path connected, since is locally path connected.     is unbounded, since is bounded.     has exactly one unbounded connected component.   To see why (2)-(3) are true, choose such that . The set is connected and unbounded, hence must lie in some unbounded connected component of . Furthermore, if is an unbounded connected component, then we must have (essentially by the definition of unboundedness). But then . Since connected components partition , we must have .  "
},
{
  "id": "lemma_components_S2_R2",
  "level": "2",
  "url": "s_jordan_separation.html#lemma_components_S2_R2",
  "type": "Lemma",
  "number": "2.10.6",
  "title": "Comparing <span class=\"process-math\">\\(S^2\\)<\/span> and <span class=\"process-math\">\\(\\R^2\\)<\/span> components.",
  "body": " Comparing and components   Fix and let be a homeomorphism. Let be a compact subspace of not containing , and let be a component of .   If , then is a bounded component of .    If , then is an unbounded component of .    If has components, then has components.       Let be a connected component of . We first show that is connected. This is trivial if , so assume . Since is open and is a surface, we can find an open set that is homeomorphic to an open ball in and which satisfies . (In fact, since is a connected component and is connected, if , then we automatically have .) Assume by contradiction that is not connected, and let be a separation. Note that is itself open, and thus so are and . Since is connected (homeomorphic to punctured ball) and , it must be contained in or . Assume without loss of generality that . But then we have is open, and thus is a separation: a contradiction.  Let be the connected components of . By above, the sets are open, connected and disjoint. Thus the sets are open connected and disjoint, and cover . It follows that the are the components of , and the correspondence is a bijection between the components of and the components of .  Lastly, let be the component of containing . Since is compact, is bounded. Thus is the unique unbounded component of .   "
},
{
  "id": "lemma_nullhomotopic_to_S2",
  "level": "2",
  "url": "s_jordan_separation.html#lemma_nullhomotopic_to_S2",
  "type": "Lemma",
  "number": "2.10.7",
  "title": "",
  "body": "  Fix points . Let be compact, and let . If and lie in the same component of , then is nullhomotopic.    Assume where is compact. Pick a homeomorphism sending to , and let . Observe that if is nullhomotopic via the homotopy , then is nullhomotopic via the homotopy . Furthermore, using , we see that and lie in the same component of if and only if lies in the unbounded component of . Thus it suffices to show that if is compact and , then is nullhomotopic if is in the unbounded component of . We now show that this is the case.  Assume with compact, and that lies in the unbounded component of . Since is compact, it is closed and bounded. Choose such that and any point . Since is an open subspace of the locally path connected space , it is itself locally path connected. It follows that all the components of are open and path connected. Let be the unbounded component of . Since there is a path . The map defined as is a homotopy between and . (Note that for we have , since .) This shows that is homotopic to . Lastly, consider the map on defined as . Since , we have for all and . Since , it follows that . Thus , and it is easily seen that is a homotopy from the constant function to . By transitivity, we conclude that is nullhomotopic.   "
},
{
  "id": "th_Jordan_separation",
  "level": "2",
  "url": "s_jordan_separation.html#th_Jordan_separation",
  "type": "Theorem",
  "number": "2.10.8",
  "title": "Jordan separation theorem.",
  "body": " Jordan separation theorem   If and are closed connected subspaces of satisfying , where , then separates .  In particular, if is a simple closed curve, then separates .    First observe that the second statement follows from the first since any simple closed curve can be written as the union of two arcs intersecting at exactly their two endpoints.  Next, observe that under the given hypotheses we have . Indeed, the space is easily seen to be disconnected, whereas the doubly punctured sphere is connected.  Now assume by contradiction that is connected. We will show that this implies is trivial for any : an absurdity since is homeomorphic to the punctured plane, which has fundamental group isomorphic to .  Let and , in which case we have . Since is connected (by assumption), and since is locally path connected, is path connected. This means we are in the position to use the weak Seifert-van Kampen theorem . Let and be the inclusion maps, and pick any . We will show that are both trivial maps, which would imply has trivial fundamental group: a contradiction.  It will suffice by symmetry to show is trivial. Recall that for any . Since is a loop, letting be the standard quotient map, there is a map making the diagram below commutative.  Factorization of through   Consider the map . Its image lies in . Since is a connected set containing and , we see that these two points lie in the same component of . We conclude from that is nullhomotopic. It now follows from that the map is trivial. But then we have , since is the trivial map. This proves that is trivial, as desired.   "
},
{
  "id": "s_jordan_curve",
  "level": "1",
  "url": "s_jordan_curve.html",
  "type": "Section",
  "number": "2.11",
  "title": "Jordan curve theorem",
  "body": " Jordan curve theorem   Nonseparation theorem   If is an arc, then does not separate .    This proof is adapted from an argument given by Ryuji Maehara in the article The Jordan curve theorem via the Brouwer fixed point theorem .  Assume by contradiction that is not connected. This means that among the connected components of , in addition to the unbounded connected component , there is a bounded component .  Now observe that we have . This is because we have for any connected component , since is open and disjoint from .  Since is bounded, we can pick an element and such that . Since is unbounded and connected, we must have and hence . Let (homeomorphic to ) and let (homeomorphic to ). Observe that .  Since is a closed subset of the normal space , the Tietze extension theorem implies that the identity function extends to retraction . Define as follows: Since , and since , the function is well-defined and continuous by the closed pasting lemma. We cannot have since for all and for all .  Finally, consider the map , where is the usual retraction map of the ball onto the circle, and is the antipodal map on .  Map without fixed point   This map has no fixed point, contradicting Brouwer's fixed point theorem. Indeed, since , any candidate for a fixed point would have to be an element of ; but for any , we have , since is the antipode of .  Since we have reached a contradiction, we conclude that must be connected.     Complementary Seifert-van Kampen   Let , where and are open, and is a separation. Assume and , and that there are paths and a path . Let .   The subgroup is infinite cyclic. Furthermore, if , then .    Suppose and we have paths and . Setting , we have .            Jordan curve theorem   Let and be closed connected subsets of whose intersection consists of two points. If neither nor separates , then separates into exactly two components.  As a consequence, if is simple closed curve, then separates into exactly two components, . Furthermore, we have .    "
},
{
  "id": "th_Jordan_nonseparation_theorem",
  "level": "2",
  "url": "s_jordan_curve.html#th_Jordan_nonseparation_theorem",
  "type": "Theorem",
  "number": "2.11.1",
  "title": "Nonseparation theorem.",
  "body": " Nonseparation theorem   If is an arc, then does not separate .    This proof is adapted from an argument given by Ryuji Maehara in the article The Jordan curve theorem via the Brouwer fixed point theorem .  Assume by contradiction that is not connected. This means that among the connected components of , in addition to the unbounded connected component , there is a bounded component .  Now observe that we have . This is because we have for any connected component , since is open and disjoint from .  Since is bounded, we can pick an element and such that . Since is unbounded and connected, we must have and hence . Let (homeomorphic to ) and let (homeomorphic to ). Observe that .  Since is a closed subset of the normal space , the Tietze extension theorem implies that the identity function extends to retraction . Define as follows: Since , and since , the function is well-defined and continuous by the closed pasting lemma. We cannot have since for all and for all .  Finally, consider the map , where is the usual retraction map of the ball onto the circle, and is the antipodal map on .  Map without fixed point   This map has no fixed point, contradicting Brouwer's fixed point theorem. Indeed, since , any candidate for a fixed point would have to be an element of ; but for any , we have , since is the antipode of .  Since we have reached a contradiction, we conclude that must be connected.   "
},
{
  "id": "th_compl_Seifert_vanKampen",
  "level": "2",
  "url": "s_jordan_curve.html#th_compl_Seifert_vanKampen",
  "type": "Theorem",
  "number": "2.11.2",
  "title": "Complementary Seifert-van Kampen.",
  "body": " Complementary Seifert-van Kampen   Let , where and are open, and is a separation. Assume and , and that there are paths and a path . Let .   The subgroup is infinite cyclic. Furthermore, if , then .    Suppose and we have paths and . Setting , we have .          "
},
{
  "id": "th_Jordan_curve_theorem",
  "level": "2",
  "url": "s_jordan_curve.html#th_Jordan_curve_theorem",
  "type": "Theorem",
  "number": "2.11.3",
  "title": "Jordan curve theorem.",
  "body": " Jordan curve theorem   Let and be closed connected subsets of whose intersection consists of two points. If neither nor separates , then separates into exactly two components.  As a consequence, if is simple closed curve, then separates into exactly two components, . Furthermore, we have .   "
},
{
  "id": "s_groups_abelian",
  "level": "1",
  "url": "s_groups_abelian.html",
  "type": "Section",
  "number": "2.12",
  "title": "Free Abelian groups",
  "body": " Free Abelian groups   Although the main focus of this section is free abelian groups, a significant underlying theme is the concept of universal mapping properties that characterize certain group constructions. As an example, and partly as review, recall the the universal mapping property of a quotient group.      Given groups and we denote by the set of all group homomorphisms from to .     Universal property of quotient groups   Let be a normal subgroup of , denoted , and let be the quotient homomorphism defined as . The map is a bijection onto the set . In other words given any satisfying , there is a unique map satisfying .  Commutative diagram for quotient groups   In fact, we must have .     Direct product of groups   Given a family of groups, its direct product  is the group with underlying set and group operation .     Universal property of the direct product   Let be a family of groups, let .    Projections  For each the projection map is a surjective group homomorphism.    Universal mapping property  Given a group the map is a bijection. In other words, given any family of group homomorphisms , there is a unique homomorphism satisfying for all .  Commutative diagram for direct product groups   In fact, in this case we must have .    The universal mapping property characterizes up to isomorphism: , if is a group equipped with group homomorphisms for which the recipe is a bijection, then .      The proof of this theorem is very similar to that of . You are encouraged to adapt that proof.     Direct sum of abelian groups   Given a family of abelian groups , its direct sum  is the subgroup of defined as .    The construction for the direct sum does not require that the groups be abelian. So why do we include this condition? The reason, briefly, is that the term direct sum describes not the construction of but rather the universal mapping property it satisfies among abelian groups, as described in . This property fails if the abelian condition on groups is removed. (Put another way, the notion of a direct sum is really a category theory concept.)   Universal property of direct sums   Let be a family of abelian groups.    Injections  For each the map that maps to the tuple satisfying and for all is an injective group homomorphism.    Universal mapping property  Given an abelian group the map is a bijection. In other words, given any abelian group and family of group homomorphisms , there is a unique homomorphism satisfying for all .  Commutative diagram for direct sum groups   In fact, in this case we must have .    The universal mapping property characterizes among abelian groups up to isomorphism: , if is an abelian group equipped with group homomorphisms for which the recipe is a bijection for any abelian group , then .          This is easy to see.    Suppose we are given an abelian group and homomorphisms . First we show there is at most one such homomorphism . Indeed, since by assumption satisfies for all , we must have . Thus, if such a exists, it must satisfy . It remains only to show that the formula in actually defines a homomorphism. This is straightforward and left to the reader.    Suppose is an abelian group equipped with maps satisfying the given property. By the universal mapping property of there is a homomorphism satisfying for all . Since the group and maps also satisfies the universal mapping property, the maps gives rise to a homomorphism satisfying for all . We claim that and , from whence it follows that (and ) is an isomorphism. To see why these two equalities hold, we use the uniqueness claim in the universal mapping property. For example, we have for all . Since also satisfies for all , we conclude that . The argument for is exactly similar.        Let    Consider the system of maps . According to the universal mapping property, there is a unique map satisfying for all . What is ?    Fix and consider the system of maps defined as for (the zero map), and . According to the universal mapping property, there is a unique map satisfying for all . What is ?          Since satisfies for all , we see by uniqueness that .    Consider the projection map . It is easy to see, using the definition of that Using the definition of , we conclude that for all . It follows from uniqueness that .        Direct sum of subgroups   Let be a family of subgroups of the abelian group . The inclusion maps give rise to a unique group homomorphism .   Sum of subgroups  The group is the sum of the , denoted , if is surjective.    Direct sum of subgroups  The group is the direct sum of the , denoted , if is an isomorphism.        Direct sum equivalence   Let be a family of subgroups of the abelian group .   We have if and only if for all we can write for some elements .    We have if and only if for all we can write for some elements in a unique way.       According to the map coming from the inclusions has formula . From this it is clear that is surjective if and only if every element can be so written, and bijective if and only if this expression is unique. The result follows.     Free abelian group   A group is a free abelian group if for some set .     Free abelian groups   Let be an abelian group. The following statements are equivalent.    is free abelian.    There is a set and tuple such that the map is an isomorphism.    There is a set and tuple such that for all we can write , where for all but finitely many , in a unique way.    There is a set and tuple such that for any abelian group the map is a bijection. In other words, there is a tuple such that given any abelian group and any elements , there is a unique homomorphism satisfying .        . If is free abelian, there is an isomorphism . Let and let . From we have .   . This is clear.   . Since for any we can write , given a homomorphism we have . Thus is completely determined by its values . Furthermore, given any tuple it is easy to see that the function defined as is well-defined and a group homomorphism.   . Given such a tuple , we define group homomorphisms as . This gives rise to a group homomorphism satisfying for all . Next, for all let : this is the tuple in whose -th component is , and whose every other component is 0. The property described in (4) guarantees that there is a unique homomorphism sending to . We will show that and are inverses of each other, and hence that .   . We have . Using the universal mapping property of , if we show that for all , we conclude that . For any we have . This shows that , and thus , as desired.   . Since , using the uniqueness condition in the property described in (4), we need only show that for all . We have , as desired.     Basis of a free abelian group   Let be an abelian group. A tuple satisfying any of the equivalent conditions of is called a basis of .  In this case we define the rank of , denoted , as .    Why is well-defined? As you will show in a homework exercise, if , then . Thinking of as the finite field , we see that is just the dimension of as a -vector space: , .    "
},
{
  "id": "d_group_Hom",
  "level": "2",
  "url": "s_groups_abelian.html#d_group_Hom",
  "type": "Definition",
  "number": "2.12.1",
  "title": "<span class=\"process-math\">\\(\\Hom(G,H)\\)<\/span>.",
  "body": "   Given groups and we denote by the set of all group homomorphisms from to .   "
},
{
  "id": "th_mapping_prop_quotient_group",
  "level": "2",
  "url": "s_groups_abelian.html#th_mapping_prop_quotient_group",
  "type": "Theorem",
  "number": "2.12.2",
  "title": "Universal property of quotient groups.",
  "body": " Universal property of quotient groups   Let be a normal subgroup of , denoted , and let be the quotient homomorphism defined as . The map is a bijection onto the set . In other words given any satisfying , there is a unique map satisfying .  Commutative diagram for quotient groups   In fact, we must have .   "
},
{
  "id": "d_product_sum_groups",
  "level": "2",
  "url": "s_groups_abelian.html#d_product_sum_groups",
  "type": "Definition",
  "number": "2.12.3",
  "title": "Direct product of groups.",
  "body": " Direct product of groups   Given a family of groups, its direct product  is the group with underlying set and group operation .   "
},
{
  "id": "th_universal_properties_product",
  "level": "2",
  "url": "s_groups_abelian.html#th_universal_properties_product",
  "type": "Theorem",
  "number": "2.12.4",
  "title": "Universal property of the direct product.",
  "body": " Universal property of the direct product   Let be a family of groups, let .    Projections  For each the projection map is a surjective group homomorphism.    Universal mapping property  Given a group the map is a bijection. In other words, given any family of group homomorphisms , there is a unique homomorphism satisfying for all .  Commutative diagram for direct product groups   In fact, in this case we must have .    The universal mapping property characterizes up to isomorphism: , if is a group equipped with group homomorphisms for which the recipe is a bijection, then .      The proof of this theorem is very similar to that of . You are encouraged to adapt that proof.   "
},
{
  "id": "d_direct_sum",
  "level": "2",
  "url": "s_groups_abelian.html#d_direct_sum",
  "type": "Definition",
  "number": "2.12.5",
  "title": "Direct sum of abelian groups.",
  "body": " Direct sum of abelian groups   Given a family of abelian groups , its direct sum  is the subgroup of defined as .   "
},
{
  "id": "s_groups_abelian-8",
  "level": "2",
  "url": "s_groups_abelian.html#s_groups_abelian-8",
  "type": "Remark",
  "number": "2.12.6",
  "title": "",
  "body": "The construction for the direct sum does not require that the groups be abelian. So why do we include this condition? The reason, briefly, is that the term direct sum describes not the construction of but rather the universal mapping property it satisfies among abelian groups, as described in . This property fails if the abelian condition on groups is removed. (Put another way, the notion of a direct sum is really a category theory concept.) "
},
{
  "id": "th_universal_properties_sum",
  "level": "2",
  "url": "s_groups_abelian.html#th_universal_properties_sum",
  "type": "Theorem",
  "number": "2.12.7",
  "title": "Universal property of direct sums.",
  "body": " Universal property of direct sums   Let be a family of abelian groups.    Injections  For each the map that maps to the tuple satisfying and for all is an injective group homomorphism.    Universal mapping property  Given an abelian group the map is a bijection. In other words, given any abelian group and family of group homomorphisms , there is a unique homomorphism satisfying for all .  Commutative diagram for direct sum groups   In fact, in this case we must have .    The universal mapping property characterizes among abelian groups up to isomorphism: , if is an abelian group equipped with group homomorphisms for which the recipe is a bijection for any abelian group , then .     "
},
{
  "id": "s_groups_abelian-10",
  "level": "2",
  "url": "s_groups_abelian.html#s_groups_abelian-10",
  "type": "Proof",
  "number": "2.12.1",
  "title": "",
  "body": "    This is easy to see.    Suppose we are given an abelian group and homomorphisms . First we show there is at most one such homomorphism . Indeed, since by assumption satisfies for all , we must have . Thus, if such a exists, it must satisfy . It remains only to show that the formula in actually defines a homomorphism. This is straightforward and left to the reader.    Suppose is an abelian group equipped with maps satisfying the given property. By the universal mapping property of there is a homomorphism satisfying for all . Since the group and maps also satisfies the universal mapping property, the maps gives rise to a homomorphism satisfying for all . We claim that and , from whence it follows that (and ) is an isomorphism. To see why these two equalities hold, we use the uniqueness claim in the universal mapping property. For example, we have for all . Since also satisfies for all , we conclude that . The argument for is exactly similar.     "
},
{
  "id": "s_groups_abelian-11",
  "level": "2",
  "url": "s_groups_abelian.html#s_groups_abelian-11",
  "type": "Example",
  "number": "2.12.8",
  "title": "",
  "body": "  Let    Consider the system of maps . According to the universal mapping property, there is a unique map satisfying for all . What is ?    Fix and consider the system of maps defined as for (the zero map), and . According to the universal mapping property, there is a unique map satisfying for all . What is ?          Since satisfies for all , we see by uniqueness that .    Consider the projection map . It is easy to see, using the definition of that Using the definition of , we conclude that for all . It follows from uniqueness that .      "
},
{
  "id": "d_direct_sum_of_subgroups",
  "level": "2",
  "url": "s_groups_abelian.html#d_direct_sum_of_subgroups",
  "type": "Definition",
  "number": "2.12.9",
  "title": "Direct sum of subgroups.",
  "body": " Direct sum of subgroups   Let be a family of subgroups of the abelian group . The inclusion maps give rise to a unique group homomorphism .   Sum of subgroups  The group is the sum of the , denoted , if is surjective.    Direct sum of subgroups  The group is the direct sum of the , denoted , if is an isomorphism.      "
},
{
  "id": "th_direct_sum",
  "level": "2",
  "url": "s_groups_abelian.html#th_direct_sum",
  "type": "Theorem",
  "number": "2.12.10",
  "title": "Direct sum equivalence.",
  "body": " Direct sum equivalence   Let be a family of subgroups of the abelian group .   We have if and only if for all we can write for some elements .    We have if and only if for all we can write for some elements in a unique way.       According to the map coming from the inclusions has formula . From this it is clear that is surjective if and only if every element can be so written, and bijective if and only if this expression is unique. The result follows.   "
},
{
  "id": "d_free_abelian_group",
  "level": "2",
  "url": "s_groups_abelian.html#d_free_abelian_group",
  "type": "Definition",
  "number": "2.12.11",
  "title": "Free abelian group.",
  "body": " Free abelian group   A group is a free abelian group if for some set .   "
},
{
  "id": "th_free_abelian_groups",
  "level": "2",
  "url": "s_groups_abelian.html#th_free_abelian_groups",
  "type": "Theorem",
  "number": "2.12.12",
  "title": "Free abelian groups.",
  "body": " Free abelian groups   Let be an abelian group. The following statements are equivalent.    is free abelian.    There is a set and tuple such that the map is an isomorphism.    There is a set and tuple such that for all we can write , where for all but finitely many , in a unique way.    There is a set and tuple such that for any abelian group the map is a bijection. In other words, there is a tuple such that given any abelian group and any elements , there is a unique homomorphism satisfying .        . If is free abelian, there is an isomorphism . Let and let . From we have .   . This is clear.   . Since for any we can write , given a homomorphism we have . Thus is completely determined by its values . Furthermore, given any tuple it is easy to see that the function defined as is well-defined and a group homomorphism.   . Given such a tuple , we define group homomorphisms as . This gives rise to a group homomorphism satisfying for all . Next, for all let : this is the tuple in whose -th component is , and whose every other component is 0. The property described in (4) guarantees that there is a unique homomorphism sending to . We will show that and are inverses of each other, and hence that .   . We have . Using the universal mapping property of , if we show that for all , we conclude that . For any we have . This shows that , and thus , as desired.   . Since , using the uniqueness condition in the property described in (4), we need only show that for all . We have , as desired.   "
},
{
  "id": "d_basis_of_free_abelian_group",
  "level": "2",
  "url": "s_groups_abelian.html#d_basis_of_free_abelian_group",
  "type": "Definition",
  "number": "2.12.13",
  "title": "Basis of a free abelian group.",
  "body": " Basis of a free abelian group   Let be an abelian group. A tuple satisfying any of the equivalent conditions of is called a basis of .  In this case we define the rank of , denoted , as .    Why is well-defined? As you will show in a homework exercise, if , then . Thinking of as the finite field , we see that is just the dimension of as a -vector space: , .   "
},
{
  "id": "s_groups_free_products",
  "level": "1",
  "url": "s_groups_free_products.html",
  "type": "Section",
  "number": "2.13",
  "title": "Free products",
  "body": " Free products   Free product of groups   A free product of a family of groups is a pair consisting of a group and a family of group homomorphisms satisfying the following universal mapping property :   Universal mapping property  If is any group, and if is any family of group homomorphisms, then there is a unique group homomorphism satisfying for all .  Commutative diagram for free products      As we will see, such a group is unique up to isomorphism. We will write to denote a free product of . When is finite, we write to denote a free product of the .     Free product properties   Let be a family of groups.    If is a free product of , then is injective for all .    If and are both free products of , then .         Fix . We use the universal mapping property , setting , letting be the zero map for all , and letting be the identity map . We conclude there is a map satisfying . Since is injective, the map must be injective.    The proof here is very similar to the one from . Since is a free product, the maps give rise to a homomorphism satisfying for all . And since is a free product, the maps give rise to a homormorphism satisfying for all . It is then straightforward to show that for all , from whence it follows from the uniqueness condition of the universal mapping property that .       We now endeavor to show that free products of groups exist. Our construction is fairly concrete in the end: essentially, we will build a group whose elements are certain types of words built from letters ranging over the elements of the groups . We make this precise below.   Words and reduced words   Let be a family of groups, and let be the disjoint union of their underlying sets. Given an integer , a word of length on the alphabet  is an -tuple where for all . The empty word is the empty sequence , the unique tuple on of length 0.  A word is reduced if either or , where for all and for all .     Free products exist   Given a family of groups , a free product exists.    Let be the set of all reduced words on the alphabet . We wish to define a group operation on . A natural guess for an operation would be sequence concatenation; however, the concatenation of two reduced words is not necessarily a reduced word. This is easily corrected by defining our group operation recursively as follows.   For any , define .    Given and with , define    It is easy to show by induction on the maximum length of and that is reduced. However, it is quite difficult to show that is actually a group operation directly! Specifically, the associative property is somewhat of a nightmare to verify. We will do so indirectly , using what is often called the trick of van der Waerden .   Proof that is a group operation  It is easy to see that the trivial word is an identity element with respect to . Furthermore, if is a reduced word of length , the word clearly satisfies if and only if . It follows that every element of has a two-sided inverse with respect to . The only diffficult thing to show is that is associative, as mentioned above. This is where the trick of van der Waerden comes in.  Let be the set of all permutations of . In other words, is the set of all bijections : a group under function composition. We will define an injection that satisfies for all reduced words . Since composition is an associative operation on , it will then follow that is an associative operation on .  Before getting to the function , we first define for any a map as follows.         if .     if and .     if and and .     if and and .   It is now a straightforward exercise to show that if , then . Indeed, this is obvious if or ; otherwise, one shows directly that for any reduced word , treating cases (2)-(5) in the definition above separately. For example, if , then we have . From the property it now follows that is invertible for any . Indeed, we have . Thus for all .  We now define as follows: . The fact that for any reduced words now follows from our definition of and the fact that for any .  Lastly, we must show that is injective. We first observe that if and only if . Indeed, for any nontrivial reduced word we have , and thus . Now suppose that and are two nontrivial words with . Letting (see above), we have . Since , it follows from our observation above that , and hence that .   Knowing that is a group with operation as above, we now show that is a free product of .  First, for all we define as follows: , and , a reduced word of length one, if . It is easy to see that is a group homomorphism.  Next we verify that satisfies the universal mapping property. Given a group and family of homomorphisms , define as follows: . It is clear that any homomorphism satisfying must be so defined, since , and since for any reduced word we have . This proves uniqueness of .  It remains only to show that is in fact a group homomorphism. This is a straightforward, if somewhat tedious exercise of going through the different cases in the recursive description of above and showing that in each case we have .     Products of free products   If and , then .    First we give names to some of the maps our various free products come equipped with. . Furthermore for each we define We now show that is a free product of by verifying that it satisfies the universal mapping property . Let be any group equipped with a collection of homomorphisms . The subcollections and give rise to maps and making the diagram below commutative.  A commutative diagram   The universal mapping property for now guarantees a unique map that makes the new triangles in the commutative diagram below commutative.  Another commutative diagram   But then we have for all . An identical argument shows, for all . Lastly, the uniqueness of is guaranteed by its arising uniquely from the maps , which themselves arise uniquely from the maps and .     Least normal subgroup   Let be a subset of the group . The least normal subgroup containing is the intersection of all normal subgroups of that contain . Equivalently, the least normal subgroup containing is the unique normal subgroup such that (i) and (ii) if , then .     Quotients of free products   Let with accompanying maps , . For each , we identify with its image . Given normal subgroups for , we have , where is the smallest normal subgroup of containing and .    "
},
{
  "id": "d_free_product",
  "level": "2",
  "url": "s_groups_free_products.html#d_free_product",
  "type": "Definition",
  "number": "2.13.1",
  "title": "Free product of groups.",
  "body": " Free product of groups   A free product of a family of groups is a pair consisting of a group and a family of group homomorphisms satisfying the following universal mapping property :   Universal mapping property  If is any group, and if is any family of group homomorphisms, then there is a unique group homomorphism satisfying for all .  Commutative diagram for free products      As we will see, such a group is unique up to isomorphism. We will write to denote a free product of . When is finite, we write to denote a free product of the .   "
},
{
  "id": "th_free_prod_props",
  "level": "2",
  "url": "s_groups_free_products.html#th_free_prod_props",
  "type": "Theorem",
  "number": "2.13.2",
  "title": "Free product properties.",
  "body": " Free product properties   Let be a family of groups.    If is a free product of , then is injective for all .    If and are both free products of , then .         Fix . We use the universal mapping property , setting , letting be the zero map for all , and letting be the identity map . We conclude there is a map satisfying . Since is injective, the map must be injective.    The proof here is very similar to the one from . Since is a free product, the maps give rise to a homomorphism satisfying for all . And since is a free product, the maps give rise to a homormorphism satisfying for all . It is then straightforward to show that for all , from whence it follows from the uniqueness condition of the universal mapping property that .      "
},
{
  "id": "d_words",
  "level": "2",
  "url": "s_groups_free_products.html#d_words",
  "type": "Definition",
  "number": "2.13.3",
  "title": "Words and reduced words.",
  "body": " Words and reduced words   Let be a family of groups, and let be the disjoint union of their underlying sets. Given an integer , a word of length on the alphabet  is an -tuple where for all . The empty word is the empty sequence , the unique tuple on of length 0.  A word is reduced if either or , where for all and for all .   "
},
{
  "id": "th_free_products_exist",
  "level": "2",
  "url": "s_groups_free_products.html#th_free_products_exist",
  "type": "Theorem",
  "number": "2.13.4",
  "title": "Free products exist.",
  "body": " Free products exist   Given a family of groups , a free product exists.    Let be the set of all reduced words on the alphabet . We wish to define a group operation on . A natural guess for an operation would be sequence concatenation; however, the concatenation of two reduced words is not necessarily a reduced word. This is easily corrected by defining our group operation recursively as follows.   For any , define .    Given and with , define    It is easy to show by induction on the maximum length of and that is reduced. However, it is quite difficult to show that is actually a group operation directly! Specifically, the associative property is somewhat of a nightmare to verify. We will do so indirectly , using what is often called the trick of van der Waerden .   Proof that is a group operation  It is easy to see that the trivial word is an identity element with respect to . Furthermore, if is a reduced word of length , the word clearly satisfies if and only if . It follows that every element of has a two-sided inverse with respect to . The only diffficult thing to show is that is associative, as mentioned above. This is where the trick of van der Waerden comes in.  Let be the set of all permutations of . In other words, is the set of all bijections : a group under function composition. We will define an injection that satisfies for all reduced words . Since composition is an associative operation on , it will then follow that is an associative operation on .  Before getting to the function , we first define for any a map as follows.         if .     if and .     if and and .     if and and .   It is now a straightforward exercise to show that if , then . Indeed, this is obvious if or ; otherwise, one shows directly that for any reduced word , treating cases (2)-(5) in the definition above separately. For example, if , then we have . From the property it now follows that is invertible for any . Indeed, we have . Thus for all .  We now define as follows: . The fact that for any reduced words now follows from our definition of and the fact that for any .  Lastly, we must show that is injective. We first observe that if and only if . Indeed, for any nontrivial reduced word we have , and thus . Now suppose that and are two nontrivial words with . Letting (see above), we have . Since , it follows from our observation above that , and hence that .   Knowing that is a group with operation as above, we now show that is a free product of .  First, for all we define as follows: , and , a reduced word of length one, if . It is easy to see that is a group homomorphism.  Next we verify that satisfies the universal mapping property. Given a group and family of homomorphisms , define as follows: . It is clear that any homomorphism satisfying must be so defined, since , and since for any reduced word we have . This proves uniqueness of .  It remains only to show that is in fact a group homomorphism. This is a straightforward, if somewhat tedious exercise of going through the different cases in the recursive description of above and showing that in each case we have .   "
},
{
  "id": "th_products_free_products",
  "level": "2",
  "url": "s_groups_free_products.html#th_products_free_products",
  "type": "Theorem",
  "number": "2.13.5",
  "title": "Products of free products.",
  "body": " Products of free products   If and , then .    First we give names to some of the maps our various free products come equipped with. . Furthermore for each we define We now show that is a free product of by verifying that it satisfies the universal mapping property . Let be any group equipped with a collection of homomorphisms . The subcollections and give rise to maps and making the diagram below commutative.  A commutative diagram   The universal mapping property for now guarantees a unique map that makes the new triangles in the commutative diagram below commutative.  Another commutative diagram   But then we have for all . An identical argument shows, for all . Lastly, the uniqueness of is guaranteed by its arising uniquely from the maps , which themselves arise uniquely from the maps and .   "
},
{
  "id": "d_least_normal_subgroup",
  "level": "2",
  "url": "s_groups_free_products.html#d_least_normal_subgroup",
  "type": "Definition",
  "number": "2.13.6",
  "title": "Least normal subgroup.",
  "body": " Least normal subgroup   Let be a subset of the group . The least normal subgroup containing is the intersection of all normal subgroups of that contain . Equivalently, the least normal subgroup containing is the unique normal subgroup such that (i) and (ii) if , then .   "
},
{
  "id": "th_quot_free_prod",
  "level": "2",
  "url": "s_groups_free_products.html#th_quot_free_prod",
  "type": "Theorem",
  "number": "2.13.7",
  "title": "Quotients of free products.",
  "body": " Quotients of free products   Let with accompanying maps , . For each , we identify with its image . Given normal subgroups for , we have , where is the smallest normal subgroup of containing and .   "
},
{
  "id": "s_groups_free",
  "level": "1",
  "url": "s_groups_free.html",
  "type": "Section",
  "number": "2.14",
  "title": "Free groups",
  "body": " Free groups   Free group   A group is free if it is isomorphic to a free product of copies of : , if for some set .  Given an indexed set , we let be the infinite cyclic group with generator (hence ), and we call the free group on the elements  .     Free groups   Let be a group. The following are equivalent.    is a free group.    There is a family of elements of such that for all we can write , where for all ; and furthermore this expression is unique if for all and for all .    There is a family of elements of such that given any group and collection of elements of , there is a unique homomorphism satisfying .        Freely generated   Let be a group. A tuple satisfying the conditions of is called a system of free generators . We say that is freely generated by the in this case.     Quotients of free groups   Any group is isomorphic to a quotient of a free group: , we have for some free group and normal subgroup .     Group presentation   Let be the free group on the elements . Let be an subset of . We denote by the quotient , where is the least normal subgroup containing . We say is a presentation of a group with generators  and relations  if .     The relations in a group presentation should be thought of as elements that get sent to the identity in the quotient . For example, if is an element of then the element in the quotient . Equivalently, this means . As an abuse of notation, we sometimes include the equality among the elements of to emphasize that this relation holds in the quotient. In other words, we write instead of     Presentations of groups Identify a familiar group with given presentation. Justify your answer.               Commutator subgroup   Let be a group. The commutator  of elements is defined as . The commutator subgroup of , denoted is the subgroup of generated by the set of all commutators in .     Commutator and abelianization   Let be a group.    is a normal subgroup of .    The quotient is abelian.    Let be the quotient map. The group is the largest abelian quotient of , as defined by the following universal property: if is an abelian group and is a homomorphism, there is a unique homomorphism satisfying .        Abelianization   The quotient group is called the the abelianization of .     Abelianization of free group   Suppose is freely generated by the collection . Let be the quotient map, and denote for all . The abelianization is a free abelian group with basis .     Free group  Rank of free group   Let and be free groups with systems of free generators and , respectively. We have if and only if .     Rank of free group   The rank of a free group , denoted , is the cardinality of any system free generators of .    "
},
{
  "id": "d_free_groups",
  "level": "2",
  "url": "s_groups_free.html#d_free_groups",
  "type": "Definition",
  "number": "2.14.1",
  "title": "Free group.",
  "body": " Free group   A group is free if it is isomorphic to a free product of copies of : , if for some set .  Given an indexed set , we let be the infinite cyclic group with generator (hence ), and we call the free group on the elements  .   "
},
{
  "id": "th_free_groups",
  "level": "2",
  "url": "s_groups_free.html#th_free_groups",
  "type": "Theorem",
  "number": "2.14.2",
  "title": "Free groups.",
  "body": " Free groups   Let be a group. The following are equivalent.    is a free group.    There is a family of elements of such that for all we can write , where for all ; and furthermore this expression is unique if for all and for all .    There is a family of elements of such that given any group and collection of elements of , there is a unique homomorphism satisfying .      "
},
{
  "id": "d_freely_generated",
  "level": "2",
  "url": "s_groups_free.html#d_freely_generated",
  "type": "Definition",
  "number": "2.14.3",
  "title": "Freely generated.",
  "body": " Freely generated   Let be a group. A tuple satisfying the conditions of is called a system of free generators . We say that is freely generated by the in this case.   "
},
{
  "id": "th_quotients_of_free_groups",
  "level": "2",
  "url": "s_groups_free.html#th_quotients_of_free_groups",
  "type": "Theorem",
  "number": "2.14.4",
  "title": "Quotients of free groups.",
  "body": " Quotients of free groups   Any group is isomorphic to a quotient of a free group: , we have for some free group and normal subgroup .   "
},
{
  "id": "d_group_presentation",
  "level": "2",
  "url": "s_groups_free.html#d_group_presentation",
  "type": "Definition",
  "number": "2.14.5",
  "title": "Group presentation.",
  "body": " Group presentation   Let be the free group on the elements . Let be an subset of . We denote by the quotient , where is the least normal subgroup containing . We say is a presentation of a group with generators  and relations  if .   "
},
{
  "id": "s_groups_free-7",
  "level": "2",
  "url": "s_groups_free.html#s_groups_free-7",
  "type": "Remark",
  "number": "2.14.6",
  "title": "",
  "body": " The relations in a group presentation should be thought of as elements that get sent to the identity in the quotient . For example, if is an element of then the element in the quotient . Equivalently, this means . As an abuse of notation, we sometimes include the equality among the elements of to emphasize that this relation holds in the quotient. In other words, we write instead of   "
},
{
  "id": "eg_presentation",
  "level": "2",
  "url": "s_groups_free.html#eg_presentation",
  "type": "Example",
  "number": "2.14.7",
  "title": "Presentations of groups.",
  "body": " Presentations of groups Identify a familiar group with given presentation. Justify your answer.             "
},
{
  "id": "d_commutator_subgroup",
  "level": "2",
  "url": "s_groups_free.html#d_commutator_subgroup",
  "type": "Definition",
  "number": "2.14.8",
  "title": "Commutator subgroup.",
  "body": " Commutator subgroup   Let be a group. The commutator  of elements is defined as . The commutator subgroup of , denoted is the subgroup of generated by the set of all commutators in .   "
},
{
  "id": "th_commutator_abelianization",
  "level": "2",
  "url": "s_groups_free.html#th_commutator_abelianization",
  "type": "Theorem",
  "number": "2.14.9",
  "title": "Commutator and abelianization.",
  "body": " Commutator and abelianization   Let be a group.    is a normal subgroup of .    The quotient is abelian.    Let be the quotient map. The group is the largest abelian quotient of , as defined by the following universal property: if is an abelian group and is a homomorphism, there is a unique homomorphism satisfying .      "
},
{
  "id": "d_abelianlization",
  "level": "2",
  "url": "s_groups_free.html#d_abelianlization",
  "type": "Definition",
  "number": "2.14.10",
  "title": "Abelianization.",
  "body": " Abelianization   The quotient group is called the the abelianization of .   "
},
{
  "id": "th_free_group_abelianization",
  "level": "2",
  "url": "s_groups_free.html#th_free_group_abelianization",
  "type": "Theorem",
  "number": "2.14.11",
  "title": "Abelianization of free group.",
  "body": " Abelianization of free group   Suppose is freely generated by the collection . Let be the quotient map, and denote for all . The abelianization is a free abelian group with basis .   "
},
{
  "id": "cor_free_group",
  "level": "2",
  "url": "s_groups_free.html#cor_free_group",
  "type": "Corollary",
  "number": "2.14.12",
  "title": "Free groupRank of free group",
  "body": " Free group  Rank of free group   Let and be free groups with systems of free generators and , respectively. We have if and only if .   "
},
{
  "id": "d_rank_free_group",
  "level": "2",
  "url": "s_groups_free.html#d_rank_free_group",
  "type": "Definition",
  "number": "2.14.13",
  "title": "Rank of free group.",
  "body": " Rank of free group   The rank of a free group , denoted , is the cardinality of any system free generators of .   "
},
{
  "id": "s_seifert_van_kampen",
  "level": "1",
  "url": "s_seifert_van_kampen.html",
  "type": "Section",
  "number": "2.15",
  "title": "Seifert-van Kampen theorem",
  "body": " Seifert-van Kampen theorem   Pushouts of groups   A pushout (or fibered coproduct ) of a pair of group homomorphisms and is a group equipped with homomorphisms and satisfying and the following universal mapping property of pushouts :   Universal mapping property of pushouts  If is a group and and are homomorphisms satisfying , then there is a unique homomorphism satisfying for .     Pushout commutative diagram   As we will see, a pushout is unique up to isomorphism. We write to denote a pushout of the maps and .     Pushouts   Let and be group homomorphisms.   If and are pushouts of the homomorphisms , then .    Let be a free product of and , and identify and as subgroups of as usual. The quotient is a pushout of the homomorphisms , where is the least normal subgroup of containing the set .       Homework exercise.     Seifert-van Kampen theorem   Let be an open covering where , , and are path connected. In the diagram below, each of the homomorphisms of fundamental groups is induced by the corresponding inclusion of topological spaces. We have . In more detail, given any group and homomorphisms and satisfying , there is a unique homomorphism satisfying for .  Commutative diagram for Seifert-van Kampen theorem       First we introduce some useful notation. For a path , we write to denote the path homotopy equivalence class of in ; if for , then we write to denote the path homotopy equivalance class of in . We can use this notation to describe our maps as follows: .   Uniqueness of  We can see by the weak Seifert-van Kampen theorem that there is at most one satisfying the given conditions. Indeed, given any , we have , where or for all . But then since is a group homomorphism, we must have where Thus the homomorphism is uniquely determined by the homomorphisms and .    Existence of  We will define by constructing a function that satisfies the following conditions: . With such a in hand, we let be defined as . It is clear from properties that is a homomorphism; and properties guarantee that for .  Our construction of proceeds by building up the domain of definition of step by step: from to to .   Construction: ,  If is a path based on lying either in or , we define Observe that satisfies the following relative versions of properties : , where or .    Construction: ,  First we fix a family of paths satisfying the following conditions:    ( , is a path from to ),     ,     for .   This is where we use the condition that , , and are all path connected (and that ).  Next, given a path (not necessarily a loop) , where or , we define . Note that the right-hand side here makes sense since . It is now a straightforward exercise to show that satisfies the following properties: , where or . For example, follows from the fact that if and are homotopic in , then so are and . And can be shown as follows: if and , then we have     Construction: ,  We now define . Given , since is an open cover of the compact set , by we can find a partition such that for all we have or . Let be the positive linear map from to ( , ), and let . We define . We must show that is well-defined, agrees with and satisfies .   is well-defined and agrees with  First we show that is well-defined: , that our definition does not depend on our choice of partition of . Since any two partitions have a common refinement, it suffices to show that refining our partition by one additional endpoint does not affect our definition of . Suppose we split the -th subinterval as , and let , where is the positive linear map from to , and let , where is the positive linear map from to . Since for or , we have , where the last equality holds because and property .  It is clear that agrees with since for a path , where or , we may choose as our partition , in which case .  In particular since agrees with our earlier definition of , where , properties are automatically satisfied.    satisfies  Assume and . Let be a path homotopy from to . Again, using , we can find partitions such that for each subrectangle of , we have , where or . For each with and , let be the horizontal path in from to ; similarly define to be the vertical path from to for all pairs with and . Lastly, define for all pairs for which these expressions make sense. Fix a pair with . The polygonal paths and respectively traverse the bottom-and-right segment and left-and-top segment of the rectangle . Since the rectangle is convex, these paths are homotopic in . Composing with gives us a homotopy of and in . Using properties of , we conclude that and hence that . Let for all . So in particular, we have and . Note that we have . It follows, using our definition of that for all , we have . We conclude that , as desired.    satisfies  Let and . We prove that . We choose a partition such that for some and for all we have , where or . As above, we let be the positive linear map from onto . First observe, using the definition of , that By definition, we have . The last equality here follows as the functions are the positive linear maps corresponding to the two partitions . The definition of now implies .        Seifert-van Kampen: classical   Let be an open covering where , , and are path connected. With notation as in the Seifert-van Kampen theorem, we have , where is the least normal subgroup of containing the set .    This follows directly from and .     Seifert-van Kampen: special cases   Let be an open covering where , , and are path connected. Let be as in the Seifert-van Kampen theorem.    If and are simply connected, then is simply connected.    If is simply connected, then .    If is simply connected, then , where is the least normal subgroup of containing .      This follows directly from the explicit description of given in .    "
},
{
  "id": "d_pushout_group",
  "level": "2",
  "url": "s_seifert_van_kampen.html#d_pushout_group",
  "type": "Definition",
  "number": "2.15.1",
  "title": "Pushouts of groups.",
  "body": " Pushouts of groups   A pushout (or fibered coproduct ) of a pair of group homomorphisms and is a group equipped with homomorphisms and satisfying and the following universal mapping property of pushouts :   Universal mapping property of pushouts  If is a group and and are homomorphisms satisfying , then there is a unique homomorphism satisfying for .     Pushout commutative diagram   As we will see, a pushout is unique up to isomorphism. We write to denote a pushout of the maps and .   "
},
{
  "id": "th_pushouts",
  "level": "2",
  "url": "s_seifert_van_kampen.html#th_pushouts",
  "type": "Theorem",
  "number": "2.15.2",
  "title": "Pushouts.",
  "body": " Pushouts   Let and be group homomorphisms.   If and are pushouts of the homomorphisms , then .    Let be a free product of and , and identify and as subgroups of as usual. The quotient is a pushout of the homomorphisms , where is the least normal subgroup of containing the set .       Homework exercise.   "
},
{
  "id": "th_seifert_van_kampen",
  "level": "2",
  "url": "s_seifert_van_kampen.html#th_seifert_van_kampen",
  "type": "Theorem",
  "number": "2.15.3",
  "title": "Seifert-van Kampen theorem.",
  "body": " Seifert-van Kampen theorem   Let be an open covering where , , and are path connected. In the diagram below, each of the homomorphisms of fundamental groups is induced by the corresponding inclusion of topological spaces. We have . In more detail, given any group and homomorphisms and satisfying , there is a unique homomorphism satisfying for .  Commutative diagram for Seifert-van Kampen theorem       First we introduce some useful notation. For a path , we write to denote the path homotopy equivalence class of in ; if for , then we write to denote the path homotopy equivalance class of in . We can use this notation to describe our maps as follows: .   Uniqueness of  We can see by the weak Seifert-van Kampen theorem that there is at most one satisfying the given conditions. Indeed, given any , we have , where or for all . But then since is a group homomorphism, we must have where Thus the homomorphism is uniquely determined by the homomorphisms and .    Existence of  We will define by constructing a function that satisfies the following conditions: . With such a in hand, we let be defined as . It is clear from properties that is a homomorphism; and properties guarantee that for .  Our construction of proceeds by building up the domain of definition of step by step: from to to .   Construction: ,  If is a path based on lying either in or , we define Observe that satisfies the following relative versions of properties : , where or .    Construction: ,  First we fix a family of paths satisfying the following conditions:    ( , is a path from to ),     ,     for .   This is where we use the condition that , , and are all path connected (and that ).  Next, given a path (not necessarily a loop) , where or , we define . Note that the right-hand side here makes sense since . It is now a straightforward exercise to show that satisfies the following properties: , where or . For example, follows from the fact that if and are homotopic in , then so are and . And can be shown as follows: if and , then we have     Construction: ,  We now define . Given , since is an open cover of the compact set , by we can find a partition such that for all we have or . Let be the positive linear map from to ( , ), and let . We define . We must show that is well-defined, agrees with and satisfies .   is well-defined and agrees with  First we show that is well-defined: , that our definition does not depend on our choice of partition of . Since any two partitions have a common refinement, it suffices to show that refining our partition by one additional endpoint does not affect our definition of . Suppose we split the -th subinterval as , and let , where is the positive linear map from to , and let , where is the positive linear map from to . Since for or , we have , where the last equality holds because and property .  It is clear that agrees with since for a path , where or , we may choose as our partition , in which case .  In particular since agrees with our earlier definition of , where , properties are automatically satisfied.    satisfies  Assume and . Let be a path homotopy from to . Again, using , we can find partitions such that for each subrectangle of , we have , where or . For each with and , let be the horizontal path in from to ; similarly define to be the vertical path from to for all pairs with and . Lastly, define for all pairs for which these expressions make sense. Fix a pair with . The polygonal paths and respectively traverse the bottom-and-right segment and left-and-top segment of the rectangle . Since the rectangle is convex, these paths are homotopic in . Composing with gives us a homotopy of and in . Using properties of , we conclude that and hence that . Let for all . So in particular, we have and . Note that we have . It follows, using our definition of that for all , we have . We conclude that , as desired.    satisfies  Let and . We prove that . We choose a partition such that for some and for all we have , where or . As above, we let be the positive linear map from onto . First observe, using the definition of , that By definition, we have . The last equality here follows as the functions are the positive linear maps corresponding to the two partitions . The definition of now implies .      "
},
{
  "id": "cor_Seifert_vanKampen",
  "level": "2",
  "url": "s_seifert_van_kampen.html#cor_Seifert_vanKampen",
  "type": "Corollary",
  "number": "2.15.4",
  "title": "Seifert-van Kampen: classical.",
  "body": " Seifert-van Kampen: classical   Let be an open covering where , , and are path connected. With notation as in the Seifert-van Kampen theorem, we have , where is the least normal subgroup of containing the set .    This follows directly from and .   "
},
{
  "id": "cor_Seifert_vanKampen_simplyconnected",
  "level": "2",
  "url": "s_seifert_van_kampen.html#cor_Seifert_vanKampen_simplyconnected",
  "type": "Corollary",
  "number": "2.15.5",
  "title": "Seifert-van Kampen: special cases.",
  "body": " Seifert-van Kampen: special cases   Let be an open covering where , , and are path connected. Let be as in the Seifert-van Kampen theorem.    If and are simply connected, then is simply connected.    If is simply connected, then .    If is simply connected, then , where is the least normal subgroup of containing .      This follows directly from the explicit description of given in .   "
},
{
  "id": "s_wedge_of_circles",
  "level": "1",
  "url": "s_wedge_of_circles.html",
  "type": "Section",
  "number": "2.16",
  "title": "Wedge of circles",
  "body": " Wedge of circles   Wedge of circles   A wedge of circles is a Hausdorff space for which we have , where is homeomorphic to for all , and there is an element such that for all .     Wedge of cirles   For each positive integer , let be the circle with equation . For any positive integer , the subspace is a wedge of circles.     Wedge of circles   Let be a wedge of circles, let , and for each let be a loop whose path homotopy equivalence class in generates . We have , and is a system of free generators of .     Wedge of circles   Let be a family of subspaces of the space satisfying . The topology of is coherent with respect to if for all subsets we have closed if and only if is closed in for all . Equivalently, the topology is coherent with respect to the if for all subsets we have open if and only if is open in for all .  A wedge of circles is a space such that (i) for some family of subspaces where each is homeomorphic to , (ii) there is an element such that for all , and (iii) is coherent with respect to .     Wedge of circles   Let be a wedge of circles, let , and for each let be a loop whose path homotopy equivalence class in generates . We have , and is a system of free generators of .    "
},
{
  "id": "d_wege_of_n_circls",
  "level": "2",
  "url": "s_wedge_of_circles.html#d_wege_of_n_circls",
  "type": "Definition",
  "number": "2.16.1",
  "title": "Wedge of <span class=\"process-math\">\\(n\\)<\/span> circles.",
  "body": " Wedge of circles   A wedge of circles is a Hausdorff space for which we have , where is homeomorphic to for all , and there is an element such that for all .   "
},
{
  "id": "eg_wedge_of_n_circles",
  "level": "2",
  "url": "s_wedge_of_circles.html#eg_wedge_of_n_circles",
  "type": "Example",
  "number": "2.16.2",
  "title": "Wedge of <span class=\"process-math\">\\(n\\)<\/span> cirles.",
  "body": " Wedge of cirles   For each positive integer , let be the circle with equation . For any positive integer , the subspace is a wedge of circles.   "
},
{
  "id": "th_wedge_of_n_circles",
  "level": "2",
  "url": "s_wedge_of_circles.html#th_wedge_of_n_circles",
  "type": "Theorem",
  "number": "2.16.3",
  "title": "Wedge of <span class=\"process-math\">\\(n\\)<\/span> circles.",
  "body": " Wedge of circles   Let be a wedge of circles, let , and for each let be a loop whose path homotopy equivalence class in generates . We have , and is a system of free generators of .   "
},
{
  "id": "d_wedge_of_circles",
  "level": "2",
  "url": "s_wedge_of_circles.html#d_wedge_of_circles",
  "type": "Definition",
  "number": "2.16.4",
  "title": "Wedge of circles.",
  "body": " Wedge of circles   Let be a family of subspaces of the space satisfying . The topology of is coherent with respect to if for all subsets we have closed if and only if is closed in for all . Equivalently, the topology is coherent with respect to the if for all subsets we have open if and only if is open in for all .  A wedge of circles is a space such that (i) for some family of subspaces where each is homeomorphic to , (ii) there is an element such that for all , and (iii) is coherent with respect to .   "
},
{
  "id": "th_wedge_of_circles",
  "level": "2",
  "url": "s_wedge_of_circles.html#th_wedge_of_circles",
  "type": "Theorem",
  "number": "2.16.5",
  "title": "Wedge of circles.",
  "body": " Wedge of circles   Let be a wedge of circles, let , and for each let be a loop whose path homotopy equivalence class in generates . We have , and is a system of free generators of .   "
},
{
  "id": "s_adjoin_2cell",
  "level": "1",
  "url": "s_adjoin_2cell.html",
  "type": "Section",
  "number": "2.17",
  "title": "Adjoining a 2-cell",
  "body": " Adjoining a 2-cell   2-cell   A 2-cell is a space that is homeomorphic to the closed disc . Given a 2-cell with homeomorphism , we denote by the image of the boundary of ; and we denote by the set , which is the image of the open disc under .     Adjoining a 2-cell   Let be a closed path-connected subspace of the Hausdorff space , and suppose there is a 2-cell and map such that (i) and (ii) is a bijection onto . Fix any point , let , and define to be the restriction of to .  The map induced by the inclusion is surjective and its kernel is the least normal subgroup of containing . Equivalently, if is a loop such that generated , then is the least normal subgroup of containing .     Adjoining a 2-cell   Let be a closed path-connected subspace of the Hausdorff space . We say is obtained from by adjoining a 2-cell if there is a 2-cell and map such that and is a bijection onto .     Torus revisited (again)   Fix any The map defined as provides a realization of the torus as a closed subspace of . The space is a , with equal to the square perimeter of . Let .   Show that is obtained from by adjoining a -cell via .    Use the adjoining a 2-cell theorem to compute for any point .       "
},
{
  "id": "d_2cell",
  "level": "2",
  "url": "s_adjoin_2cell.html#d_2cell",
  "type": "Definition",
  "number": "2.17.1",
  "title": "2-cell.",
  "body": " 2-cell   A 2-cell is a space that is homeomorphic to the closed disc . Given a 2-cell with homeomorphism , we denote by the image of the boundary of ; and we denote by the set , which is the image of the open disc under .   "
},
{
  "id": "th_adjoining_2cell",
  "level": "2",
  "url": "s_adjoin_2cell.html#th_adjoining_2cell",
  "type": "Theorem",
  "number": "2.17.2",
  "title": "Adjoining a 2-cell.",
  "body": " Adjoining a 2-cell   Let be a closed path-connected subspace of the Hausdorff space , and suppose there is a 2-cell and map such that (i) and (ii) is a bijection onto . Fix any point , let , and define to be the restriction of to .  The map induced by the inclusion is surjective and its kernel is the least normal subgroup of containing . Equivalently, if is a loop such that generated , then is the least normal subgroup of containing .   "
},
{
  "id": "d_adjoining_2cell",
  "level": "2",
  "url": "s_adjoin_2cell.html#d_adjoining_2cell",
  "type": "Definition",
  "number": "2.17.3",
  "title": "Adjoining a 2-cell.",
  "body": " Adjoining a 2-cell   Let be a closed path-connected subspace of the Hausdorff space . We say is obtained from by adjoining a 2-cell if there is a 2-cell and map such that and is a bijection onto .   "
},
{
  "id": "eg_torus_revisited",
  "level": "2",
  "url": "s_adjoin_2cell.html#eg_torus_revisited",
  "type": "Example",
  "number": "2.17.4",
  "title": "Torus revisited (again).",
  "body": " Torus revisited (again)   Fix any The map defined as provides a realization of the torus as a closed subspace of . The space is a , with equal to the square perimeter of . Let .   Show that is obtained from by adjoining a -cell via .    Use the adjoining a 2-cell theorem to compute for any point .      "
},
{
  "id": "s_dunce_cap",
  "level": "1",
  "url": "s_dunce_cap.html",
  "type": "Section",
  "number": "2.18",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-fold dunce caps",
  "body": " -fold dunce caps   -fold dunce cap   Fix a positive integer , let , and let be the rotation by map: , for a point , we have .  The -fold dunce cap is the quotient of obtained by identifying any two points satisfying .     Normality of quotients   Let be a closed quotient map. If is normal, then is normal.    First we show that is a -space. Since is surjective, for all we have for some . Since is , the set is closed. Since is a closed map, the set is closed. Thus is .  We use the alternate formulation of normality . Consider an inclusion , where is closed and is open. Taking preimages under yields an inclusion , where is closed and is open. Since is normal there is an open set satisfying .  It is not necessarily true that is open, since we can not guarantee that is saturated. However, since is closed and is a closed map, the image is closed in . Let . Since (we use here that is surjective), we have . Since , we see that , and thus . We conclude that is an open set satisfying , showing that is normal.     Dunce cap fundamental group   Let be the -fold dunces cap, let be the quotient map, and let .    The space is Hausdorff and path connected, the subspace is closed and path connected, and is obtained from by adjoining a 2-cell via the map .    We have for any .      Proof of (1)      Proof of (2)      "
},
{
  "id": "d_dunce_cap",
  "level": "2",
  "url": "s_dunce_cap.html#d_dunce_cap",
  "type": "Definition",
  "number": "2.18.1",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-fold dunce cap.",
  "body": " -fold dunce cap   Fix a positive integer , let , and let be the rotation by map: , for a point , we have .  The -fold dunce cap is the quotient of obtained by identifying any two points satisfying .   "
},
{
  "id": "lemmma_quotient_normality",
  "level": "2",
  "url": "s_dunce_cap.html#lemmma_quotient_normality",
  "type": "Lemma",
  "number": "2.18.2",
  "title": "Normality of quotients.",
  "body": " Normality of quotients   Let be a closed quotient map. If is normal, then is normal.    First we show that is a -space. Since is surjective, for all we have for some . Since is , the set is closed. Since is a closed map, the set is closed. Thus is .  We use the alternate formulation of normality . Consider an inclusion , where is closed and is open. Taking preimages under yields an inclusion , where is closed and is open. Since is normal there is an open set satisfying .  It is not necessarily true that is open, since we can not guarantee that is saturated. However, since is closed and is a closed map, the image is closed in . Let . Since (we use here that is surjective), we have . Since , we see that , and thus . We conclude that is an open set satisfying , showing that is normal.   "
},
{
  "id": "th_fund_grp_dunce",
  "level": "2",
  "url": "s_dunce_cap.html#th_fund_grp_dunce",
  "type": "Theorem",
  "number": "2.18.3",
  "title": "Dunce cap fundamental group.",
  "body": " Dunce cap fundamental group   Let be the -fold dunces cap, let be the quotient map, and let .    The space is Hausdorff and path connected, the subspace is closed and path connected, and is obtained from by adjoining a 2-cell via the map .    We have for any .      Proof of (1)      Proof of (2)     "
},
{
  "id": "s_polygonal_regions",
  "level": "1",
  "url": "s_polygonal_regions.html",
  "type": "Section",
  "number": "2.19",
  "title": "Pasted polygonal regions",
  "body": " Pasted polygonal regions   Polygonal region   Let be the the circle with equation . Given integer and angles we consider the distinct points on $C$ given by , for .  Next for each , let be the closed half-plane containing whose boundary is the line determined by . The polygonal region determined by is the region defined as . For all the point is called a vertex of , and the line segment between and is called an edge of .     Oriented line segment   An orientation of a line segment is an ordering of its endpoints as a pair . In this case is called the initial point , and the final point of . We will denote by the oriented line segment with initial point and final point .  Given two oriented line segments and the positive linear map of onto is the unique homeomorphism satisfying for all .    If is the polygonal region corresponding to points , and is the polygonal region corresponding to points , then there is a homeomorphism whose restriction to the oriented edge is the positive linear map from to .   Oriented labelling   Let be a polygonal region corresponding to points , for each let be the edge between and , and let be the set of edges of . A labelling of the edges of is a function . For each , we call the label of .  An oriented labelling of the edges of is a function . For each the assigned orientation of with respect to is if , and if .  Given an oriented labelling of , the corresponding labelling scheme of length is the expression , where for all we have . In other words, is the label of edge , and indicates its orientation.     Pasted polygonal region   Let be a polygonal region corresponding to points and let be a labelling scheme corresponding to an oriented labelling of the edges of . The space obtained by pasting the edges of together according to the labelling scheme is the quotient obtained by identifying points on any two oriented edges and that have the same label according to the positive linear map .  More generally, given pairwise disjoint polygonal regions with labelling schemes , the space obtained by pasting together the edges of the is the quotient obtained from by identifying points on edges with the same labels as above.     Pasted polygonal regions   If is obtained by pasting together the edges of polygonal regions according to labelling schemes, then is a compact Hausdorff space.     Pasted polygonal fundamental groups   Let be obtained by pasting together the edges of a polygon according to the labelling scheme , let be the distinct labels occurring in , and let be the quotient map. If maps all vertices of to a single point , then .     -fold torus   Fix an integer . Let and be disjoint sets of cardinality , and let be the space obtained by pasting together the edges of a polygon according to the labelling scheme . We call an -fold connected sum of tori , or simply the -fold torus , denoted .     -fold projective plane   Fix an integer . Let be distinct labels, and let be the space obtained by pasting together the edges of a polygon according to the labelling scheme . We call an -fold connected sum of projective planes , or simply the -fold projective plane , denoted .     Fundamental group of -fold torus and -fold projective plane   Let be the space obtained by pasting together the edges of a polygon according to the labelling scheme , and suppose all vertices get mapped to a single point .   -fold torus  If is an -fold torus, then .    -fold projective plane  If is an -fold projective plane, then .       "
},
{
  "id": "d_polygonal_region",
  "level": "2",
  "url": "s_polygonal_regions.html#d_polygonal_region",
  "type": "Definition",
  "number": "2.19.1",
  "title": "Polygonal region.",
  "body": " Polygonal region   Let be the the circle with equation . Given integer and angles we consider the distinct points on $C$ given by , for .  Next for each , let be the closed half-plane containing whose boundary is the line determined by . The polygonal region determined by is the region defined as . For all the point is called a vertex of , and the line segment between and is called an edge of .   "
},
{
  "id": "d_orientation",
  "level": "2",
  "url": "s_polygonal_regions.html#d_orientation",
  "type": "Definition",
  "number": "2.19.2",
  "title": "Oriented line segment.",
  "body": " Oriented line segment   An orientation of a line segment is an ordering of its endpoints as a pair . In this case is called the initial point , and the final point of . We will denote by the oriented line segment with initial point and final point .  Given two oriented line segments and the positive linear map of onto is the unique homeomorphism satisfying for all .   "
},
{
  "id": "s_polygonal_regions-4",
  "level": "2",
  "url": "s_polygonal_regions.html#s_polygonal_regions-4",
  "type": "Remark",
  "number": "2.19.3",
  "title": "",
  "body": "If is the polygonal region corresponding to points , and is the polygonal region corresponding to points , then there is a homeomorphism whose restriction to the oriented edge is the positive linear map from to . "
},
{
  "id": "d_oriented_labelling",
  "level": "2",
  "url": "s_polygonal_regions.html#d_oriented_labelling",
  "type": "Definition",
  "number": "2.19.4",
  "title": "Oriented labelling.",
  "body": " Oriented labelling   Let be a polygonal region corresponding to points , for each let be the edge between and , and let be the set of edges of . A labelling of the edges of is a function . For each , we call the label of .  An oriented labelling of the edges of is a function . For each the assigned orientation of with respect to is if , and if .  Given an oriented labelling of , the corresponding labelling scheme of length is the expression , where for all we have . In other words, is the label of edge , and indicates its orientation.   "
},
{
  "id": "d_pasted_polygonal_region",
  "level": "2",
  "url": "s_polygonal_regions.html#d_pasted_polygonal_region",
  "type": "Definition",
  "number": "2.19.5",
  "title": "Pasted polygonal region.",
  "body": " Pasted polygonal region   Let be a polygonal region corresponding to points and let be a labelling scheme corresponding to an oriented labelling of the edges of . The space obtained by pasting the edges of together according to the labelling scheme is the quotient obtained by identifying points on any two oriented edges and that have the same label according to the positive linear map .  More generally, given pairwise disjoint polygonal regions with labelling schemes , the space obtained by pasting together the edges of the is the quotient obtained from by identifying points on edges with the same labels as above.   "
},
{
  "id": "th_pasted_polygonal_regions",
  "level": "2",
  "url": "s_polygonal_regions.html#th_pasted_polygonal_regions",
  "type": "Theorem",
  "number": "2.19.6",
  "title": "Pasted polygonal regions.",
  "body": " Pasted polygonal regions   If is obtained by pasting together the edges of polygonal regions according to labelling schemes, then is a compact Hausdorff space.   "
},
{
  "id": "th_pasted_polygonal_regions_fund_grp",
  "level": "2",
  "url": "s_polygonal_regions.html#th_pasted_polygonal_regions_fund_grp",
  "type": "Theorem",
  "number": "2.19.7",
  "title": "Pasted polygonal fundamental groups.",
  "body": " Pasted polygonal fundamental groups   Let be obtained by pasting together the edges of a polygon according to the labelling scheme , let be the distinct labels occurring in , and let be the quotient map. If maps all vertices of to a single point , then .   "
},
{
  "id": "d_nfold_torus",
  "level": "2",
  "url": "s_polygonal_regions.html#d_nfold_torus",
  "type": "Definition",
  "number": "2.19.8",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-fold torus.",
  "body": " -fold torus   Fix an integer . Let and be disjoint sets of cardinality , and let be the space obtained by pasting together the edges of a polygon according to the labelling scheme . We call an -fold connected sum of tori , or simply the -fold torus , denoted .   "
},
{
  "id": "d_mfold_projective_plane",
  "level": "2",
  "url": "s_polygonal_regions.html#d_mfold_projective_plane",
  "type": "Definition",
  "number": "2.19.9",
  "title": "<span class=\"process-math\">\\(m\\)<\/span>-fold projective plane.",
  "body": " -fold projective plane   Fix an integer . Let be distinct labels, and let be the space obtained by pasting together the edges of a polygon according to the labelling scheme . We call an -fold connected sum of projective planes , or simply the -fold projective plane , denoted .   "
},
{
  "id": "th_torus_projective_plane",
  "level": "2",
  "url": "s_polygonal_regions.html#th_torus_projective_plane",
  "type": "Corollary",
  "number": "2.19.10",
  "title": "Fundamental group of <span class=\"process-math\">\\(n\\)<\/span>-fold torus and <span class=\"process-math\">\\(m\\)<\/span>-fold projective plane.",
  "body": " Fundamental group of -fold torus and -fold projective plane   Let be the space obtained by pasting together the edges of a polygon according to the labelling scheme , and suppose all vertices get mapped to a single point .   -fold torus  If is an -fold torus, then .    -fold projective plane  If is an -fold projective plane, then .      "
},
{
  "id": "s_surface_classification",
  "level": "1",
  "url": "s_surface_classification.html",
  "type": "Section",
  "number": "2.20",
  "title": "Classification of surfaces",
  "body": " Classification of surfaces   Equivalent labelling schemes   Two labelling schemes and are equivalent if their corresponding quotient spaces are homeomorphic. In this case we write .     Elementary operations   Each of the following procedures, called elementary operations , when applied to a labelling scheme , produces an equivalent labelling scheme.   Cut\/Paste  Cut any , replacing it with , where , each has length at least two, and does not appear as a label in the original labelling scheme.  Past any two elements $w_j=y_0c^{-1}, w_k=cy_1$, together, replacing them with $w=y_0y_1$, provided each has length at least two, and does not occur anywhere else in the labelling scheme.    Relabel base\/flip exponent  Fix a label occurring in the scheme. Replace all occurrences with , where is a label not occurring in the original labelling scheme.  Fix a label occurring in the scheme. Replace all occurrences of with .    Cycle  Replace any with , where is any cyclic permutation of .    Flip  Replace any with its formal inverse  .    Fusion\/Fission  Assuming labels always occur in the labelling scheme either as or , replace each instance of with and each instance of with , provided does not occur in the original labelling scheme, and that the resulting polygons all have length at least .  Replace all instances of with and all instances of with , assuming and do not occur in the original labelling scheme.    Cancel\/uncancel  Replace any with , provided does not occur anywhere else in the labelling scheme and has length at least 5.  Replace any with , provided does not occur in the original labelling scheme.        Abelianization of quotients   Let be a normal subgroup of the group , and let and be the quotient homomorphisms. We have     Let and be the quotient maps. Given , let denote its image in under the quotient map . Similarly, given , let denote its image in . (There will be no ambiguity in our discussion as to which map the bar notation refers to.) Using mapping properties of the quotient and the abelianization , we get the following commutative diagram  Quotients and abelianizations diagram   where satisfies and satisfies . Now the mapping properties of the abelianization and the quotient give rise to the commutative diagram  Another quotients and abelianizations diagram   where satisfies and satisfies . It is then evident from the for formulas for and that and . We conclude that (and ) is an isomorphism, as desired.     Non-homeomorphic surfaces   Let denote the -fold torus, and let denote the -fold projective plane ( ). We have It follows that the fundamental groups of the surfaces are pairwise non-isomorphic, and hence that the surfaces are pairwise non-homeomorphic.    First observe that the last sentence of the theorem follows from the fact that isomorphic groups have isomorphic abelianizations, and homeomorphic spaces have isomorphic fundamental groups. We now prove the statement about the abelianizations.  To see that the listed abelianizations are pairwise non-isomorphic groups, observe first that all the groups associated to spaces have torsion elements, whereas those associated to the spaces are torsion free. Next for any the abelian group associated to has rank . Thus for any the corresponding abelianizations have distinct ranks, and hence are not isomorphic. Similarly, the rank of the abelian group associated to is , and thus these groups are non-isomorphic for any pair .  We now turn to the computation of these abelianizations. Recall that we have . Clearly we thus have . We will use for the remaining statements. To relate this result more directly to our given finite presentations, we will make use of the following claim (which you are invited to prove): if is a surjective homomorphism and , then , where denotes the least normal subgroup containing the set set . (A hint for proving this fact: use the correspondence theorem to relate normal subgroups of with normal subgroups of .)  Now consider . Let , let be the free group on , let , and let be the quotient map. We have , where the last line follows since for any elements . Finally, by  is a free abelian group of rank : and in fact, the image of the system of free generators is a basis of as a free abelian group. We conclude that , as claimed.  Finally, consider . Let . An argument very similar to the preceding one implies , where denotes the image of in the abelianization . (Note that all subgroups in are normal since the group is abelian. This is why we can dispence with the operator.) Let be the standard basis of . (In other words, is the -tuple containing a one in the -th entry, and zeros elsewhere.) Since forms a basis of as a free abelian group, there is an isomorphism obtained by sending to . Next, it is easy to see that is another basis of . It follows that the isomorphism of sending to for all gives rise to an isomorphism , as desired.     Classification theorem   Let denote the -fold torus, and let denote the -fold projective plane ( ). If is a compact 2-manifold ( , a surface), then is homemorphic to exactly one of the following surfaces: , for some , for some .    "
},
{
  "id": "d_equivalent_labelling_schemes",
  "level": "2",
  "url": "s_surface_classification.html#d_equivalent_labelling_schemes",
  "type": "Definition",
  "number": "2.20.1",
  "title": "Equivalent labelling schemes.",
  "body": " Equivalent labelling schemes   Two labelling schemes and are equivalent if their corresponding quotient spaces are homeomorphic. In this case we write .   "
},
{
  "id": "th_elementary_operations",
  "level": "2",
  "url": "s_surface_classification.html#th_elementary_operations",
  "type": "Theorem",
  "number": "2.20.2",
  "title": "Elementary operations.",
  "body": " Elementary operations   Each of the following procedures, called elementary operations , when applied to a labelling scheme , produces an equivalent labelling scheme.   Cut\/Paste  Cut any , replacing it with , where , each has length at least two, and does not appear as a label in the original labelling scheme.  Past any two elements $w_j=y_0c^{-1}, w_k=cy_1$, together, replacing them with $w=y_0y_1$, provided each has length at least two, and does not occur anywhere else in the labelling scheme.    Relabel base\/flip exponent  Fix a label occurring in the scheme. Replace all occurrences with , where is a label not occurring in the original labelling scheme.  Fix a label occurring in the scheme. Replace all occurrences of with .    Cycle  Replace any with , where is any cyclic permutation of .    Flip  Replace any with its formal inverse  .    Fusion\/Fission  Assuming labels always occur in the labelling scheme either as or , replace each instance of with and each instance of with , provided does not occur in the original labelling scheme, and that the resulting polygons all have length at least .  Replace all instances of with and all instances of with , assuming and do not occur in the original labelling scheme.    Cancel\/uncancel  Replace any with , provided does not occur anywhere else in the labelling scheme and has length at least 5.  Replace any with , provided does not occur in the original labelling scheme.      "
},
{
  "id": "th_abelianization_of_quotient",
  "level": "2",
  "url": "s_surface_classification.html#th_abelianization_of_quotient",
  "type": "Theorem",
  "number": "2.20.3",
  "title": "Abelianization of quotients.",
  "body": " Abelianization of quotients   Let be a normal subgroup of the group , and let and be the quotient homomorphisms. We have     Let and be the quotient maps. Given , let denote its image in under the quotient map . Similarly, given , let denote its image in . (There will be no ambiguity in our discussion as to which map the bar notation refers to.) Using mapping properties of the quotient and the abelianization , we get the following commutative diagram  Quotients and abelianizations diagram   where satisfies and satisfies . Now the mapping properties of the abelianization and the quotient give rise to the commutative diagram  Another quotients and abelianizations diagram   where satisfies and satisfies . It is then evident from the for formulas for and that and . We conclude that (and ) is an isomorphism, as desired.   "
},
{
  "id": "th_classification_theorem_distinct",
  "level": "2",
  "url": "s_surface_classification.html#th_classification_theorem_distinct",
  "type": "Theorem",
  "number": "2.20.4",
  "title": "Non-homeomorphic surfaces.",
  "body": " Non-homeomorphic surfaces   Let denote the -fold torus, and let denote the -fold projective plane ( ). We have It follows that the fundamental groups of the surfaces are pairwise non-isomorphic, and hence that the surfaces are pairwise non-homeomorphic.    First observe that the last sentence of the theorem follows from the fact that isomorphic groups have isomorphic abelianizations, and homeomorphic spaces have isomorphic fundamental groups. We now prove the statement about the abelianizations.  To see that the listed abelianizations are pairwise non-isomorphic groups, observe first that all the groups associated to spaces have torsion elements, whereas those associated to the spaces are torsion free. Next for any the abelian group associated to has rank . Thus for any the corresponding abelianizations have distinct ranks, and hence are not isomorphic. Similarly, the rank of the abelian group associated to is , and thus these groups are non-isomorphic for any pair .  We now turn to the computation of these abelianizations. Recall that we have . Clearly we thus have . We will use for the remaining statements. To relate this result more directly to our given finite presentations, we will make use of the following claim (which you are invited to prove): if is a surjective homomorphism and , then , where denotes the least normal subgroup containing the set set . (A hint for proving this fact: use the correspondence theorem to relate normal subgroups of with normal subgroups of .)  Now consider . Let , let be the free group on , let , and let be the quotient map. We have , where the last line follows since for any elements . Finally, by  is a free abelian group of rank : and in fact, the image of the system of free generators is a basis of as a free abelian group. We conclude that , as claimed.  Finally, consider . Let . An argument very similar to the preceding one implies , where denotes the image of in the abelianization . (Note that all subgroups in are normal since the group is abelian. This is why we can dispence with the operator.) Let be the standard basis of . (In other words, is the -tuple containing a one in the -th entry, and zeros elsewhere.) Since forms a basis of as a free abelian group, there is an isomorphism obtained by sending to . Next, it is easy to see that is another basis of . It follows that the isomorphism of sending to for all gives rise to an isomorphism , as desired.   "
},
{
  "id": "th_classification_theorem",
  "level": "2",
  "url": "s_surface_classification.html#th_classification_theorem",
  "type": "Theorem",
  "number": "2.20.5",
  "title": "Classification theorem.",
  "body": " Classification theorem   Let denote the -fold torus, and let denote the -fold projective plane ( ). If is a compact 2-manifold ( , a surface), then is homemorphic to exactly one of the following surfaces: , for some , for some .   "
},
{
  "id": "s_covering_classification",
  "level": "1",
  "url": "s_covering_classification.html",
  "type": "Section",
  "number": "2.21",
  "title": "Classification of covering spaces",
  "body": " Classification of covering spaces   Maps of coverings   Let and be covering maps. A map of coverings is a continuous function satisfying .  Map of coverings   An equivalence of covering maps is a map of coverings that is a homeomorphism. The two covering maps and are equivalent if there is an equivalence of covering maps from to .     Covering spaces   Let be a covering map satisfying . Assume and are path connected and locally path connected.    Lifting criterion  Assume is path connected and locally path connected. If is a continuous map satisfying , then lifts to a map satisfying if and only if . Furthermore, the lifting , if it exists, is unique: , there is at most one lifting satisfying .    Equivalence of based coverings  Let be another covering map satisfying . Assume is path connected and locally path connected. There is an equivalence of covering maps satisfying if and only if . Furthermore, the equivalence , if it exists, is unique.    Equivalence of coverings  Let be another covering map satisfying . Assume is path connected and locally path connected. There is an equivalence of covering maps if and only if the subgroups are conjugate.       Liftings of coverings   Let and be coverings, and assume that , , and are path connected and locally path connected. Any map of coverings is itself a covering.     Covering spaces   Let and be coverings. Assume , , and are path connected and locally path connected.   Let and . There is a covering satisfying and if and only if . Furthermore, the covering is unique in this case.    Let and . There is a covering satisfying if and only if the subgroup is contained in a conjugate of the subgroup .       The corollary follows pretty much directly from and .     Universal covering space   Let be path connected and locally path connected. If is a covering map and is simply connected, then is called a universal covering of , and is called the universal covering space of .     Universal covering space is locally path connected  If is path connected and locally path connected and where is path connected, then it turns out that is also locally path connected (thanks to being a covering map). Thus a universal covering space of is automatically path connected (since it is simply connected) and locally path connected (thanks to the covering map ).    Universal covering space  Let be a universal covering.  If is another universal covering, then we have and thus . It follows from that and are equivalent as covering spaces . This justifies the the in .  Similarly, given any covering , since , implies there is a unique covering satisfying and . This justifies the universal in .   It turns out that a path connected and locally path connected space has a universal covering space if and only if it is semilocally simply connected . Connected topological manifolds provide an important example of spaces satisfying this property.   Semilocally simply connected   A space is semilocally simply connected if for each there is a neighborhood of such that the homomorphism induced by inclusion is trivial.     Universal covering space   Let be path connected and locally path connected. There is a universal covering space of if and only if is semilocally simply connected.    The existence of a universal covering space is really a special case of the more general theorem below, where we take .   Covering space correspondence   Assume is semilocally simply connected. Fix an element and let .   A surjection  Given any subgroup there is a path connected and locally path connected pointed covering satisfying . In other words the map is a surjection from the set of all path connected and locally path connected pointed coverings of and subgroups of .    A bijective correspondence  Given a covering where is path connected and locally path connected, let be the set of all coverings equivalent to . Similarly, given a subgroup , let denote the set of all conjugates of . The recipe , where is any element of the fiber , is a well-defined bijective function from the set of all equivalence classes of coverings of by path connected and locally path connected spaces and subgroups of .    Arrows respected  The bijection  respects arrows in the following sense. Suppose the equivalence classes and correspond to the conjugacy classes and via . There is a covering satisfying if and only if for some .        Coverings of  The space is semilocally simply connected, path connected, and locally path connected. What does say in this case?  Let , and identify . Since is abelian, we have for all subgroups . Thus we have a bijective correspondence between subgroups of and equivalence classes of coverings of by path connected and locally path connected spaces.  Next, for any subgroup there is a unique nonnegative integer such that . Furthermore, we have if and only if . This means that the subgroups generated by prime integers are maximal, and the lattice of subgroups of is ordered via divisibility. Here is a portion of this lattice corresponding to the divisors of . An arrow in this diagram indicates that .  Subgroups of integers lattice   Next, for each postive integer it is easy to see that the -fold covering satisfies . Defining to be the usual covering map , we see that up to equivalence, the maps are all the coverings of . Furthermore, the lattice of subgroups above corresponds to the following lattice of coverings. Here an arrow between equivalence classes indicates the existence of a map of coverings.  Lattice of coverings   Not surprisingly, given coverings and with , we can pick the corresponding map of coverings to be the cover !   "
},
{
  "id": "d_map_of_coverings",
  "level": "2",
  "url": "s_covering_classification.html#d_map_of_coverings",
  "type": "Definition",
  "number": "2.21.1",
  "title": "Maps of coverings.",
  "body": " Maps of coverings   Let and be covering maps. A map of coverings is a continuous function satisfying .  Map of coverings   An equivalence of covering maps is a map of coverings that is a homeomorphism. The two covering maps and are equivalent if there is an equivalence of covering maps from to .   "
},
{
  "id": "th_covering_spaces",
  "level": "2",
  "url": "s_covering_classification.html#th_covering_spaces",
  "type": "Theorem",
  "number": "2.21.2",
  "title": "Covering spaces.",
  "body": " Covering spaces   Let be a covering map satisfying . Assume and are path connected and locally path connected.    Lifting criterion  Assume is path connected and locally path connected. If is a continuous map satisfying , then lifts to a map satisfying if and only if . Furthermore, the lifting , if it exists, is unique: , there is at most one lifting satisfying .    Equivalence of based coverings  Let be another covering map satisfying . Assume is path connected and locally path connected. There is an equivalence of covering maps satisfying if and only if . Furthermore, the equivalence , if it exists, is unique.    Equivalence of coverings  Let be another covering map satisfying . Assume is path connected and locally path connected. There is an equivalence of covering maps if and only if the subgroups are conjugate.     "
},
{
  "id": "lemma_lifting_coverings",
  "level": "2",
  "url": "s_covering_classification.html#lemma_lifting_coverings",
  "type": "Lemma",
  "number": "2.21.3",
  "title": "Liftings of coverings.",
  "body": " Liftings of coverings   Let and be coverings, and assume that , , and are path connected and locally path connected. Any map of coverings is itself a covering.   "
},
{
  "id": "cor_covering_spaces",
  "level": "2",
  "url": "s_covering_classification.html#cor_covering_spaces",
  "type": "Corollary",
  "number": "2.21.4",
  "title": "Covering spaces.",
  "body": " Covering spaces   Let and be coverings. Assume , , and are path connected and locally path connected.   Let and . There is a covering satisfying and if and only if . Furthermore, the covering is unique in this case.    Let and . There is a covering satisfying if and only if the subgroup is contained in a conjugate of the subgroup .       The corollary follows pretty much directly from and .   "
},
{
  "id": "d_universal_covering_space",
  "level": "2",
  "url": "s_covering_classification.html#d_universal_covering_space",
  "type": "Definition",
  "number": "2.21.5",
  "title": "Universal covering space.",
  "body": " Universal covering space   Let be path connected and locally path connected. If is a covering map and is simply connected, then is called a universal covering of , and is called the universal covering space of .   "
},
{
  "id": "s_covering_classification-7",
  "level": "2",
  "url": "s_covering_classification.html#s_covering_classification-7",
  "type": "Remark",
  "number": "2.21.6",
  "title": "Universal covering space is locally path connected.",
  "body": " Universal covering space is locally path connected  If is path connected and locally path connected and where is path connected, then it turns out that is also locally path connected (thanks to being a covering map). Thus a universal covering space of is automatically path connected (since it is simply connected) and locally path connected (thanks to the covering map ).  "
},
{
  "id": "s_covering_classification-8",
  "level": "2",
  "url": "s_covering_classification.html#s_covering_classification-8",
  "type": "Remark",
  "number": "2.21.7",
  "title": "Universal covering space.",
  "body": " Universal covering space  Let be a universal covering.  If is another universal covering, then we have and thus . It follows from that and are equivalent as covering spaces . This justifies the the in .  Similarly, given any covering , since , implies there is a unique covering satisfying and . This justifies the universal in .  "
},
{
  "id": "d_semilocally_simply_connected",
  "level": "2",
  "url": "s_covering_classification.html#d_semilocally_simply_connected",
  "type": "Definition",
  "number": "2.21.8",
  "title": "Semilocally simply connected.",
  "body": " Semilocally simply connected   A space is semilocally simply connected if for each there is a neighborhood of such that the homomorphism induced by inclusion is trivial.   "
},
{
  "id": "th_universal_covering",
  "level": "2",
  "url": "s_covering_classification.html#th_universal_covering",
  "type": "Theorem",
  "number": "2.21.9",
  "title": "Universal covering space.",
  "body": " Universal covering space   Let be path connected and locally path connected. There is a universal covering space of if and only if is semilocally simply connected.   "
},
{
  "id": "th_covering_correspondence",
  "level": "2",
  "url": "s_covering_classification.html#th_covering_correspondence",
  "type": "Theorem",
  "number": "2.21.10",
  "title": "Covering space correspondence.",
  "body": " Covering space correspondence   Assume is semilocally simply connected. Fix an element and let .   A surjection  Given any subgroup there is a path connected and locally path connected pointed covering satisfying . In other words the map is a surjection from the set of all path connected and locally path connected pointed coverings of and subgroups of .    A bijective correspondence  Given a covering where is path connected and locally path connected, let be the set of all coverings equivalent to . Similarly, given a subgroup , let denote the set of all conjugates of . The recipe , where is any element of the fiber , is a well-defined bijective function from the set of all equivalence classes of coverings of by path connected and locally path connected spaces and subgroups of .    Arrows respected  The bijection  respects arrows in the following sense. Suppose the equivalence classes and correspond to the conjugacy classes and via . There is a covering satisfying if and only if for some .      "
},
{
  "id": "eg_S1_coverings",
  "level": "2",
  "url": "s_covering_classification.html#eg_S1_coverings",
  "type": "Example",
  "number": "2.21.11",
  "title": "Coverings of <span class=\"process-math\">\\(S^1\\)<\/span>.",
  "body": " Coverings of  The space is semilocally simply connected, path connected, and locally path connected. What does say in this case?  Let , and identify . Since is abelian, we have for all subgroups . Thus we have a bijective correspondence between subgroups of and equivalence classes of coverings of by path connected and locally path connected spaces.  Next, for any subgroup there is a unique nonnegative integer such that . Furthermore, we have if and only if . This means that the subgroups generated by prime integers are maximal, and the lattice of subgroups of is ordered via divisibility. Here is a portion of this lattice corresponding to the divisors of . An arrow in this diagram indicates that .  Subgroups of integers lattice   Next, for each postive integer it is easy to see that the -fold covering satisfies . Defining to be the usual covering map , we see that up to equivalence, the maps are all the coverings of . Furthermore, the lattice of subgroups above corresponds to the following lattice of coverings. Here an arrow between equivalence classes indicates the existence of a map of coverings.  Lattice of coverings   Not surprisingly, given coverings and with , we can pick the corresponding map of coverings to be the cover !  "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory",
  "body": " Theory   "
},
{
  "id": "appendix-specimens",
  "level": "1",
  "url": "appendix-specimens.html",
  "type": "Appendix",
  "number": "D",
  "title": "Topological specimens",
  "body": " Topological specimens   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "E",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "kursobjekt-7-6",
  "level": "1",
  "url": "kursobjekt-7-6.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
